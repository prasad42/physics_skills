---
name: log
description: Update RUNLOG.md with a log entry for a completed experiment or code change.
disable-model-invocation: true
---

# Skill: log

**Leading word**: `log` — writing a disciplined record of what was tried, why, and what came of it.

## Structure

A log entry follows this template; any section may be omitted:

```
## YYYY-MM-DD

### Goal: <short description>
**Code**: <files, commands>
**Notes**: <context, caveats, interpretations>
**Results**: <quantitative findings>
**Finished**: YYYY-MM-DD
```

- **Date header** (`## YYYY-MM-DD`) records when the goal was first conceived.
- **`Finished`** records when the goal was completed (may be a later date).
- New entries are inserted at the **top** of `RUNLOG.md`.
- Multiple goals on the same day share one `## YYYY-MM-DD` header, each in its own `### Goal` block.
- When appending to an existing goal, match by **keywords** in the goal title; ask the user before writing.

## Steps

### Step 1 — Gather context
Read `RUNLOG.md` and run `git log --oneline -3`. Check what changed and whether those changes are already logged.

### Step 2 — Propose
- If unlogged git changes exist, suggest a draft entry based on the commit messages and file diffs.
- If nothing new in git or everything is already logged, ask the user to narrate what they did or paste a draft paragraph.

### Step 3 — Shape
Reformat the user's narration or draft into the Goal / Code / Notes / Results structure. Ask clarifying questions if anything is ambiguous.

### Step 4 — Confirm
Show the formatted entry. Ask for approval before writing.

### Step 5 — Write
Insert the approved entry at the top of `RUNLOG.md` (after the `## YYYY-MM-DD` header for the current date, or create a new header if none exists for that date).

**Completion criterion**: `RUNLOG.md` updated with the confirmed entry, matching the template structure, at the correct position.
