# Current Plan - Comprehensive AI Assistant

This plan outlines the design, architecture, and step-by-step phased development for the Comprehensive AI Assistant as defined in [instructions.txt](file:///d:/Projects/ComprehensiveAiAssistant/instructions.txt).

---

## Core Guidelines & Safety Constraints

> [!WARNING]
> **Constraint 1: Avoid Modifying Existing Functions**
> Do not directly modify any existing function or component unless explicitly required. If modification is necessary, clone the existing function to a new name/file, modify the cloned version, and use the cloned version.

> [!IMPORTANT]
> **Constraint 2: Incremental & Reversible Development**
> All code changes must be strictly incremental, tested, and documented. Existing tests must not fail (regression testing is mandatory).

---

## Technical Architecture Overview

### Backend Architecture
- **Framework**: Python FastAPI
- **Database**: MongoDB (running locally, database: `AI_Assistant_db`)
- **Package Management**: Astral `uv` (run using `python -m uv`)
- **Security**: JWT-based token authentication signed via a persistent dynamically generated `JWT_SECRET`.
- **Encryption**: Symmetric cryptography using `cryptography.fernet` to encrypt user settings (OpenRouter/Google AI API keys) before writing to MongoDB, and decrypting them on retrieval.
- **Key Modules**:
  - `backend/app/main.py`: Application startup, CORS configuration, API router inclusion.
  - `backend/app/database.py`: Database connection setup, auto-creation of `users` and `user_settings` collections, seed initial `admin` user if not exists.
  - `backend/app/secrets_manager.py`: Handles creation, storage, and loading of persistent JWT keys and encryption secrets, and exposes encrypt/decrypt operations.
  - `backend/app/auth.py`: JWT token generation, validation, password hashing (bcrypt), and user extraction dependencies.
  - `backend/app/models.py`: Pydantic request and response schemas.
  - `backend/app/routers/users.py`: Endpoints for login, user creation, user listing, password changing, and setting updates (encrypted).

### Frontend Architecture
- **Framework**: React JS (Vite template)
- **Styling**: Vanilla CSS with custom properties (`:root`) for easy global color scheme adjustments (premium dark modern default).
- **Core Layout Component**:
  - A persistent Shell containing Header (dropdown, back links), Scrollable content, Status Bar, and Scroll-to-Top trigger.
- **Key Screens**:
  - **Login Screen**: Styled auth card (Username, Password, validation).
  - **Dashboard**: Placeholder page visible post-login.
  - **My Profile**: Dual-pane dashboard. Left sidebar options ("User Settings", "Change Password", and "User Management" if administrator) and Right pane content display.
    - `UserSettings`: Form to save OpenRouter API Key and Google AI Key (encrypted).
    - `ChangePassword`: Form to update own credentials.
    - `UserManagement` (Admin only): CRUD management screen for adding users, listing users, and changing their passwords.

---

## Database Schemas (MongoDB)

### `users` collection
```json
{
  "_id": "ObjectId",
  "username": "string (unique)",
  "password_hash": "string",
  "role": "string (administrator | normal_user)",
  "created_at": "datetime"
}
```

### `user_settings` collection
```json
{
  "_id": "ObjectId",
  "username": "string (unique reference)",
  "openrouter_api_key": "string (Fernet-encrypted base64)",
  "google_ai_key": "string (Fernet-encrypted base64)",
  "updated_at": "datetime"
}
```

---

## Implementation Phases

### Phase 1: Environment Preparation and Project Initialization
- [x] Install `uv` globally or confirm its availability via `python -m uv`.
- [x] Create `backend` directory and initialize python virtual environment.
- [x] Install backend dependencies (`fastapi`, `uvicorn`, `pymongo`, `passlib`, `bcrypt`, `pyjwt`, `python-multipart`, `cryptography`).
- [x] Create `backend/requirements.txt`.
- [x] Create `frontend` directory and scaffold React Vite template.
- [x] Install frontend router (`react-router-dom`) and icon package (`lucide-react`).

### Phase 2: Database Initialization and Seeding Logic
- [x] Create `backend/app/database.py` to establish connection to `mongodb://localhost:27017` and verify/create `AI_Assistant_db` database, `users` collection, and `user_settings` collection.
- [x] Seed default admin user: username `admin`, password `admin` (hashed using bcrypt), role `administrator`.
- [x] Create `backend/app/secrets_manager.py` to generate and manage persistent cryptographic keys.
- [x] Create `backend/app/auth.py` with password hashing, password verify, JWT token generation, and dependency injection `get_current_user`.
- [x] Create `backend/app/models.py` defining validation models for credentials, user creation, password updates, and API key settings.

### Phase 3: Backend User Management APIs
- [x] Create `backend/app/routers/users.py` exposing login, profile management, API keys configuration, and admin dashboard endpoints.
- [x] Create `backend/app/main.py` assembling routers, configuring CORS, and invoking database seeding on startup.

### Phase 4: Frontend Theme Setup & Navigation Shell
- [x] Setup `frontend/src/index.css` with a high-fidelity glassmorphic dark mode color scheme using easily modifiable CSS custom properties (`:root`).
- [x] Implement global navigation Layout (`frontend/src/components/shared/Layout.jsx`).
- [x] Configure client-side routing in `frontend/src/App.jsx`.

### Phase 5: Frontend Authentication & Profiles
- [x] Create `frontend/src/components/LoginScreen.jsx`.
- [x] Create `frontend/src/components/Dashboard.jsx` placeholder landing screen.
- [x] Create `frontend/src/components/Profile.jsx` with a dual-pane structure mapping settings form, password updater, and admin dashboard.

### Phase 6: E2E Integration and Quality Audits
- [x] Integrate React frontend with FastAPI backend APIs.
- [x] Execute automated tests for backend logic.
- [x] Run `CodeReviewSkill` to verify quality.
- [x] Generate comprehensive API and user manuals in the `docs/` folder.
