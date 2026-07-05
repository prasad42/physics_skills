# project_summary.md template

Fixed top-level (H1, `#`) sections, in this order. Every project_summary.md produced by this skill has all of these, even if some are short ("To be written" / "open"). Sub-structure inside each section is flexible — match the project's actual logical shape rather than forcing subsections that don't exist.

```
# Project Summary

## Project Title
<one line>

# Core Scientific Question
<the question(s) the project answers — 1-3 numbered questions if there's more than one axis>

# Primary Scientific Claims

## Claim 1
<precise statement: what is claimed, under what conditions, with what notation>
## Claim 2
...
(one ## subsection per claim, numbered in the order they'll appear/be argued in the paper)

# Physical Picture
<qualitative narrative tying the claims together — the "why this is true" intuition a reader gets before the formalism. Not every project needs this if there's no unifying qualitative story beyond the claims themselves; if so, this section can be short or note that the claims stand on their own.>

# [Model / Framework section — name it after what it actually is, e.g. "Unified Long-Ranged Hybrid Measurement Model", "Driven-Dissipative Bose-Hubbard Model"]
<precise definition of the object of study: parameters, what's held fixed vs. varied, architecture. Subsections (##, ###) as needed for sub-cases / limits, e.g. short-range limit, specific circuit variants.>

# Paper Structure
<mirrors the actual (or planned) section structure of the paper>
## Section I: Introduction
## Section II: <name>
### A. <subsection>
### B. <subsection>
...
## Section <N>: Results
### Part I: <name>
#### Figure 1: <one-line description>
* **Status:** Complete / In progress / Not started / Awaiting <specific blocker>
* <whatever detail is load-bearing: fitting function, parameter ranges, what the figure establishes>
...
## Appendix A: <name>
## Appendix B: <name>

# Updates
<running list of small open TODOs that don't fit the structure above — short bullets>

# [Scope / non-claims section — name it after what it actually disclaims, e.g. "Universality Position"]
<what this paper explicitly does NOT claim, and why (deferred to future work, insufficient data, etc.) — include only if there's a real risk of a claim being over-read; if every claim's scope is already airtight from the Claims section, this can be a short confirmation rather than omitted entirely>

# Risks
## Low Risk
* <risk> — <why it doesn't threaten the core claims>
## Moderate Risk
* <risk> — <what would need to happen for it to matter, what's being done about it>
## High Risk
* <only if present — a risk that could actually invalidate a claim>

# Target Journal
<journal name, or "undecided" with the live candidates>

# Long-Term Directions
<numbered list of directions beyond this paper's scope>
```

## Notes on filling each section

- **Claims**: each claim should be falsifiable and scoped — a reader should be able to tell what observation would contradict it. If the draft states a claim vaguely, that's the highest-priority interview target.
- **Model section name**: never call it "Model" generically if the project has a real name for its framework — use the user's own terminology.
- **Paper Structure status tags**: use whatever vocabulary the user/draft already uses (Complete / In progress / Awaiting X / Not started). Don't invent a new status taxonomy.
- **Scope section**: this is a hedge against the paper's claims being read more strongly than intended (e.g. "we report critical exponents but do not claim a new universality class"). Only needed where over-reading is a real risk.
- **Risks**: severity is about threat to the core claims, not about difficulty of the work. A long to-do item is not automatically a "risk."
