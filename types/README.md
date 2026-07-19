# types/

Shared TypeScript types used across the codebase.

- `common.ts` — generic utility types (`Nullable`, `Maybe`, `AsyncState`, ...)
- `content.ts` — `Document`/`DocumentFrontmatter` shapes for MDX content
- `github.ts` — narrow, typed shapes for the GitHub API subset this project uses
- `seo.ts` — input contract for `lib/seo/metadata.ts`
- `index.ts` — re-exports the above for `import { X } from "@/types"`

Domain-specific types stay in their own file; `common.ts` is only for
types with no domain (used by 2+ unrelated modules).
