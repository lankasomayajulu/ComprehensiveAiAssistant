# Current Plan - Phase 3 Story Creation Extensions

This plan outlines the design, schema, APIs, and frontend layouts for the Phase 3 Story Creation features, MongoDB encryption, AI logs explorer, and admin carousel bar graph.

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
Implement the Phase 3 features for Story Creation projects:
- "Plan Prompt" button when the active file is `Continue System Prompt` to generate prompts based on Story Tags.
- Checkbox-based file selection in PlayArea explorer tree.
- "Continue" story flow to append text to the active file, auto-detect the chapter, auto-create a card on the Kanban Board, and add the AI response to the comment thread.
- Board-based command parsing:
  - "Use '[File 1]', '[File 2]' ... to write/create [Target File]" -> auto-generates the file and replies in thread.
  - "Revise '[Target File]' to [Instructions]" -> auto-revises the file and updates it in DB.
- MongoDB Encryption: Encrypt Story Board card title, description, comment text, and AI logs request/output text. Provide backward compatibility.
- Explorer-style AI Logs View: Group logs by Year -> Month with individual/monthly/yearly deletions and a right pane detail viewer.
- Admin Dashboard Carousel slide: Actual AI logs statistics grouped by Project and User in CSS bar graphs.

---

## Implementation Phases

### Phase 1: Models and Backend Endpoints Setup
- [ ] Add `StoryContinuePayload` schema in `backend/app/models.py`.
- [ ] Add new fields `request_text` and `output_text` to `AILogResponse` in `models.py`.
- [ ] Implement `safe_decrypt_data` and update card/comment retrieval, creation, and updates in `backend/app/routers/projects.py` to encrypt fields in MongoDB and decrypt them on load.
- [ ] Implement `POST /projects/{project_id}/generate-prompt` in `projects.py`.
- [ ] Implement `POST /projects/{project_id}/continue-story` in `projects.py`.
- [ ] Implement Kanban card AI comment instruction parses (creation and revision) inside `POST /projects/{project_id}/cards/{card_id}/ai-response` in `projects.py`.
- [ ] Implement log deletion endpoints and global admin stats endpoint in `projects.py`.

### Phase 2: PlayArea Extensions (Plan Prompt & Continuation)
- [ ] Add file selection state `selectedFileIds` and checkboxes to `PlayArea.jsx`.
- [ ] Render the "Plan Prompt" button in `PlayArea.jsx` when the active file is `Continue System Prompt`.
- [ ] Wire the "Plan Prompt" button click to the `/generate-prompt` backend API.
- [ ] Modify the "Continue" button handler in `PlayArea.jsx` to call the `/continue-story` API, append text, and refresh.

### Phase 3: AI Logs View (Explorer Layout & Deletions)
- [ ] Modify `LogsView.jsx` to use a dual-pane explorer layout.
- [ ] Group logs by Year and Month in the left pane, rendering collapse/expand toggles.
- [ ] Render Delete buttons beside logs, month nodes, and year nodes. Add confirm dialogs.
- [ ] Render the selected log's input/output token counts, cost, generating user, model used, request text, and output text in the right pane detail viewer.

### Phase 4: Admin Dashboard Stats (Carousel & CSS Bar Graph)
- [ ] Update `App.jsx` to pass the `user` object to the `Dashboard` component.
- [ ] Modify `Dashboard.jsx` to check if `user?.role === "administrator"`.
- [ ] For admins, fetch global AI usage statistics from `/projects/admin/ai-logs-stats`.
- [ ] Update Slide 2 of the Carousel in `Dashboard.jsx` to render the statistics using horizontal/vertical CSS bar graphs (visualized by Project and by User).

### Phase 5: Verification & E2E Testing
- [ ] Add unit tests in `tests/test_projects.py`.
- [ ] Run backend unit tests using pytest or unittest.
- [ ] Perform manual testing of prompt planning, story continuation, card-based file creation, logs deletions, and dashboard carousel stats.
