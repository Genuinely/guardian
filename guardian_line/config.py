from dotenv import load_dotenv
import os

load_dotenv()  # Load .env into environment variables

def get_env(key: str, default=None):
    value = os.getenv(key, default)
    if value is None:
        raise RuntimeError(f"Missing environment variable: {key}")
    return value

class Config:
    NGROK_DOMAIN  = get_env("NGROK_DOMAIN")
    SENIOR_NUMBER = get_env("SENIOR_NUMBER")

    # Optional for future features
    TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
    TWILIO_AUTH_TOKEN  = os.getenv("TWILIO_AUTH_TOKEN")
    TWILIO_NUMBER      = os.getenv("TWILIO_PHONE_NUMBER")
    OPENAI_API_KEY     = os.getenv("OPENAI_API_KEY")
