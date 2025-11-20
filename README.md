### Guardian
A project to get a live transcription of a Twilio phone number using OpenAI Realtime API. Built for BridgeGood 2025 AI for social good hackathon to adress scam calls to seniors.

### Stack
* Vite for frontend
* Backend is FastAPI and websockets for real-time transcription
* Twilio for phone number

### How to Run
Fill out the fields in `.env.example` and rename to `.env`.

Then, start `ngrok` in a terminal tab:

`ngrok http 8000`

In another terminal tab, `cd guardian_line` and start the backend server with

`uvicorn server:app --host 0.0.0.0 --port 8000 --reload`


Finally, `cd frontend` and then

`npm -i` to install packages and then

`npm run dev` to start the frontend.

### User Flow
When you call the twilio number and click on the notification, you should see a live transcript highlighting keywords that can signal a scam. Afterwards, you can see a report. 

A Loom walking through the flow is upcoming.