# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Next dev server (Turbopack by default in Next 16)
npm run build      # Production build — also runs a full TypeScript pass
npm run typecheck  # tsc --noEmit
npm run lint       # eslint (see "Known lint failure" below)
npm run format     # prettier --write over all .ts/.tsx
```

There is no test suite and no test runner installed. Verification here means
`typecheck` + `build`, and driving the running app in a browser for anything
interactive.

## Next.js 16

Per `AGENTS.md`: this version has breaking changes from older Next.js. The full
docs ship with the package — read `node_modules/next/dist/docs/` (app router
lives under `01-app/`) before relying on remembered APIs.

Notable in this project: `next dev` and `next build` use separate output
directories, so they can run concurrently.

## Architecture

A marketing site for a motel: six static routes, no backend, no database.

- `app/` — one directory per route (`/`, `accommodation`, `facilities`,
  `gallery`, `about`, `contact`). Pages are thin: they set `metadata` and
  compose section components.
- `components/` — page sections, flat, kebab-case (`hero-section.tsx`,
  `booking-form.tsx`). One section per file, named for what it renders.
- `components/ui/` — shadcn primitives. Treat as vendored; regenerate rather
  than hand-edit where possible.
- `lib/site-config.ts` — nav arrays, contact details, WhatsApp link. Anything
  appearing in more than one place belongs here, not inline.
- `lib/schemas/` — zod schemas, one file per form.

`Navbar` and `Footer` are mounted once in `app/layout.tsx`, so pages never
render them. Root metadata uses `template: "%s"`, meaning each page's `title`
is used verbatim — write the full title including the site name.

Most sections are server components. Add `"use client"` only for the ones that
genuinely need state (forms, the date picker, the map card, the nav's mobile
menu, filtering/carousel UI).

## Conventions

**Forms.** React Hook Form for state, zod for validation, schema in
`lib/schemas/`. Use **native** `<input>`/`<textarea>` elements — the exceptions
are selects (shadcn `Select`) and dates (the shared `date-field.tsx`, which
wraps shadcn `Popover` + `Calendar`). Zod v4 syntax: a single `error` key, and
top-level `z.email()` rather than `z.string().email()`.

**`cn`** is re-exported from the `cn` package (see `lib/utils.ts`), not built
from `clsx` + `tailwind-merge`. shadcn files import it as `from "cn"`.

**Colour.** The brand colour lives only in the `--primary` / `--accent` tokens
in `app/globals.css` (currently `oklch(0.494 0.123 247.919)`, i.e. `#1565a3`).
Components use `bg-primary` / `text-primary` for anything brand-coloured, so a
rebrand is a token edit. The deliberate exceptions are surfaces that must stay
a fixed light or dark regardless of theme, which use `neutral-*` literals: the
footer, the hero's "See the rooms" button, and "All rooms & rates".

The site is **light-only**: `app/layout.tsx` passes
`defaultTheme="light" enableSystem={false}`. Dark-mode tokens exist but are not
exercised, so don't rely on them looking right.

Headings use `font-heading` (Manrope); body text inherits Inter.

**Card borders.** shadcn `Card` ships a default `ring-1`. Passing `ring-0` is
correct for cards sitting on a grey panel (`bg-muted`) but makes them invisible
on the white page background — check what a card sits on before removing it.

## Images

Photos are placeholders from `picsum.photos` pending real client photography.
`next.config.ts` must allowlist **both** `picsum.photos` and
`fastly.picsum.photos` — picsum 302-redirects to the latter, and without it the
image optimizer hangs and returns 500 with a fetch timeout. picsum is also
flaky under load, so broken images in dev are usually the host, not the code.

Real assets go in `public/assets/images/`.

## Known lint failure

`npm run lint` currently reports one error in `components/ui/carousel.tsx`
(`react-hooks/set-state-in-effect`). That is shadcn's own carousel code as
generated, not project code.

The ESLint config enables the newer React hooks rules, which are stricter than
many older patterns. Two that come up: `useRef(...).current` read during render
is rejected (use a lazy `useState(() => ...)` for a stable instance), and
`setState` called synchronously inside an effect is rejected.

## Design workflow

Pages are built from PDF design exports supplied per page. Useful approach:
`pdftotext -layout` for exact copy, then `pdftoppm -r 150 -png` and read the
image in slices for layout, spacing and colour. Sampling a pixel from the
render is the reliable way to pin down an exact brand colour.
