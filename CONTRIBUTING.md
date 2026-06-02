# Contributing

Thanks for contributing.

This project is currently maintained as a small-team game repository. External contributions are welcome when they are focused, reviewable, and do not include private workflow material.

## Before You Start

- Read [README.md](README.md)
- Read [DEVELOPMENT.md](DEVELOPMENT.md)
- Keep changes scoped to one purpose when possible

## Branch Naming

Use one of:

- `feat/<name>`
- `fix/<name>`
- `docs/<name>`
- `chore/<name>`

## Commit Messages

Use concise prefixes:

- `feat:`
- `fix:`
- `docs:`
- `chore:`
- `refactor:`

## Pull Request Expectations

- Explain what changed and why.
- Mention any manual verification performed.
- Keep unrelated cleanup out of the same PR.
- Update docs when commands, structure, or contributor workflow changed.

## Do Not Commit

- `skills/` or project-specific local skill files
- `.codex/`, `.claude/`
- private prompts, research notes, internal audit notes
- local logs, caches, temporary files
- personal tunnel scripts or machine-specific paths

## Review Focus

Reviewers should prioritize:

- correctness
- regressions
- repo hygiene
- accidental exposure of local-only assets
