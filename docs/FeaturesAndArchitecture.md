# Features and Architecture Documentation

This document describes the design, database schemas, API interfaces, and setup instructions for the Comprehensive AI Assistant.

---

## Technical Overview

The application is structured into two main systems:
1. **Backend**: A python FastAPI REST service connected to a MongoDB database.
2. **Frontend**: A React application bootstrapped with Vite and styled using custom CSS properties for easy theme adjustment.

---

## Security & Secrets Configuration

To protect user confidentiality, the application implements symmetric encryption and dynamic credentials authorization.

### 1. Persistent Secrets Storage
On system startup, the [secrets_manager.py](file:///d:/Projects/ComprehensiveAiAssistant/backend/app/secrets_manager.py) scans for a local file called `.secrets.env` inside the backend directory:
- If present, it loads the persistent `JWT_SECRET` and `ENCRYPTION_KEY`.
- If missing, it auto-generates a secure 32-byte hex key for signing JWT tokens and a Fernet-compatible base64 encryption key, storing both inside `.secrets.env`.

### 2. User Settings Encryption
All fields saved in the `user_settings` collection (`openrouter_api_key`, `google_ai_key`) are encrypted using the AES-based Fernet symmetric encryption mechanism before being written to MongoDB. They are decrypted on the fly when requested by their owner, ensuring that clear text credentials are never stored in the database.

---

## Database Schema (MongoDB)

The project utilizes two collections in the `AI_Assistant_db` database:

### 1. `users` collection
Contains the system's user credentials and privilege levels.
- **`username`**: String (Unique index).
- **`password_hash`**: String (Bcrypt-hashed password).
- **`role`**: String (`administrator` or `normal_user`).
- **`created_at`**: Datetime (UTC timezone).

### 2. `user_settings` collection
Contains the user-specific API keys for AI models integration.
- **`username`**: String (Unique index, references user).
- **`openrouter_api_key`**: String (Fernet-encrypted base64).
- **`google_ai_key`**: String (Fernet-encrypted base64).
- **`updated_at`**: Datetime (UTC timezone).

---

## API Specification

All backend endpoints are prefixed with `/api`.

### 1. User Authentication
#### `POST /api/users/login`
- **Request Body**:
  - `username` (string, required)
  - `password` (string, required)
- **Response Body**:
  - `access_token` (string, JWT signed by dynamic `JWT_SECRET`)
  - `token_type` ("bearer")
  - `username` (string)
  - `role` ("administrator" | "normal_user")

### 2. Personal Profile & Settings
#### `GET /api/users/me`
- **Headers**: `Authorization: Bearer <token>`
- **Response Body**:
  - `username` (string)
  - `role` (string)

#### `PUT /api/users/me/password`
- **Headers**: `Authorization: Bearer <token>`
- **Request Body**:
  - `new_password` (string, minimum 4 characters)
- **Response Body**:
  - `message` (string)

#### `GET /api/users/me/settings`
- **Headers**: `Authorization: Bearer <token>`
- **Response Body** (Decrypted clear text values):
  - `openrouter_api_key` (string)
  - `google_ai_key` (string)

#### `PUT /api/users/me/settings`
- **Headers**: `Authorization: Bearer <token>`
- **Request Body**:
  - `openrouter_api_key` (string, optional)
  - `google_ai_key` (string, optional)
- **Response Body**:
  - `message` (string)

### 3. Administrative Operations (Admin Only)
#### `GET /api/users`
- **Headers**: `Authorization: Bearer <token>`
- **Response Body**: List of:
  - `username` (string)
  - `role` (string)

#### `POST /api/users/create`
- **Headers**: `Authorization: Bearer <token>`
- **Request Body**:
  - `username` (string, alphanumeric, minimum 3 chars)
  - `password` (string, minimum 4 chars)
  - `role` ("administrator" | "normal_user")
- **Response Body**:
  - `username` (string)
  - `role` (string)

#### `PUT /api/users/change-password`
- **Headers**: `Authorization: Bearer <token>`
- **Request Body**:
  - `username` (string, required)
  - `new_password` (string, required)
- **Response Body**:
  - `message` (string)

---

## Frontend Components Map

- **`App.jsx`**: Manages routing states and holds global auth contexts.
- **`Layout.jsx`**: Shared shell presenting Header, scroll container, and Status Bar.
- **`Header.jsx`**: Topbar display featuring logo and user trigger dropdown.
- **`StatusBar.jsx`**: Informative strip showing active database and connection details.
- **`LoginScreen.jsx`**: Form for validating and submitting login details.
- **`Dashboard.jsx`**: Blank dashboard panel post-login.
- **`Profile.jsx`**: Multi-pane menu for configuration.
- **`UserSettings.jsx`**: Form to submit key tokens.
- **`ChangePassword.jsx`**: Form to update personal passwords.
- **`UserManagement.jsx`**: Administrator interface for listings, additions, and password overrides.

---

## How to Run the Application

Follow these instructions to configure and execute both the backend and frontend components.

### Prerequisites
- **Node.js** (v18+ recommended)
- **Python** (v3.12+ recommended)
- **MongoDB** (running locally on port `27017`)

---

### 1. Running the Backend API

1. Navigate to the project root directory:
   ```powershell
   cd d:\Projects\ComprehensiveAiAssistant
   ```
2. Initialize the Python virtual environment under `backend/` using `uv`:
   ```powershell
   python -m uv venv backend/.venv
   ```
3. Install the required python packages:
   ```powershell
   python -m uv pip install --python backend\.venv\Scripts\python.exe -r backend/requirements.txt
   ```
4. Start the FastAPI uvicorn server:
   ```powershell
   backend\.venv\Scripts\python.exe -m uvicorn backend.app.main:app --reload --port 8000
   ```
   *The backend will start on `http://127.0.0.1:8000`. On startup, it automatically seeds the initial administrator user:*
   - **Username**: `admin`
   - **Password**: `admin`

---

### 2. Running the Frontend App

1. Open a new terminal and navigate to the `frontend/` folder:
   ```powershell
   cd d:\Projects\ComprehensiveAiAssistant\frontend
   ```
2. Install the necessary node packages:
   ```powershell
   npm install
   ```
3. Boot up the Vite React development server:
   ```powershell
   npm run dev
   ```
   *The frontend dashboard will be available at `http://localhost:5173`. Open this URL in your web browser and sign in using the administrator credentials.*
