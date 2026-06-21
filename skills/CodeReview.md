# Skill 3: Code review

This skill defines the guidelines for performing code audits, checking documentation coverage, and compiling compliance reports.

---

## Review Guidelines

> [!WARNING]
> **Constraint: Read-Only Audit**
> Code Review must only analyze the code and report findings. It **MUST NOT** rewrite, refactor, or modify any code.

### 1. Coding Practice Audit
Inspect all files for violations of the [CodingPractices](file:///d:/Projects/ComprehensiveAiAssistant/skills/CodingPractices.md):
- Check for direct modifications to existing functions instead of cloning them.
- Check if functions are too large (e.g., > 30 lines) or have multiple responsibilities.
- Check if shared code is in incorrect locations or modified after lock.
- Check if frontend files use non-jsx extensions or don't use React + Vite.
- Check if backend files don't use Python or lack MCP server integration.
- Check if tests are missing for new functionality.

### 2. Documentation Audit
- Check if all active functionality has a corresponding documentation file in [docs/](file:///d:/Projects/ComprehensiveAiAssistant/docs/).
- Verify that documentation lists inputs, outputs, schemas, and important details.
- Identify and document any undocumented functions or classes.

### 3. Report Generation
Write a detailed report in `docs/ReviewReport.md` containing:
- List of undocumented functions (and their signatures/descriptions to be written).
- Table of coding practice violations (file, line, violation detail).
- Recommendations list.
