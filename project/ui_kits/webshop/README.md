# SESE Webshop UI Kit

High-fidelity recreation of the SESE webshop based on the brief in `source/`.

## What's here

- `index.html` — the entry. Loads React 18 + Babel, then `data.js`, `Chrome.jsx`, `Sections.jsx`, `App.jsx`.
- `data.js` — canonical product + routine data (9 SKUs, 3 routines).
- `Chrome.jsx` — `AnnouncementBar`, `Nav`, plus tiny primitives (`Eyebrow`, `Btn`, `Tag`).
- `Sections.jsx` — every full-bleed section: `Hero`, `RoutineFlow`, `ProductGrid`, `ProductCard`, `StarterBundle`, `DayVsNight`, `Ingredients`, `StorySection`, `Trust`, `FaqPreview`, `FinalCta`, `Footer`.
- `App.jsx` — page router (Home ↔ Product Detail) and `ProductDetail` PDP template.

## Click-thru

- The homepage assembles every section in order.
- Click any product card → opens the PDP template (Peptide, Day Cream, etc) with gallery, copy, "Add to bag".
- "← All products" returns to home.
- Nav links update the active state but stay on home (single-page demo).

## What's NOT here (yet)

- Cart drawer, checkout, account screens — out of scope for v1.
- Standalone About / FAQ / Routine pages — homepage hosts previews of each.
- Lifestyle photography — the brief lists shots that don't exist yet. Slots are clearly marked.
