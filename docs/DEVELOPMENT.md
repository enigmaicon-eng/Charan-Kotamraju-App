# Development Guide

## Requirements

- Node.js `>=20.9.0` (see `.nvmrc`)
- pnpm (see `packageManager` in `package.json`)

## Setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Environment variables

All environment variables are validated at module-load time by
`config/env.ts` using Zod — the app fails fast at build/start time on
missing or malformed values instead of surfacing `undefined` deep in a
component. See `.env.example` for the full list and short descriptions.

- Server-only variables (e.g. `GITHUB_TOKEN`) must **not** be prefixed
  `NEXT_PUBLIC_`.
- Anything the client bundle needs must be prefixed `NEXT_PUBLIC_`.

## Architecture overview

```
app/            Next.js App Router routes and framework-level files
components/     Reusable React components (shared, not route-specific)
config/         Structural app configuration (site metadata, env, nav)
content/        MDX content, loaded via Content Collections
hooks/          Reusable React hooks
lib/            Framework-agnostic logic: SEO, GitHub API, RSS, content loading, utils
public/         Static assets served as-is
scripts/        One-off or CI maintenance scripts
styles/         Non-global stylesheets (globals live in app/globals.css)
types/          Shared TypeScript types
```

### Content pipeline

MDX documents live under `content/` and are compiled by
[Content Collections](https://www.content-collections.dev), configured in
`content-collections.ts` at the repo root. `next.config.ts` wraps the Next
config with `withContentCollections` so the generated module
(`content-collections`) is available at build and dev time.
`lib/content.ts` is the only file that should import from the generated
module directly — everything else imports from `lib/content.ts`.

### SEO

`lib/seo/metadata.ts` exposes `buildMetadata()` (per-page) and
`buildRootMetadata()` (root layout) which produce Next.js `Metadata`
objects with consistent title templating, canonical URLs, and
OpenGraph/Twitter tags. `app/sitemap.ts`, `app/robots.ts`, and
`app/feed.xml/route.ts` provide the sitemap, robots.txt, and RSS feed.

### GitHub integration

`lib/github/client.ts` exports a single shared `Octokit` instance,
authenticated when `GITHUB_TOKEN` is set. `lib/github/repos.ts` and
`lib/github/user.ts` wrap specific endpoints and normalize responses into
the narrow types in `types/github.ts`.

### Theming

`components/theme-provider.tsx` wraps `next-themes` with this project's
defaults (class-based, system-aware, no flash-of-transition). Dark mode
tokens are defined as CSS custom properties in `app/globals.css`.

## Testing

- Unit/component tests: Vitest + Testing Library, colocated as
  `*.test.ts(x)` or under `**/*.spec.ts(x)`. Config: `vitest.config.ts`.
- End-to-end tests: Playwright. Config: `playwright.config.ts` (add when
  the first e2e test is written).

## Verification

`pnpm verify` runs typecheck → lint → test → build in sequence and is the
single command to confirm the repo is in a healthy state before pushing.
