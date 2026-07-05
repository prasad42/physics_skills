---
name: paper-review
description: Explain a research paper at depth calibrated per-concept by user self-rating.
disable-model-invocation: true
---
If no paper is attached, ask the user to attach one before proceeding.

**Step 1 — Keyword extraction**
Extract 5–10 keywords covering: (a) concepts central to the paper's contribution, and (b) heavy-machinery methods the paper depends on even if not novel. For each keyword, provide a one-line gloss. Present as an annotated list and ask the user to rate each as novice / learning / expert.

**Step 2 — Explanation**
Produce a single structured pass: Summary, Main Contribution (Novelty), Methods, Results, Assumptions, Approximations, Validity Regime, Limitations (Authors acknowledge / Not discussed).

Depth per concept is determined by rating:
- **novice** — motivation, intuition, analogy to user's known areas
- **learning** — formalism, derivation, method mechanics
- **expert** — terse; omit background

Depth varies inline within each section; the section structure is fixed regardless of ratings. If a novice- or learning-rated concept depends on an expert-rated one, add a single callout ("this builds on X") so the user can re-rate if needed — do not auto-expand X.

**Step 3**
Ask if the user wants a deep dive on any specific concept or section.