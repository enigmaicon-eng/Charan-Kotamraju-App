# charan-os

Engineering foundation for a personal website, digital headquarters, and
living knowledge platform. This repo currently contains **infrastructure
only** — no pages, branding, or content. It exists so a product
specification can be layered on top of a foundation that already compiles,
lints, tests, and builds cleanly.

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://motion.dev) for animation
- [MDX](https://mdxjs.com) via [Content Collections](https://www.content-collections.dev)
- [Octokit](https://github.com/octokit/rest.js) for GitHub API integration
- [React Flow](https://reactflow.dev) and [Mermaid](https://mermaid.js.org) for diagrams
- [Lucide](https://lucide.dev) icons, [next-themes](https://github.com/pacocoursey/next-themes) for dark mode
- [Vercel Analytics](https://vercel.com/docs/analytics)
- ESLint, Prettier, Husky, lint-staged
- [Vitest](https://vitest.dev) (unit) + [Playwright](https://playwright.dev) (e2e)

## Getting started

```bash
pnpm install
cp .env.example .env.local   # fill in real values
pnpm dev
```

## Scripts

| Command                                      | Purpose                                   |
| -------------------------------------------- | ----------------------------------------- |
| `pnpm dev`                                   | Start the dev server                      |
| `pnpm build`                                 | Production build                          |
| `pnpm typecheck`                             | `tsc --noEmit`                            |
| `pnpm lint` / `lint:fix`                     | ESLint                                    |
| `pnpm format` / `format:check`               | Prettier                                  |
| `pnpm test` / `test:watch` / `test:coverage` | Vitest                                    |
| `pnpm test:e2e` / `test:e2e:ui`              | Playwright                                |
| `pnpm verify`                                | typecheck + lint + test + build, in order |

## Documentation

- [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) — local setup, environment variables, architecture overview
- [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) — workflow, commit conventions, PR expectations
- [docs/CODING_STANDARDS.md](docs/CODING_STANDARDS.md) — TypeScript/React conventions used in this repo

Each top-level folder (`app/`, `components/`, `lib/`, etc.) has its own
`README.md` describing its purpose and conventions.

## Status

This is a foundation, not a finished site. `app/` has no pages yet — only
framework-level routes (`sitemap.ts`, `robots.ts`, `feed.xml/route.ts`,
`error.tsx`, `not-found.tsx`, `loading.tsx`). Information architecture,
branding, and content are decided in a later specification phase.
