# Project custom-instructions template

Output this as a fenced markdown code block in chat (not a file — the user pastes it into the Project's custom-instructions field themselves). Keep it tight; this is a standing context block read on every turn in that Project, not a place for elaboration.

```
# <Project Name>: <one-line domain/scope tag>

## Context
- <role/affiliation, only if it changes how Claude should engage — e.g. determines assumed rigor level>
- <research area / project domain, one line>
- <assumed background level, stated as what to assume so Claude doesn't re-derive it>

## Communication Style
- **Omit:** <only things specific to THIS project that shouldn't be re-explained>
- **Assume:** <project-specific background/conventions Claude should take as given>
- **Prioritize:** <what this project's sessions should optimize for>
- **Output format:** <project-specific formatting rules, e.g. artifact-only code, skeleton-then-fill writing>

## Project Structure
- `<file/resource name>` – <one-line: what it contains>
- `<file/resource name>` – <one-line: what it contains>

## Standing Requests
1. <recurring behavioral rule>
2. <recurring behavioral rule>

## <Project>-Specific Constraints
- <fixed convention/protocol/tool choice that should never be silently changed>
- <explicit guardrail, e.g. no speculative claims beyond what's established in simulation/theory>
```

## What goes where

- **Context**: only what changes Claude's behavior. Skip generic biography that's already known account-wide; include it only if this specific project needs Claude to engage at a different register than usual.
- **Communication Style**: project-specific deviations only. If the user already has account-wide style preferences, don't restate them here — only note where this project differs (e.g. "code in artifacts only, no chat-inline snippets" might be specific to a heavy-coding project even if the user's general style is more conversational).
- **Project Structure**: the actual files/knowledge sources the user maintains for this project (ask if not evident from the interview — e.g. "what files live in this project besides the draft you just gave me?").
- **Standing Requests**: concrete recurring behaviors, derived from explicit "always/never" statements in the interview, not invented.
- **Constraints**: protocol/tool/method choices that are fixed for this project and shouldn't be silently substituted, plus any guardrail against over-claiming (e.g. "don't generate speculative results not grounded in simulation/theory") if the interview surfaced one.

## Incremental revision

If the user has existing custom instructions for this Project, ask them to paste it in before drafting. Treat it as the base: preserve sections still accurate, and only add or revise what the current draft/interview changed or newly established. Don't regenerate sections from scratch if nothing about them changed — that risks silently dropping nuance the user tuned earlier.

If there's nothing to paste in, generate fresh from the interview using the template above.
