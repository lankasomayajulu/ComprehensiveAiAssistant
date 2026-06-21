# Current Plan - Kanban Custom Application

This plan outlines the design, database schema, API router, and frontend layouts for the Kanban and AI Story Assistant features.

---

## Core Guidelines & Safety Constraints

> [!WARNING]
> **Constraint 1: Avoid Modifying Existing Functions**
> Do not directly modify any existing function or component unless explicitly required. If modification is necessary, clone the existing function to a new name/file, modify the cloned version, and use the cloned version.

> [!IMPORTANT]
> **Constraint 2: Incremental & Reversible Development**
> All code changes must be strictly incremental, tested, and documented. Existing tests must not fail (regression testing is mandatory).

---

## Active Task Definition
Implement a comprehensive Kanban project management app including "Story Creation" and "Coding" project types, encrypted MongoDB Virtual Files/Folders, a dual-pane Play Area, and OpenRouter AI integrations.

---

## Implementation Phases

### Phase 1: Models and Routing Setup
- [ ] Update `backend/app/models.py` with validation structures.
- [ ] Create `backend/app/routers/projects.py` for API routes.
- [ ] Register the project router in `backend/app/main.py`.

### Phase 2: Core Backend Logic
- [ ] Implement encryption/decryption database calls for VirtualFiles.
- [ ] Implement file system security checks for Coding projects.
- [ ] Integrate OpenRouter API calls with proper usage logging.

### Phase 3: Shared UI & Modal Elements
- [ ] Create `frontend/src/components/shared/ModalAlert.jsx` reusable modal.
- [ ] Integrate Project Page route state in `frontend/src/App.jsx`.

### Phase 4: Dashboard & Carousel Setup
- [ ] Implement the 50%-carousel list layout on `frontend/src/components/Dashboard.jsx`.
- [ ] Add the project creation wizard modal.

### Phase 5: Project Management & Play Area Tabs
- [ ] Implement `frontend/src/components/ProjectPage.jsx`.
- [ ] Implement `frontend/src/components/KanbanBoard.jsx` with dragging columns and chat drawer.
- [ ] Implement `frontend/src/components/PlayArea.jsx` with dragging folder/file list and editor/preview.
- [ ] Implement `frontend/src/components/LogsView.jsx` for AI logging history.

### Phase 6: E2E Integration and Verification
- [ ] Write backend endpoint unit tests in `tests/test_projects.py`.
- [ ] Perform E2E manual testing of file autosaving and dragging.
- [ ] Update `docs/` and run reviews.
