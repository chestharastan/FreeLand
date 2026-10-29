# Kafé Tonlé — parallax concept website

Single-page public website for **Kafé Tonlé**, project 1 of the FreeLand portfolio (fictional café, demo only).
It is the design-and-motion layer of the spec in `readme/01-kafe-tonle/WEBSITE.md`: every section, copy line,
price and image path comes from that file; operational routes belong to the full Next.js + FastAPI build.

> Concept project by Thareah — fictional brand, not affiliated with any business.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173  (hot reload)
npm run build      # production bundle → dist/
npm run preview    # serve dist/ on http://localhost:4173
```

Requires Node 20+. Open the page from a server (`dev` or `preview`), not as a `file://` URL — ES modules need HTTP.

## What is in it

| Section | Pattern | Where |
|---|---|---|
| Hero | Photo card centred in the visual column on a parallax depth | `index.html` `#home` |
| Signature drinks | Pinned colour-block slideshow: one solid colour per drink, the cut-out drink (`*-cutout.webp`, transparent) rises in centre-stage in front of the giant name on a soft spotlight, an outline copy of the name traces the letters the glass covers, dot + arrow-key navigation | `src/scroll/drinks.js` |
| Full menu | All 24 products grouped by category with live counts, New / Signature badges, detail tags, category chips (incl. "New"), search, branch selector with sold-out state, demo KHR conversion. Regenerate the markup from the catalogue list with `python3 tools/build_menu.py` | `src/ui/menu.js`, `tools/build_menu.py` |
| Table ordering | Steps + CSS phone whose order tracker advances on scroll; non-payable fake KHQR | `src/ui/tracker.js` |
| Story | Teal block, zoom-on-scroll image, parallax card | `src/scroll/parallax.js` |
| Rewards | Stamp card fills to 6 / 9 as it enters, rules toggle | `src/ui/rewards.js` |
| Locations, FAQ, Contact, Footer | Tilt cards, accordion, demo-inbox form (nothing is sent) | `src/ui/*` |

Colour themes morph between sections by tweening CSS variables on `:root` (`src/scroll/themes.js`).

## Design references

Vibe taken from **Simply Chocolate** (one saturated colour per product, product hero centre-stage,
scroll-snapped storytelling), with the cursor / smooth-scroll polish of **Noomo**. Palette, type and copy are Kafé Tonlé's own.

## Motion and performance

* Scroll choreography is GSAP ScrollTrigger (scrubbed tweens on a small state object). Lenis smooth scroll
  runs on pointer devices only; touch keeps native scrolling.
* Section colour blocks are plain CSS variables tweened on `:root`, so every section stays crisp and cheap.
* `prefers-reduced-motion`: no parallax, instant states. No JavaScript: the full page is still readable.
* No WebGL or 3D: the page is HTML, CSS and a small amount of GSAP, so it loads fast on phones.

## Media placeholders (ready for your assets)

Every image from the spec is a labelled slot that reserves its aspect ratio. Drop the real files into
`public/images/cafe/` using the exact names in `public/images/cafe/README.md` (also `public/media-manifest.json`)
and they appear automatically on the next load — no code changes. Missing files stay as visible slots.

## Route stubs

Links to pages of the full build (`/menu/[slug]`, `/order/demo-table-01`, `/locations/[branch]`, `/rewards`, …)
open a small dialog naming the route and what it will do, instead of a dead link. Search for `data-route` in
`index.html` to see them all.

## Hand-off to the full project

The `kafe-tonle` agent (`.claude/agents/kafe-tonle.md`) is instructed to port these sections and tokens into
`apps/web` of the Next.js build rather than redesign, and to satisfy the image manifest in the asset stage.
