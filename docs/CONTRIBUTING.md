# Contributing

## Workflow

1. Branch off `main`.
2. Make changes; keep commits scoped and descriptive.
3. Run `pnpm verify` before pushing (typecheck, lint, test, build).
4. Open a PR against `main`.

## Commit messages

Use short, imperative-mood subject lines describing _why_, not just _what_
(the diff already shows what changed):

```
Add GitHub repo loader with rate-limit-aware caching
Fix theme flash on initial page load
```

## Pre-commit hooks

Husky runs `lint-staged` on commit (`.husky/pre-commit`), which runs
ESLint and Prettier on staged files only. If a hook fails, fix the
reported issue and re-stage — don't bypass with `--no-verify` unless
there's a documented reason.

## Pull requests

- Keep PRs focused on one concern.
- Include a short description of _why_ the change is needed.
- Note any manual testing performed, beyond `pnpm verify`.

## Code review expectations

- New `lib/` modules should have unit tests.
- New environment variables must be added to both `config/env.ts`
  (schema) and `.env.example` (documentation).
- Follow [CODING_STANDARDS.md](CODING_STANDARDS.md).
