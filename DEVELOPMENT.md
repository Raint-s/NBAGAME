# Development Guide

## Goals

Keep `main` close to runnable, protect private working assets, and make every change easy to review.

## Branch Strategy

- `main`: stable integration branch, should remain runnable
- `feat/<name>`: new features
- `fix/<name>`: bug fixes
- `docs/<name>`: documentation-only changes
- `chore/<name>`: maintenance, cleanup, tooling

Create branches from `main` and merge only after local verification.

## Commit Style

Use short conventional prefixes:

- `feat:`
- `fix:`
- `docs:`
- `chore:`
- `refactor:`

Examples:

```text
feat: add season rewards balancing
fix: correct offline income cap
docs: add release checklist
```

## Local-Only Assets

The following are considered private working assets and must stay out of git:

- `skills/`
- `.codex/`
- `.claude/`
- `notes-private/`
- `research-private/`
- local prompts, audits, internal strategy notes
- personal scripts, local tunnels, temporary logs

Project-specific `skills.md` files are allowed for local use, but they must live inside ignored directories rather than public repository paths.

## Daily Workflow

1. Start from a clean understanding of the branch:
   - `git status`
   - `git pull --ff-only origin main` when appropriate
2. Create a focused branch.
3. Make the change.
4. Run the relevant local checks.
5. Review `git diff` and `git status` before commit.
6. Confirm no private files are included.
7. Commit with a clear message.

## Minimum Checks Before Commit

- The game still launches locally.
- The modified flow works at least once end to end.
- No local-only files or logs were staged.
- Docs were updated if behavior, commands, or structure changed.

## File Organization Rules

- Keep public project files in repo-visible paths only.
- Put reusable scripts under `scripts/`.
- Put stable public docs under `docs/`.
- Do not store product research, prompts, or private operating notes in the repository root.

## Review Expectations

Before merging to `main`, review for:

- accidental leakage of private workflow assets
- broken commands or stale docs
- debug leftovers
- unnecessary unrelated file changes

## Syncing with Upstream

This repository has:

- `origin`: personal fork / primary push target
- `upstream`: original project repository

Recommended flow:

1. `git fetch upstream`
2. inspect incoming changes
3. integrate on a working branch first
4. verify locally
5. merge into `main` only after the branch is stable
