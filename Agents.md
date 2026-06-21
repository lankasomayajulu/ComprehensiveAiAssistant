# Agentic AI System & Skill Router

This document defines the agent architecture and the routing logic to select the appropriate skills based on the active task in [instructions.txt](file:///d:/Projects/ComprehensiveAiAssistant/instructions.txt).

## Agent Profiles

The system contains four specialized agent roles, each aligned with a specific skill:

| Agent Name | Skill Aligned | Core Responsibility |
| :--- | :--- | :--- |
| **Planning Agent** | [Skill 1: Planning Skill](file:///d:/Projects/ComprehensiveAiAssistant/skills/PlanningSkill.md) | Analyzes existing code structure and compiles an incremental, phased implementation plan. |
| **Developer Agent** | [Skill 2: CodingPractices](file:///d:/Projects/ComprehensiveAiAssistant/skills/CodingPractices.md) | Implements features incrementally, develops test cases, and updates documentation. |
| **Reviewer Agent** | [Skill 3: Code review](file:///d:/Projects/ComprehensiveAiAssistant/skills/CodeReview.md) | Inspects code and documentation for compliance with coding practices without refactoring. |
| **Refactoring Agent** | [Skill 4: Code Refactoring](file:///d:/Projects/ComprehensiveAiAssistant/skills/CodeRefactoring.md) | Refactors code to align with coding standards and resolves missing documentation. |

---

## Routing & Skill Selection Rules

When a task is loaded from [instructions.txt](file:///d:/Projects/ComprehensiveAiAssistant/instructions.txt), the Agentic AI identifies the task category and selects the corresponding skills:

> [!IMPORTANT]
> **Rule 1: Task Categorization**
> Tasks are categorized into two primary categories: **Development/Implementation** and **Quality/Maintenance**.

### 1. Development & Implementation Tasks
* **Task Indicators**: `New feature`, `Modify feature`, `Add functionality`, `Implement`, `Create UI/Backend`
* **Workflow**:
  1. **Planning Agent** runs first using **Planning Skill** to produce a phased, safe plan in [CurrentPlan.md](file:///d:/Projects/ComprehensiveAiAssistant/plans/CurrentPlan.md).
  2. **Developer Agent** executes the plan using **CodingPractices**, modifying only cloned function copies if existing behavior is impacted, writing tests, updating docs, and checking off plan tasks.

### 2. Quality, Audit, & Maintenance Tasks
* **Task Indicators**: `Review code`, `Check quality`, `Audit`, `Refactor`, `Clean up`, `Optimize`, `Add tests/docs`
* **Workflow**:
  * For **Code Review & Audits**: The **Reviewer Agent** runs using **Code review** to check documentation and code quality, documenting any deviations in `docs/ReviewReport.md`.
  * For **Code Refactoring & Cleanups**: The **Refactoring Agent** runs using **Code Refactoring** to resolve violations identified by the reviewer and update docs.

---

## Programmatic Routing Logic

The programmatic execution of this routing is handled via [skills/planning.py](file:///d:/Projects/ComprehensiveAiAssistant/skills/planning.py) and the other skill modules. The router parses the keywords in `instructions.txt` and invokes the corresponding module.
