# components/

Reusable React components, not tied to a specific route.

- `theme-provider.tsx` — `next-themes` wrapper with this project's defaults
- `error-boundary.tsx` — generic in-page error boundary (for route-level
  failures, see `app/error.tsx` instead)
- `ui/` — shadcn/ui primitives, added via `pnpm dlx shadcn@latest add <component>`
  (none installed yet; `components.json` is already configured)

Components here may depend on `lib/` and `hooks/`, never the reverse.
