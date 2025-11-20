import json
import base64
import audioop
import asyncio
import websockets

from fastapi import FastAPI, WebSocket, Request
from fastapi.responses import PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
from starlette.websockets import WebSocketDisconnect

from config import Config

app = FastAPI()

# Add CORS middleware to allow frontend connections
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # Vite default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

config = Config()
NGROK_DOMAIN = config.NGROK_DOMAIN
OPENAI_API_KEY = config.OPENAI_API_KEY

# ------------------------------------------
# Frontend WebSocket Clients
# ------------------------------------------
frontend_clients = set()

@app.websocket("/frontend-stream")
async def frontend_stream(ws: WebSocket):
    await ws.accept()
    frontend_clients.add(ws)
    print("🖥️ Frontend connected")

    try:
        while True:
            await ws.receive_text()  # frontend doesn’t send anything
    except WebSocketDisconnect:
        frontend_clients.remove(ws)
        print("🖥️ Frontend disconnected")


# --------------------------------------------------------------
# 1. Twilio Incoming Call → Start Media Stream
# --------------------------------------------------------------
@app.post("/incoming-call")
async def incoming_call(request: Request):
    twiml = f"""
<Response>
    <Start>
        <Stream url="wss://{NGROK_DOMAIN}/media-stream" />
    </Start>
    <Say voice="alice">Start talking now.</Say>
    <Pause length="60" />
</Response>
"""

    print("===== TwiML SENT TO TWILIO =====")
    print(twiml)
    print("=================================")

    return PlainTextResponse(twiml, media_type="text/xml")


# --------------------------------------------------------------
# 2. Twilio MediaStream → OpenAI Realtime Transcription
# --------------------------------------------------------------
@app.websocket("/media-stream")
async def media_stream(ws: WebSocket):
    await ws.accept()
    print("🔥 Twilio MediaStream connected")

    # Create Realtime WebSocket transcription session
    async with websockets.connect(
        "wss://api.openai.com/v1/realtime?intent=transcription",
        extra_headers={"Authorization": f"Bearer {OPENAI_API_KEY}"}
    ) as ai_ws:

        print("🤖 Starting OpenAI transcription session")

        # Receive session.created
        session_created = await ai_ws.recv()
        print("🟢 OpenAI Session Created:", session_created)

        # ------------------------------------------------------
        # REAL transcription-only settings (from docs)
        # ------------------------------------------------------
        await ai_ws.send(json.dumps({
            "type": "session.update",
            "session": {
                "type": "transcription",

                "audio": {
                    "input": {
                        "format": {
                            "type": "audio/pcmu"   # Twilio’s μ-law
                        },
                        "transcription": {
                            "model": "gpt-4o-transcribe",
                            "language": "en"
                        },
                        "noise_reduction": {
                            "type": "near_field"
                        },
                        "turn_detection": {
                            "type": "server_vad",
                            "threshold": 0.5,
                            "prefix_padding_ms": 300,
                            "silence_duration_ms": 1000
                        }
                    }
                }
            }
        }))

        updated = await ai_ws.recv()
        print("🟢 Updated Session State:", updated)

        call_sid = "unknown"

        # ------------------------------------------------------
        # Main loop: forward Twilio media → OpenAI
        # ------------------------------------------------------
        try:
            while True:
                raw = await ws.receive_text()
                data = json.loads(raw)
                event = data.get("event")

                # Call start
                if event == "start":
                    call_sid = data["start"]["callSid"]
                    print(f"🟢 Call started: {call_sid}")
                    continue

                # Media packets from Twilio (µ-law)
                if event == "media":
                    mulaw_chunk = base64.b64decode(data["media"]["payload"])

                    # Pass straight through as µ-law audio
                    await ai_ws.send(json.dumps({
                        "type": "input_audio_buffer.append",
                        "audio": base64.b64encode(mulaw_chunk).decode()
                    }))

                    # VAD handles commit automatically

                # Read transcription output events
                try:
                    openai_raw = await asyncio.wait_for(ai_ws.recv(), timeout=0.001)
                    msg = json.loads(openai_raw)

                    # ------------------------------------------------------
                    # PARTIAL TRANSCRIPTION
                    # ------------------------------------------------------
                    if msg.get("type") == "conversation.item.input_audio_transcription.delta":
                        delta = msg.get("delta", "")
                        if delta.strip():
                            print(f"🎤 {call_sid} (partial): {delta}")

                            # Broadcast to all frontend clients
                            for client in list(frontend_clients):
                                try:
                                    await client.send_text(json.dumps({
                                        "type": "partial",
                                        "text": delta
                                    }))
                                except:
                                    frontend_clients.remove(client)

                    # ------------------------------------------------------
                    # FINALIZED TRANSCRIPTION
                    # ------------------------------------------------------
                    if msg.get("type") == "conversation.item.input_audio_transcription.completed":
                        transcript = msg.get("transcript", "")
                        if transcript.strip():
                            print(f"🎤 {call_sid} (final): {transcript}")

                            # Broadcast to all frontend clients
                            for client in list(frontend_clients):
                                try:
                                    await client.send_text(json.dumps({
                                        "type": "final",
                                        "text": transcript
                                    }))
                                except:
                                    frontend_clients.remove(client)

                except asyncio.TimeoutError:
                    pass

        except WebSocketDisconnect:
            print("🔴 Twilio WebSocket closed — call ended.")
        except Exception as e:
            print("⚠️ Unexpected error:", e)


# --------------------------------------------------------------
# 3. Test Endpoint for Frontend Development
# --------------------------------------------------------------
@app.post("/test-transcript")
async def test_transcript(text: str):
    """
    Send a test transcript to all connected frontend clients.
    Useful for testing the WebSocket connection without a real call.
    
    Usage: POST /test-transcript?text=Your+message+here
    """
    message = json.dumps({
        "type": "final",
        "text": text
    })
    
    sent_count = 0
    for client in list(frontend_clients):
        try:
            await client.send_text(message)
            sent_count += 1
        except:
            frontend_clients.remove(client)
    
    return {
        "status": "sent",
        "clients": sent_count,
        "message": text
    }
