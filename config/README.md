# config/

Structural application configuration — no branding, copy, or content
decisions.

- `env.ts` — Zod-validated `process.env` schema, parsed once at module load
- `site.ts` — site-level config (name, description, URL) sourced from env
- `nav.ts` — `NavItem` type and empty `primaryNav`/`footerNav` arrays;
  populated once information architecture is decided
