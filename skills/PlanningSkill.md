# Skill 1: Planning Skill

This skill is responsible for analyzing the requirements and existing codebase, then creating a structured, incremental execution plan.

## Input Sources
* **Task Description**: Read from [instructions.txt](file:///d:/Projects/ComprehensiveAiAssistant/instructions.txt) at the workspace root.
* **Codebase Analysis**: Recursively scan the `frontend/` and `backend/` directories to analyze existing functionality, files, and testing setups.

---

## Execution Guidelines

### 1. Codebase Audit
- Examine all files in `frontend/` and `backend/`.
- Understand the existing data flow, component hierarchies, APIs, and utilities.
- Search for and run existing test suites to establish a baseline.

### 2. Plan Generation
Generate or update [plans/CurrentPlan.md](file:///d:/Projects/ComprehensiveAiAssistant/plans/CurrentPlan.md) adhering to the following rules:

> [!WARNING]
> **Safety Rule: No Direct Modifications**
> The plan must explicitly state that existing functions are **NOT** to be modified directly. If modifications are required, a cloned and renamed version of the function must be created and used.

> [!IMPORTANT]
> **Rule: Phased & Incremental Approach**
> - Divide the work into logical, isolated phases (e.g., Phase 1: Setup, Phase 2: Logic, Phase 3: Verification).
> - Each phase must build incrementally on top of the previous phase.
> - Ensure changes do not break or regress existing features.

### 3. Verification Plan
- Detail the exact automated tests and manual steps required to verify each phase of the plan.
