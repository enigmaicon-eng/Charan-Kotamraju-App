# Coding Standards

## TypeScript

- `strict` mode is on (`tsconfig.json`); don't add `any` or `@ts-ignore`
  without a comment explaining why.
- Prefer `interface` for object shapes that might be extended,
  `type` for unions, aliases, and mapped types.
- No default exports for anything except Next.js file-convention modules
  (`page.tsx`, `layout.tsx`, `error.tsx`, etc.), which require them.
- Import shared types from `types/`, not by reaching into another
  module's internals.

## React

- Server Components by default; add `"use client"` only when a component
  needs interactivity, browser APIs, or a client-only hook.
- Co-locate a component's styles and logic; don't split a single
  component across files without a reason.
- Props interfaces are named `<ComponentName>Props`.

## Styling

- Tailwind utility classes first; use `cn()` from `lib/utils.ts` to
  compose conditional classes instead of manual string concatenation.
- Design tokens (colors, radii) live as CSS custom properties in
  `app/globals.css` — reference them via Tailwind's `@theme inline`
  mapping, don't hardcode hex/oklch values in components.

## File organization

- `lib/` is framework-agnostic — no React imports, no Next.js APIs.
- `components/` may depend on `lib/` and `hooks/`, never the reverse.
- One module per concern; avoid barrel files that re-export everything
  (`types/index.ts` is an intentional exception for shared type unions).

## Testing

- Unit-test `lib/` functions that have non-trivial logic (parsing,
  transforming, formatting).
- Don't test framework glue (e.g. that a Next.js file convention exists)
  — that's what `pnpm build` verifies.

## Comments

- Default to no comments. Add one only when the _why_ isn't obvious from
  the code — a workaround, a non-obvious constraint, a deliberate
  trade-off.
