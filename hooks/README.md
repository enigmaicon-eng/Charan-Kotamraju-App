# hooks/

Reusable React hooks shared across components.

Empty for now — `next-themes` already exposes `useTheme()` directly, and
no other cross-cutting client-side state exists yet. Add hooks here as
components need shared stateful logic (e.g. `use-media-query`,
`use-local-storage`), rather than duplicating `useEffect`/`useState`
patterns across components.
