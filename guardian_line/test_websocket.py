#!/usr/bin/env python3
"""
Test script to send mock transcripts to connected frontend clients.
Run this while the server is running to test the WebSocket connection.

Usage:
    python test_websocket.py
"""

import asyncio
import json
import requests
import time

# Add test endpoint to server first
test_messages = [
    "Hello, this is a test message.",
    "I'm calling from the IRS.",
    "You need to provide your social security number immediately.",
    "This is your final warning.",
    "Please stay on the line."
]

async def send_test_transcripts():
    """Send test transcripts to the backend"""
    base_url = "http://localhost:8000"
    
    print("🧪 Starting WebSocket test...")
    print("📝 Sending test transcripts to backend\n")
    
    for i, message in enumerate(test_messages, 1):
        print(f"[{i}/{len(test_messages)}] Sending: {message}")
        
        # You'll need to add this endpoint to server.py (see SETUP.md)
        try:
            response = requests.post(
                f"{base_url}/test-transcript",
                params={"text": message}
            )
            if response.status_code == 200:
                print("    ✅ Sent successfully")
            else:
                print(f"    ❌ Error: {response.status_code}")
        except Exception as e:
            print(f"    ❌ Failed to connect: {e}")
            print("\n⚠️  Make sure the backend server is running!")
            return
        
        # Wait 2 seconds between messages
        await asyncio.sleep(2)
    
    print("\n✅ Test complete! Check your frontend to see the transcripts.")

if __name__ == "__main__":
    print("\n" + "="*60)
    print("  Guardian WebSocket Test Script")
    print("="*60 + "\n")
    print("This script will send test transcripts to your frontend.")
    print("Make sure both backend and frontend are running!\n")
    
    asyncio.run(send_test_transcripts())

