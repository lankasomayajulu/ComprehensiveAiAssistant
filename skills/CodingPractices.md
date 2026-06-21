# Skill 2: CodingPractices

This document defines the coding practices, folder structures, testing, and documentation standards for all development tasks.

---

## Developer Checklists & Rules

### 1. Code Modularity & Isolation
* **Cloned Functions**: Do not modify existing functions directly. Create a cloned version (e.g., `original_name_v2` or similar) to make changes.
* **Single Responsibility**: Keep functions small, focused on a single specific task, using simple classes or functions.
* **No Large Files**: Do not combine distinct functionalities into a single file. Code must be modular.

### 2. Code Sharing Rules
* **Shared Logic**: Any shared utilities must go into `utils/` (for both frontend and backend).
* **Shared UI Components**: Shared React components must reside in `frontend/src/components/shared/`.
* **Read-Only Code**: Once shared code is developed, it becomes **Read-Only**. Do not modify it unless changes must propagate globally across the application.

### 3. Frontend Standards
* **Technology**: React JS, configured using Vite.
* **Files**: All frontend components must use `.jsx` extensions.

### 4. Backend Standards
* **Technology**: Python.
* **AI Tool Integration**: Every AI component used must have associated Model Context Protocol (MCP) servers and be consumed appropriately.

### 5. Testing & Verification
* **Test Creation**: Write unit/integration tests for every new function or class.
* **Regression Testing**: Execute all existing tests before committing changes to ensure no regressions occur.

### 6. Documentation
* **Folder**: All feature documentation must go into the [docs/](file:///d:/Projects/ComprehensiveAiAssistant/docs/) folder.
* **Requirements**: Documentation must detail inputs, outputs, schemas, and usage examples.

### 7. Plan Tracking
* **Progress Updates**: As features are completed, the corresponding items in [plans/CurrentPlan.md](file:///d:/Projects/ComprehensiveAiAssistant/plans/CurrentPlan.md) must be checked off immediately.
