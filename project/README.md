# SESE Design System

**SESE** — Beach & Botanical Anti-Aging Skincare
**Tagline:** _unlock your skin's timeless beauty._
**Domain:** sese.be · **Email:** customerservice@sese.be · **Instagram:** @sese.be_

---

## What SESE is

SESE is a premium-but-accessible skincare brand built around three pillars: **honest care, timeless beauty, and simple routines**. The visual world sits at the intersection of a quiet beach (warm sand, soft sea blue, gold-hour light) and a botanical apothecary (eucalyptus, aloe, lavender). It is **not** a clinical anti-aging brand and **not** a young, trendy, neon beauty brand — it speaks to women who want to age confidently and ritualise their self-care.

The product line is organised around **routines**, not individual SKUs. Customers buy into a 5-step rhythm — Cleanse → Tone → Treat → Moisturise → Protect — and the webshop is structured to teach and sell that rhythm.

### Products (9 SKUs)

| # | Product | Role |
|---|---|---|
| 1 | Cleansing Foam | Step 1 · gentle gel-to-foam |
| 2 | Hydrating Toner | Step 2 · hydra-mist prep |
| 3 | Vitamin C Serum | Treat · morning glow |
| 4 | Peptide Serum | Treat · firming, AM/PM |
| 5 | Retinol Alternative Serum | Treat · gentle PM renewal |
| 6 | Firming Day Cream | Moisturise · AM |
| 7 | Ceramide Repair Night Cream | Moisturise · PM |
| 8 | Smoothing Eye Cream | Targeted care |
| 9 | SPF 50 Sunscreen Stick | Protect · the non-negotiable |

### Routine categories
Starter Routine Bundle · Day Routine · Night Routine · Serums · Cleanse & Prep · Moisturize & Protect

### Pages this system supports
Homepage · Shop · Product Detail (PDP) · Routine pages · About · FAQ · Footer

---

## Sources

The system was built from a single uploaded brief archive (`uploads/JENS website-…zip`) extracted into `source/`. Original documents include:

- `Fotobriefing_*.docx` — photography direction (per category, per product)
- `Pakkettekst_*.docx` — packaging copy (front/back of every product)
- `Productpaginas_*.docx` — full PDP copy for every SKU (EN)
- `Categoriepaginas_*.docx` — category landing copy
- `Homepage_Webshop.docx` · `About_Us_Pagina.docx` · `FAQ_*.docx` · `Footer_Webshop.docx` · `Trust_Reviews_Section.docx`
- Logo + product photography in `assets/`

Brand-copy concatenation lives at `source/all_brand_copy.txt`. **Read it whenever you need the canonical wording** — it's long but searchable with `grep`.

---

## Index — what's in this repo

| Path | Purpose |
|---|---|
| `README.md` | this file (brand overview · content · visual foundations · iconography) |
| `SKILL.md` | machine-readable skill manifest |
| `colors_and_type.css` | CSS custom properties — colors, type, spacing, radii, shadows, motion + type primitives + buttons |
| `fonts/Todes-Light.otf` | brand display + body face |
| `assets/` | logos (mark, wordmark + tagline, white variants) and 18 product photos |
| `assets/products/` | 9 products × studio + alt shots |
| `preview/` | small HTML cards that populate the Design System tab |
| `ui_kits/webshop/` | high-fidelity recreations of homepage, PDP, routine page, FAQ |
| `source/` | extracted briefs (read but do NOT ship) |

---

## Content fundamentals

**Voice.** Soft, elegant, clear, human. Reads like a thoughtful friend who happens to know skincare — never a clinical brochure, never a hype copywriter.

**Person.** Mostly **second person** ("your skin", "feel like you"). The brand uses **we** sparingly when narrating the founder story — it stays personal, not corporate.

**Casing.** Headlines are **sentence case** ("Skincare for timeless beauty."). Eyebrows and category labels are **UPPERCASE with wide tracking** (e.g. `STARTER ROUTINE BUNDLE`). The wordmark itself is always `S E S E` with letters spaced apart.

**Sentence rhythm.** Short. Confident. Never breathless. Many headlines end with a period — it adds finality and calm. Em-dashes connect ideas softly.

**Vocabulary.** _Ritual · routine · gentle · honest · timeless · feel like you · skin confidence · botanical._ Avoid: _miracle, anti-wrinkle, banish, fight, war, defeat, slay, glow-getter, bestie, gorge, queen._

**No miracle claims.** Never promise results. Frame benefits as feelings ("feels firmer", "looks more rested") and ingredients as honest helpers, not heroes. The phrase "anti-aging" is kept — but always paired with "honest care" or "timeless".

**Emoji.** **Never.** Not in product copy, not in CTAs, not in the footer. Replace with a soft em-dash, a separator dot ( · ), or whitespace.

**Examples (verbatim from the brief):**
- `Skincare for timeless beauty.`
- `Unlock your skin's timeless beauty.`
- `Honest care for skin that feels like you.`
- `Five steps. One routine. Five minutes that feel like yours.`
- Eyebrow: `STARTER ROUTINE BUNDLE` · Headline: `Begin where it matters.`

---

## Visual foundations

