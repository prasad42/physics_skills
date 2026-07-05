---
name: project-summary
description: Build or refresh a project_summary.md, and suggest a matching Claude-Project custom-instructions block, by Socratically interviewing the user about the claims, assumptions, structure, and conventions in a research note or early draft. Trigger ONLY on an explicit request for this — e.g. "grill me on this draft", "interview me about this note to build project_summary.md", "ask me questions and turn this into a project summary". Do NOT trigger automatically just because a draft, research note, or .tex/.md excerpt is shared, or because the user asks to "summarize" or "extract claims from" a draft — those are normal requests Claude should just handle directly. This skill is specifically for the interview-then-write workflow, invoked by name or clear equivalent.
---

# Project Summary

This skill produces two things from one interview:
1. `project_summary.md` — the persistent factual context file for the project.
2. A suggested Claude-Project custom-instructions block — posted in chat only, for the user to paste into the Project's custom-instructions field (Claude has no way to write that field directly).

## Why an interview, not just a summary

A research note or early draft is usually compressed and locally optimized — the author knows which claims are solid, which are hopeful, which assumptions are load-bearing, and which figures are blocked, but the draft itself doesn't always say so explicitly. A `project_summary.md` is only useful as a persistent context file if it captures that judgment, not just what's textually present. Summarizing the literal text would reproduce the draft's own ambiguity. The interview exists to surface exactly the handful of things that are genuinely underdetermined, and pin them down in the author's own words — nothing more.

This means: don't ask about things the draft already states precisely, and don't ask exhaustively about everything. Ask about what's actually unresolved.

The same interview also surfaces what a future Claude session on this Project would need to be told upfront — assumed background, fixed conventions, recurring requests, file/codebase layout — which becomes the custom-instructions suggestion.

## Inputs

- A research note / early draft: pasted text, or an uploaded file. If it's not already in context as text (e.g. `.docx`, `.pdf`), read it first via the relevant skill (`docx`, `pdf`, `file-reading`) before starting the extraction pass.
- Optionally, an existing `project_summary.md` to update rather than create from scratch.
- Optionally, the Project's existing custom-instructions text, if the user wants it incrementally revised rather than generated fresh (ask for this in Step 5).

## Process

### 1. Silent extraction pass

Read the draft and map it onto `references/template.md`'s fixed sections: candidate title, core question(s), each distinguishable claim, the model/framework definition, the section/figure structure with whatever status is stated or implied, any risks mentioned, journal target, long-term directions. Also note anything that signals how a Claude session should be steered on this project: assumed background level, fixed methodological/tool choices, recurring conventions, file/codebase layout. Do this internally — don't narrate it to the user.

### 2. Identify the real gaps

Flag only things that materially affect the summary:

- A claim stated without precision — undefined notation, unclear scope, conflated with another claim, not falsifiable as written.
- A claim with no evidentiary status (proven analytically? numerically supported, and at what system sizes/statistics? conjectured? in progress?).
- An assumption that's load-bearing for a claim but never stated.
- A missing or internally inconsistent core question.
- A figure/section whose status the draft doesn't state.
- A claim that's at real risk of being over-read, with no scope disclaimer.
- Missing target journal or long-term directions, if the user is clearly far enough along to have a view (don't force this if it's premature).
- For instructions: what files/tools/codebase make up this project beyond the draft, any explicit "always/never" working conventions, and whether the assumed background level differs from the user's general default.

If a claim is already precise and scoped in the draft, leave it alone.

### 3. Run the interview

Ask 2-4 questions per turn, ordered by structural importance: core question → claims → model/assumptions → structure & status → risks/scope → journal/long-term directions → (briefly) project-specific working conventions for the instructions block, if not already evident.

Socratic means probing, not adversarial:
- Good: "What distinguishes Claim 2 from a special case of Claim 1 — is it a genuinely independent statement?" / "Is the $\mu_c$ critical behavior established or conjectured — what observation would change your confidence?"
- Avoid: framing a question as already having caught an error, or re-litigating a point the user already answered.

Where you can already infer the likely resolution, propose it and ask for confirmation rather than asking open-ended — faster, and respects that the user already did the thinking:
> "Reading Claim 3, $\mu$ is the *only* new control parameter and $(p, p_Z)$ carry over unchanged from the short-range model — correct?"

Treat the user's answers as authoritative. Only follow up if an answer creates a new gap or contradicts another part of the draft.

Stop once the structural gaps are resolved — not once every section is maximally elaborated. A working summary is allowed to contain "in progress" or "open" as final answers; the goal is an accurate snapshot of the project's actual state, not a more finished-looking one.

### 4. Write project_summary.md

Follow `references/template.md` for the fixed top-level section set and order. Sub-structure within Claims, the model section, Paper Structure, and Risks should mirror the project's real logical shape — don't force subsections that don't exist, and do mirror the draft's own organization where one already exists.

Hold to these constraints:
- Preserve the draft's notation, terminology, and section names. Name the model/framework and scope sections after what they actually are, not generically.
- Don't introduce claims, interpretations, or confidence levels beyond what the draft states or the interview confirmed.
- Where the interview left something genuinely unresolved, mark it inline as `*(open — not yet resolved)*` rather than silently resolving it.
- Use the draft's own status vocabulary for figures/sections (Complete / In progress / Not started / Awaiting X) rather than inventing a new taxonomy.

### 5. Suggest Project custom instructions

Ask whether the user has existing custom instructions for this Project. If yes, have them paste it in, and treat it as the base for incremental revision — preserve sections still accurate, only add or revise what the new draft/interview changed or newly established. If no, generate fresh.

Follow `references/instructions_template.md` for structure and what belongs in each section. Key points:
- Communication Style should only capture project-specific deviations — don't restate the user's account-wide style preferences.
- Project Structure, Standing Requests, and Constraints should come from what the interview actually established, not be invented to fill out the template.
- Output as a single fenced markdown code block in chat — this is pasted directly into the custom-instructions field, not saved as a file.

### 6. Output

Write `project_summary.md`: to `/mnt/user-data/outputs/project_summary.md` if creating fresh, or edit the existing file in place (touching only affected sections) if updating. Present the file. Then post the custom-instructions code block from Step 5 directly in chat.

No commentary beyond flagging any items still marked open.
