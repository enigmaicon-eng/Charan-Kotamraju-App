# charan-os visual redesign — design spec

**Date:** 2026-07-23
**Reference:** https://vishesh-portfolio-seven.vercel.app/ (visual language only — unrelated content)

## Goal

Restyle charan-os to match the reference's visual language (serif display type,
warm amber-on-navy dark palette, pill-shaped nav/buttons/badges, card-based
sections) and restructure the homepage into a single scrolling page mirroring
the reference's section flow, using charan-os's existing content — no new
copy, photo, or data is invented.

Scope decided with the user:

- Full structural clone of the reference's section flow (not just color/type).
- Rebuild the homepage as one scrolling page; keep `/about`, `/journey`,
  `/systems`, `/writing`, `/thesis` and detail routes live (restyled) for deep
  links and SEO, but drop them from the primary nav.
- Keep the existing light/dark theme toggle (reference is dark-only, but
  removing an existing feature wasn't wanted).

## 1. Visual system

- **Palette:** shift `.dark` background/card tokens in `app/globals.css` from
  neutral near-black to a navy-tinted dark; deepen the accent slightly toward
  the reference's warmer gold. Mirror the relationship in `:root` (light theme)
  so the toggle still produces a coherent light variant.
- **Typography:** add `Playfair Display` as `--font-serif`, applied to page
  `h1`s and section `h2` titles (via `Section`) site-wide. Body text stays
  Inter; eyebrows stay JetBrains Mono uppercase-tracked (existing brand
  signature, unchanged).
- **Shape language:** primary/secondary CTA buttons and badge/credential chips
  become `rounded-full` (pill). Nav's active/current item gets a filled accent
  pill background, mirroring the reference's "Home" state.

## 2. Component changes

- `components/site-header.tsx`: nav items point to home-page anchors
  (`/#projects`, `/#about`, `/#experience`, `/#insights`) instead of separate
  routes; `Thesis` stays a real route (no equivalent section on the homepage).
  Active-route detection keeps working for `/thesis` (filled pill); anchor
  links don't get scroll-spy (no new complexity — out of scope).
- `config/nav.ts`: update `primaryNav` hrefs to the anchors above.
- Buttons in `app/page.tsx` (`rounded-md` → `rounded-full`).
- Hero credential row: reuse the existing chip pattern from
  `journey/page.tsx`'s certifications list (`rounded-full border` + mono
  text), populated from `person.certifications` / `person.credential`.
- `Section` component: title (`h2`) gets `font-serif`.
- Page `h1`s on `/about`, `/journey`, `/writing`, `/systems`, `/thesis` get
  `font-serif` for consistency.

## 3. Homepage restructure

Single scrolling page, reference order, each section with an anchor `id`:

1. **Hero** (`#home`) — existing eyebrow + `AnimatedHeading` (now `font-serif`)
   - subline + CTAs, plus profile photo (`/profile.jpg`) laid out beside the
     headline like the reference, plus a credential badge row below the CTAs.
2. **Stats** (existing `proofPoints` strip, unchanged data, restyled).
3. **Capabilities** (existing 3 `pillars`, restyled as cards, id `#capabilities`).
4. **Projects** (`#projects`) — existing 6-system grid, unchanged.
5. **About** (`#about`) — photo + condensed bio (shortened from `/about`'s
   copy) + "Full bio →" link to `/about`.
6. **Experience** (`#experience`) — last 3 `journey` timeline entries
   (JPMorgan, Accenture, Wipro) inline, condensed (role/org/years/one-line
   summary, no bullet lists), + "Full journey →" link to `/journey`.
7. **Insights** (`#insights`) — existing writing list, unchanged.
8. **Contact** (`#contact`) — existing doorway CTA, unchanged.

## Out of scope

- No new content, no new photo, no scroll-spy nav highlighting, no removal of
  the light/dark toggle, no changes to MDX content or the systems/essays data
  model.

## Verification

- `pnpm verify` (typecheck, lint, test, build) must pass.
- Visual check via local dev server across home, about, journey, systems,
  writing, thesis in both themes.
