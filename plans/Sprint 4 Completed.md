# Phase 4 Current Plan: Story Creation Improvisations

This plan details the implementation of Phase 4 requirements, introducing user-customizable dark/light mode settings, improved card back-navigation, an enhanced forum thread layout with card inline editing, and a robust story creation AI agent capable of file output, fuzzy autocorrect for files, revisions, and open-ended thread commands.

## Key Changes:
1. **Dark/Light Mode:**
   - Saved in User Settings and togglable in the Header.
   - Updates MongoDB settings collection and dynamically applies HSL color tokens in `index.css`.
2. **Card Navigation:**
   - Navbar back button cancels active card view (returns to Kanban board) instead of returning to Home screen.
3. **Card Edit & Forum Thread Layout:**
   - Single-column forum layout (PM ticket style header, ticket description as main post, replies sequentially at bottom, AI and reply controls at the very bottom).
   - Inline Title and Description editing in Kanban Card details.
4. **Intelligent AI Response:**
   - OpenRouter calls use the default model selected in the Settings tab (persisted via `localStorage` on change).
   - Dynamic prompt parses comments, extracts input files (with fuzzy autocorrect against virtual files), output files, or revision directives.
   - Writes/Updates virtual files in appropriate folders, logs AI tokens/costs, and replies in the discussion thread.
