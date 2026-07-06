# physics_skills

A small collection of reusable [Claude](https://claude.ai) skills, leaning toward physics and research work. Each top-level folder is one skill, defined by its `SKILL.md` (plus any supporting files). Drop a folder into Claude Code or upload it to claude.ai chat and it becomes a `/command` you can invoke.

## The skills

| Skill | What it does | Best on |
|-------|--------------|---------|
| [grill-me](./grill-me/) | Interviews you relentlessly about a plan or design, one question at a time, until you reach shared understanding. | Claude Code |
| [grill-me-physics](./grill-me-physics/) | Stress-tests a physics argument, model, or numerical protocol via systematic Socratic questioning over its dependency graph. | Either (leans Chat) |
| [handoff](./handoff/) | Compacts the current conversation into a handoff document a fresh agent can pick up. | Claude Code |
| [paper-review](./paper-review/) | Explains a research paper at a depth calibrated per-concept by your own N/L/E self-rating. | Chat |
| [project-summary](./project-summary/) | Interviews you about a research draft to build or refresh a `project_summary.md`, plus a suggested Claude-Project custom-instructions block. | Claude Code (+ a claude.ai Project) |
| [teach](./teach/) | Teaches a topic statefully across sessions, using a workspace of missions, lessons, and learning records. | Claude Code |

## Installing skills

A skill is just a folder containing a `SKILL.md`, so the **same folder works on both surfaces** — you only need to put it where each one looks for skills.

### Claude Code

Copy a skill folder into one of these locations:

- `~/.claude/skills/<name>/` — a personal skill, available in every project.
- `<project>/.claude/skills/<name>/` — a project-scoped skill, shareable with collaborators via git.

For example, to install `paper-review` as a personal skill:

```bash
cp -r paper-review ~/.claude/skills/paper-review
```

The folder must contain `SKILL.md` at its root. Invoke a skill by name with `/<skill-name>` (e.g. `/paper-review`). Most of the skills here set `disable-model-invocation: true`, which means they run only when you call them explicitly — Claude won't trigger them on its own.

### claude.ai chat

Skills in chat require a plan with the Skills capability enabled (Pro / Max / Team / Enterprise).

1. Zip the individual skill folder, with `SKILL.md` at the root of the archive (e.g. `paper-review.zip` containing `SKILL.md` and any supporting files).
2. In claude.ai, go to **Settings → Capabilities → Skills** and upload the zip.
3. In a chat, invoke the skill by referencing it or selecting it from the skills menu.

Exact menu labels change over time — see the [claude.ai Skills documentation](https://support.anthropic.com/) for the authoritative steps.

## Chat vs. Claude Code

The "Best on" column above is a recommendation, not a hard rule — most skills technically run on either surface. The split follows what each skill needs:

- **Claude Code** for the filesystem-heavy skills — `teach`, `handoff`, `project-summary`, and `grill-me` — which read or write files, maintain a workspace, or explore a codebase to answer their own questions.
- **Chat** for the attach-and-reason skills — `paper-review` (easiest place to attach a PDF) and `grill-me-physics` (pure reasoning, no files needed).

`project-summary` is a hybrid: run it in Claude Code so it can write `project_summary.md`, then paste its suggested custom-instructions block into the matching claude.ai Project.
