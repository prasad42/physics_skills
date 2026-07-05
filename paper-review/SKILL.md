---
name: paper-review
description: Explain a research paper, expanding only the concepts the user flags as unfamiliar.
disable-model-invocation: true
---
If the user attached a paper explain it else ask to attach. Default every concept to expert level, consistent with the standing no-pedagogy preference. Expand only the threads the user flags as unfamiliar.

Familiarity is supplied inline at invocation as a list of `learning` keywords (e.g. `/paper-review lindblad mpemba`). No file, no interview. If no flags are given, treat the entire paper at expert level. If the paper's own emphasis makes a likely-unfamiliar concept salient and none was flagged, name it in one line and offer to expand — do not auto-expand.

Enumerate every major concept the paper introduces, then resolve each against the supplied `learning` list:
- **learning** — a supplied keyword maps to this concept with high confidence. Define it and explain the method by analogy to the user's known areas (MIPT, stabilizer/Clifford circuits, open-system dynamics, Bose-Hubbard, numerical many-body). This overrides the global no-pedagogy preference for this thread only.
- **expert** (default) — no `learning` flag maps here, or the paper's concept lies inside stated expertise. Terse; omit textbook background; keep derivations and the hard methodology.

Matching: map a flag to a concept only on high semantic confidence. A `learning` flag left unused (no concept matched) is reported in one line so the user can re-flag. A concept that spans a flagged method built on unflagged machinery: expand the flagged method, keep the machinery terse.

Workflow:
1. Explain with structure: Summary, Main contribution (Novelty), Methods, Results, Assumptions, Approximations, Validity Regime, Limitations (Authors acknowledge / Not discussed). Expand `learning`-flagged threads inline within the relevant section (usually Methods) rather than as a separate pass.
2. Ask if the user wants a topic-by-topic deep dive on a specific topic.