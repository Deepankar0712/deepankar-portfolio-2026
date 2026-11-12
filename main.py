"""FastAPI entrypoint for Deepankar Sharma's Portfolio App.
"""
import os
import json
import time
from pathlib import Path
from pydantic import BaseModel, EmailStr
from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse, JSONResponse
from platform_app import create_app

PORTFOLIO_DIR = Path(__file__).resolve().parent
RESUME_PATH = PORTFOLIO_DIR / "Deepankar_Sharma_Resume.pdf"
MESSAGES_FILE = PORTFOLIO_DIR / "messages.json"
STATUS_FILE = PORTFOLIO_DIR / "status.json"

class ContactMessage(BaseModel):
    name: str
    email: str
    subject: str = "Portfolio Inquiry"
    message: str

class StatusUpdate(BaseModel):
    available: bool
    status_text: str = "Available for select opportunities"


def register_portfolio_routes(app: FastAPI) -> None:
    @app.get("/api/resume/download")
    async def download_resume():
        if not RESUME_PATH.exists():
            # Check public dir
            alt_path = PORTFOLIO_DIR / "public" / "Deepankar_Sharma_Resume.pdf"
            if alt_path.exists():
                return FileResponse(
                    path=str(alt_path),
                    filename="Deepankar_Sharma_Resume.pdf",
                    media_type="application/pdf"
                )
            raise HTTPException(status_code=404, detail="Resume file not found")
        return FileResponse(
            path=str(RESUME_PATH),
            filename="Deepankar_Sharma_Resume.pdf",
            media_type="application/pdf"
        )

    @app.get("/Deepankar_Sharma_Resume.pdf")
    async def direct_resume():
        if RESUME_PATH.exists():
            return FileResponse(
                path=str(RESUME_PATH),
                filename="Deepankar_Sharma_Resume.pdf",
                media_type="application/pdf"
            )
        alt_path = PORTFOLIO_DIR / "public" / "Deepankar_Sharma_Resume.pdf"
        if alt_path.exists():
            return FileResponse(
                path=str(alt_path),
                filename="Deepankar_Sharma_Resume.pdf",
                media_type="application/pdf"
            )
        raise HTTPException(status_code=404, detail="Resume file not found")

    @app.post("/api/contact")
    async def submit_contact(msg: ContactMessage):
        if not msg.name.strip() or not msg.email.strip() or not msg.message.strip():
            raise HTTPException(status_code=400, detail="Name, email, and message are required.")
        
        record = {
            "name": msg.name.strip(),
            "email": msg.email.strip(),
            "subject": msg.subject.strip(),
            "message": msg.message.strip(),
            "timestamp": time.time(),
            "date": time.strftime("%Y-%m-%d %H:%M:%S")
        }

        messages = []
        if MESSAGES_FILE.exists():
            try:
                messages = json.loads(MESSAGES_FILE.read_text(encoding="utf-8"))
            except Exception:
                messages = []
        
        messages.append(record)
        MESSAGES_FILE.write_text(json.dumps(messages, indent=2), encoding="utf-8")
        
        return {
            "success": True,
            "message": "Thank you! Deepankar has received your note and will get back to you shortly.",
            "data": record
        }

    @app.get("/api/contact/messages")
    async def list_messages():
        if MESSAGES_FILE.exists():
            try:
                return json.loads(MESSAGES_FILE.read_text(encoding="utf-8"))
            except Exception:
                return []
        return []

    @app.get("/api/status")
    async def get_status():
        if STATUS_FILE.exists():
            try:
                return json.loads(STATUS_FILE.read_text(encoding="utf-8"))
            except Exception:
                pass
        return {
            "available": True,
            "status_text": "Available for select opportunities",
            "updated_at": time.strftime("%Y-%m-%d")
        }

    @app.post("/api/status")
    async def update_status(payload: StatusUpdate):
        data = {
            "available": payload.available,
            "status_text": payload.status_text,
            "updated_at": time.strftime("%Y-%m-%d")
        }
        STATUS_FILE.write_text(json.dumps(data, indent=2), encoding="utf-8")
        return {"success": True, "status": data}


app = create_app(register_portfolio_routes)
