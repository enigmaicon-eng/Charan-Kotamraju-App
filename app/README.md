# app/

Next.js App Router routes and framework-level files.

Currently contains only infrastructure, no pages:

- `layout.tsx` — root layout: fonts, `ThemeProvider`, Vercel Analytics
- `globals.css` — Tailwind v4 entry point, design tokens, dark mode variables
- `error.tsx` / `not-found.tsx` / `loading.tsx` — route-level boundaries
- `sitemap.ts` / `robots.ts` — SEO foundation
- `feed.xml/route.ts` — RSS feed

Pages, nested routes, and layouts are added once information architecture
is decided in the product-specification phase.
