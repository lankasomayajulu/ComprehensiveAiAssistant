from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import init_db
from .routers import users, projects

app = FastAPI(title="Comprehensive AI Assistant API", version="1.0.0")

# Set up CORS middleware to allow the Vite React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Startup hook to initialize MongoDB collections and admin seeding
@app.on_event("startup")
async def startup_event():
    init_db()

# Include routers
app.include_router(users.router, prefix="/api")
app.include_router(projects.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Comprehensive AI Assistant Backend is running."}