### Colors
The palette is small, intentional, and warm. **Never use pure white (#FFFFFF) or pure black (#000000) as primary surfaces** — they break the warmth and read clinical.

| Token | Hex | Use |
|---|---|---|
| `--sese-warm-white` | `#FAF5EC` | Default page surface. ~95% of all backgrounds. |
| `--sese-sand` | `#E8D5B0` | Section blocks, hero panels, packaging accents. |
| `--sese-blue` | `#3A7D94` | Cleanse & Prep, links, secondary CTAs. |
| `--sese-green` | `#4E7A4E` | Botanical accents, ingredient tags, the brand-story section. |
| `--sese-ink` | `#1A1A1A` | Body text, primary buttons. Never as a giant block. |

Section-blocking with sand and warm-white **alternation** is the primary rhythm device. Blue and green appear as accents (eyebrows, links, single section), never compete.

### Typography
**Todes Light** is the only typeface — display _and_ body. It's a high-contrast geometric serif-influenced sans, set light with generous tracking. The fallback if Todes ever fails to load is **Cormorant Garamond** (light) — preserves the elegance better than a sans.

- Display / hero: `text-5xl` (88px) or `text-6xl` (120px), tracking +0.02em, line-height 1.05.
- Headings: light weight, sentence case, no all-caps for h1/h2.
- Eyebrows / labels / buttons: UPPERCASE, tracking +0.22–0.32em.
- Body: 16–18px, line-height 1.55, color `--fg-secondary`.
- Numbers (prices, step counters) inherit Todes Light — never tabular mono.

### Layout & spacing
- 8pt base. Generous whitespace is mandatory — sections breathe with **96–128px** vertical padding desktop, 48–64px mobile.
- 12-column grid desktop, single column mobile (mobile-first).
- Editorial layouts: oversized type next to a single hero photograph; product images allowed full-bleed; copy never centre-aligned by default (left-aligned reads more honest).

### Backgrounds
- **No gradients.** Solid warm-white or sand only.
- Photography is the texture — full-bleed product or lifestyle photography on alternate sections.
- No patterns, no repeating motifs, no SVG illustrations behind text.

### Borders, radii, shadows
- Borders: `rgba(26,26,26,0.08–0.16)` — soft hairlines, never crisp 1px black.
- Radii are **small and gentle**: 4–16px. Pills (999px) only for tags. Never the giant rounded squircles of trendy DTC brands.
- Shadows are **whispers**: `0 18px 40px rgba(26,26,26,0.08)` at most. No drop shadows on text. Often, no shadow at all — borders carry the structure.

### Motion
- Durations 280–520ms — **slow**, never snappy.
- Easing `cubic-bezier(0.22,0.61,0.36,1)` (calm out-curve).
- Hover: image gentle zoom (`scale(1.02)`, 520ms), button background darkens by ~5%, link underline grows from 0 to 100% width.
- Press: buttons scale to 0.98. No bounces, no springs.
- Page transitions: cross-fade, 820ms.

### Imagery (very important)
- Always natural light — gold hour, window light, candle warmth at night.
- Warm white-balance, never cool. A faint film grain is welcome.
- Lifestyle: hands, skin texture, water droplets, a single botanical prop (aloe, lavender, eucalyptus, orange slice).
- Backgrounds in photos: warm sand papers, marble, slate, wet stone for Cleanse, never glossy plastic surfaces.
- Models (when used) are 30+, real-skin, no heavy retouch.

### Buttons
Three variants: **primary** (ink-on-warm-white text, used sparingly), **ghost** (border + text), and **blue** (sea-blue fill, for water/cleanse contexts). All three share UPPERCASE labels with wide tracking and small radii.

### Forms (PDP, footer signup, checkout)
- Inputs: 1px line under, no full box border. Label above in eyebrow style.
- Validation: text appears below in `--sese-blue` for info, soft `#A04A2C` (clay-red, derived) for errors. No bright red.

---

## Iconography

SESE uses **almost no icons**. The brand voice is editorial — words and product photos do the work. Where icons are unavoidable (footer payment marks, hamburger, cart, search) the rules are:

- **Style:** thin (1.25–1.5px) line, rounded caps, no fills. Lucide is the closest CDN match and is what this system uses (`https://unpkg.com/lucide@latest`).
- **Sizes:** 16 / 20 / 24 px. Never larger than the headline they accompany.
- **Color:** inherits from text — `currentColor`. Never an accent color on its own.
- **Routine-step iconography:** lowercase numerals (`01 · 02 · 03 · 04 · 05`) in Todes Light at the eyebrow size. **No glyphs**, **no emoji**, **no Unicode symbols** as decoration.
- **Emoji:** never used in any surface.
- **Logo / wordmark:** treated as the brand's primary visual mark — `assets/logo-mark.png` (tight) or `assets/logo-tagline.png` (with `unlock your skin's timeless beauty`). White-on-dark variants exist for the announcement bar and footer.

Icon CDN substitution (Lucide) is **flagged** — if the brand later commissions a custom 9-piece icon set (one per product) drop them into `assets/icons/` and update this section.

---

## Open caveats

- **Font:** Only `Todes-Light.otf` was provided. There is no italic, no medium, no display-master. The system uses Todes Light for everything; if a Todes Regular or Display ever ships, wire it as `--font-display`.
- **Imagery:** Lifestyle / model / hands shots described in the photobriefs do **not** exist yet — only studio packshots. The UI kit uses studio packshots in every slot and labels lifestyle slots with the `image-slot` placeholder pattern so the user can drop real photos in later.
- **Icons:** Lucide is a substitution — flagged above.
- **Localisation:** brand copy in the brief was Dutch; English copy was used where the brief explicitly provided it (Productpaginas EN). Other surfaces were lightly translated — review for native-English polish.
