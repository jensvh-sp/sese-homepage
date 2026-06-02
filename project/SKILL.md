---
name: sese-design
description: Use this skill to generate well-branded interfaces and assets for SESE — a premium beach & botanical anti-aging skincare brand — either for production or throwaway prototypes/mocks/marketing material. Contains essential design guidelines, colors, type, fonts, product photography, and UI kit components for prototyping the SESE webshop and adjacent surfaces.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files. The README has the canonical brand voice, visual foundations, and iconography rules. `colors_and_type.css` is the only stylesheet you need to import — it contains every token (colors, type, spacing, radii, shadows, motion) plus a few primitives (`.sese-eyebrow`, `.sese-btn--primary`, etc).

When in doubt:
- Background is `--sese-warm-white` (#FAF5EC). Never pure white. Never pure black.
- Typeface is **Todes Light** for everything — display and body. Fallback Cormorant Garamond.
- Eyebrows / labels / buttons are UPPERCASE with wide tracking (+0.22em to +0.32em). Headings are sentence case.
- Voice: soft, elegant, clear, human. No miracle claims, no emoji, no exclamation points.
- The product line is organised around **routines** (Cleanse → Tone → Treat → Moisturise → Protect), not single SKUs. Sell the rhythm.
- Use `assets/products/*.jpg` for any product placeholder. Use `assets/logo-*.png` for the wordmark.
- `ui_kits/webshop/` is a working homepage + PDP recreation — copy components from `Sections.jsx` and `Chrome.jsx` rather than redrawing.

If creating visual artifacts (slides, mocks, throwaway prototypes, marketing emails), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions about audience and surface, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
