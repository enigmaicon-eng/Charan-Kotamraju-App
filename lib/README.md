# lib/

Framework-agnostic logic — no React imports, no Next.js-specific APIs
(except where a file's job requires it, e.g. reading `next`'s `Metadata`
type in `seo/metadata.ts`).

- `utils.ts` — `cn()` class-merging helper (required by shadcn/ui)
- `content.ts` — thin wrapper over the generated Content Collections output
- `rss.ts` — builds an RSS/Atom feed from a list of documents
- `seo/` — `buildMetadata()`, `buildRootMetadata()`, OG image constants
- `github/` — shared Octokit client and typed wrappers around specific endpoints

Import from `lib/content.ts`, not the generated `content-collections`
module directly, so the codegen dependency stays confined to one file.
