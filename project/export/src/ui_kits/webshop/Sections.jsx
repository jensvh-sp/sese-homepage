/* global React */

function Hero({ onCta }) {
  return (
    <section style={{ position: "relative", padding: "0", background: "var(--sese-warm-white)" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1.05fr 0.95fr",
        minHeight: 720, alignItems: "stretch"
      }}>
        <div style={{
          padding: "120px 80px 96px",
          display: "flex", flexDirection: "column", justifyContent: "center", gap: 40
        }}>
          <Eyebrow>Beach &middot; Botanical &middot; Anti-Aging</Eyebrow>
          <h1 style={{
            margin: 0, fontFamily: "var(--font-display)", fontWeight: 300,
            fontSize: "clamp(56px, 7vw, 96px)", lineHeight: 1.02, letterSpacing: "0.01em",
            color: "var(--sese-ink)"
          }}>
            Skincare for<br/>timeless beauty.
          </h1>
          <p style={{
            margin: 0, maxWidth: 460, fontFamily: "var(--font-display)", fontWeight: 300,
            fontSize: 18, lineHeight: 1.6, color: "var(--fg-secondary)"
          }}>
            Five steps. One routine. Five minutes that feel like yours — honest care for skin
            that ages on its own terms.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
            <Btn variant="primary" onClick={() => onCta("shop")}>Shop the routine</Btn>
            <Btn variant="ghost" onClick={() => onCta("about")}>Read our story</Btn>
          </div>
        </div>
        <div style={{
          background: "var(--sese-sand)",
          backgroundImage: `url('${(window.__resources && window.__resources["peptide-serum-front"]) || ""}')`,
          backgroundSize: "78%", backgroundRepeat: "no-repeat",
          backgroundPosition: "center 58%",
          position: "relative"
        }}>
          <div style={{
            position: "absolute", left: 32, top: 32,
            fontFamily: "var(--font-display)", fontWeight: 300,
            fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase",
            color: "var(--fg-on-sand)", opacity: 0.75
          }}>The peptide serum &mdash; €48</div>
        </div>
      </div>
    </section>
  );
}

function RoutineFlow() {
  const steps = [
    { n: "01", label: "Cleanse",    bg: "var(--sese-blue-50)",  ring: "var(--sese-blue)" },
    { n: "02", label: "Tone",       bg: "var(--sese-blue-50)",  ring: "var(--sese-blue-300)" },
    { n: "03", label: "Treat",      bg: "var(--sese-sand-50)",  ring: "var(--sese-sand-700)" },
    { n: "04", label: "Moisturise", bg: "var(--sese-green-50)", ring: "var(--sese-green-300)" },
    { n: "05", label: "Protect",    bg: "var(--sese-sand)",     ring: "var(--sese-sand-700)" }
  ];
  return (
    <section style={{ padding: "112px 80px", background: "var(--sese-warm-white)" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, marginBottom: 64 }}>
        <Eyebrow>The SESE rhythm</Eyebrow>
        <h2 style={{
          margin: 0, fontFamily: "var(--font-display)", fontWeight: 300,
          fontSize: 44, lineHeight: 1.1, letterSpacing: "0.01em",
          color: "var(--sese-ink)", textAlign: "center", maxWidth: 720
        }}>
          A morning, an evening — five steps that fit a real life.
        </h2>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, maxWidth: 1080, margin: "0 auto" }}>
        {steps.map((s, i) => (
          <React.Fragment key={s.n}>
            <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 18, minWidth: 132 }}>
              <div style={{
                width: 104, height: 104, borderRadius: "50%",
                background: s.bg, border: `1px solid ${s.ring}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-display)", fontWeight: 300,
                fontSize: 13, letterSpacing: "0.32em", color: s.ring
              }}>{s.n}</div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 300,
                fontSize: 20, letterSpacing: "0.04em", color: "var(--sese-ink)"
              }}>{s.label}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ flex: 1, height: 1, background: "var(--line-default)" }} />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function ProductCard({ p, onOpen }) {
  return (
    <div onClick={() => onOpen && onOpen(p)} style={{
      background: "var(--bg-elevated)", border: "1px solid var(--line-soft)",
      cursor: "pointer", display: "flex", flexDirection: "column",
      transition: "transform .52s var(--ease-out), box-shadow .52s var(--ease-out)"
    }}
    onMouseEnter={(e)=>{ e.currentTarget.style.boxShadow="var(--shadow-lift)"; }}
    onMouseLeave={(e)=>{ e.currentTarget.style.boxShadow="none"; }}
    >
      <div style={{
        aspectRatio: "3/4", background: "var(--sese-sand-50)",
        backgroundImage: `url('${p.img}')`, backgroundSize: "contain",
        backgroundRepeat: "no-repeat", backgroundPosition: "center"
      }} />
      <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", gap: 8 }}>
        <Eyebrow>{p.step}</Eyebrow>
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 300,
          fontSize: 22, letterSpacing: "0.01em", color: "var(--sese-ink)"
        }}>{p.name}</div>
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 300,
          fontSize: 14, lineHeight: 1.55, color: "var(--fg-secondary)", minHeight: 44
        }}>{p.benefit}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 8 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-muted)" }}>{p.use}</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 16, letterSpacing: "0.04em", color: "var(--sese-ink)" }}>{p.price}</span>
        </div>
      </div>
    </div>
  );
}

function ProductGrid({ products, onOpen }) {
  return (
    <section style={{ padding: "112px 80px", background: "var(--sese-warm-white)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, gap: 32, flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Eyebrow>The full line</Eyebrow>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 44, lineHeight: 1.1, color: "var(--sese-ink)", maxWidth: 600 }}>
            Nine products. One quiet philosophy.
          </h2>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Tag active>All</Tag><Tag>Cleanse</Tag><Tag>Treat</Tag><Tag>Moisturise</Tag><Tag>Protect</Tag>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {products.map(p => <ProductCard key={p.id} p={p} onOpen={onOpen} />)}
      </div>
    </section>
  );
}

function StarterBundle({ products, onCta }) {
  return (
    <section style={{ background: "var(--sese-sand)", padding: "120px 80px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <Eyebrow color="var(--fg-on-sand)">Starter Routine Bundle</Eyebrow>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 56, lineHeight: 1.05, color: "var(--fg-on-sand)" }}>
            Begin where it matters.
          </h2>
          <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 18, lineHeight: 1.6, color: "var(--fg-on-sand)", maxWidth: 460 }}>
            The five-step morning routine in one box — Cleanser, Toner, Peptide Serum, Day Cream and SPF50 Stick. Save €18 versus buying separately.
          </p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, fontFamily: "var(--font-display)" }}>
            <span style={{ fontSize: 32, color: "var(--fg-on-sand)" }}>€168</span>
            <span style={{ fontSize: 18, color: "var(--fg-on-sand)", opacity: 0.6, textDecoration: "line-through" }}>€186</span>
            <span style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--sese-blue-700)" }}>Save €18</span>
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            <Btn onClick={() => onCta && onCta("starter")}>Add the bundle</Btn>
            <Btn variant="ghost">See what's inside</Btn>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {[0,1,3,5,8].map((i, idx) => {
            const p = products[i];
            return (
              <div key={p.id} style={{
                background: "var(--sese-warm-white)", aspectRatio: "3/4",
                backgroundImage: `url('${p.img}')`, backgroundSize: "contain",
                backgroundRepeat: "no-repeat", backgroundPosition: "center",
                gridColumn: idx === 4 ? "2 / span 1" : "auto"
              }} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DayVsNight({ products }) {
  const dayIds = ["cleansing-foam", "vitamin-c-serum", "firming-day-cream", "spf50-stick"];
  const nightIds = ["cleansing-foam", "retinol-alt-serum", "smoothing-eye-cream", "ceramide-night-cream"];
  const find = (id) => products.find(p => p.id === id);

  const Side = ({ tone, eyebrow, title, lede, items, bg, fg }) => (
    <div style={{ background: bg, padding: "96px 64px", color: fg, display: "flex", flexDirection: "column", gap: 24 }}>
      <Eyebrow color={fg === "var(--sese-warm-white)" ? "rgba(250,245,236,0.7)" : "var(--fg-muted)"}>{eyebrow}</Eyebrow>
      <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 44, lineHeight: 1.05, color: fg }}>{title}</h3>
      <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 16, lineHeight: 1.6, color: fg, opacity: 0.85, maxWidth: 380 }}>{lede}</p>
      <ol style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
        {items.map((p, i) => (
          <li key={p.id} style={{ display: "flex", alignItems: "center", gap: 16, paddingBottom: 14, borderBottom: "1px solid " + (fg === "var(--sese-warm-white)" ? "rgba(250,245,236,0.18)" : "var(--line-soft)") }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 11, letterSpacing: "0.32em", color: fg, opacity: 0.55, minWidth: 28 }}>{String(i+1).padStart(2,'0')}</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 18, color: fg }}>{p.name}</span>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <Side eyebrow="Day routine" title="A bright start." lede="Cleanse, glow, and step out protected. Made for window light and the school run." items={dayIds.map(find)} bg="var(--sese-sand-50)" fg="var(--sese-ink)" />
      <Side eyebrow="Night routine" title="A quiet end." lede="While you sleep, your skin remembers. Ceramides, peptides and a candle's warmth." items={nightIds.map(find)} bg="var(--sese-ink)" fg="var(--sese-warm-white)" />
    </section>
  );
}

function Ingredients() {
  const _bg = "var(--sese-green-50)";
  const ingredients = [
    { name: "Bakuchiol", role: "Gentle retinol alternative — smooths without sensitising." },
    { name: "Niacinamide", role: "Evens tone, calms redness, strengthens the barrier." },
    { name: "Ceramides", role: "Repair and seal the skin's nightly moisture barrier." },
    { name: "Peptides", role: "Signal the skin to firm — the slow, honest way." },
    { name: "Aloe vera", role: "Hydrates, cools, soothes after sun and after long days." },
    { name: "Vitamin C", role: "Brightens the morning skin — antioxidant defence." }
  ];
  return (
    <section style={{ padding: "120px 80px", background: _bg }}>
      <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 80 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <Eyebrow color="var(--sese-green-700)">Formulation</Eyebrow>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 48, lineHeight: 1.05, color: "var(--sese-ink)" }}>
            Six honest ingredients<br/>doing quiet work.
          </h2>
          <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 16, lineHeight: 1.65, color: "var(--fg-secondary)", maxWidth: 460 }}>
            Every SESE formula is built around a small set of well-studied actives — chosen for tolerance,
            not trend. No fragrance, no essential oils, no surprise irritants.
          </p>
        </div>
        <div style={{ borderTop: "1px solid rgba(78,122,78,0.18)" }}>
          {ingredients.map(i => (
            <div key={i.name} style={{ display: "grid", gridTemplateColumns: "180px 1fr", padding: "22px 0", borderBottom: "1px solid rgba(78,122,78,0.18)", alignItems: "baseline", gap: 24 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 20, color: "var(--sese-green-700)", letterSpacing: "0.02em" }}>{i.name}</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 16, lineHeight: 1.55, color: "var(--fg-secondary)" }}>{i.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section style={{ background: "var(--sese-blue)", padding: "120px 80px", color: "var(--sese-warm-white)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div style={{
          aspectRatio: "4/5", background: "var(--sese-blue-700)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 12, letterSpacing: "0.32em",
          textTransform: "uppercase", color: "var(--sese-warm-white)", opacity: 0.6
        }}>Lifestyle photo · coast</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Eyebrow color="rgba(250,245,236,0.7)">Our story</Eyebrow>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 44, lineHeight: 1.1, color: "var(--sese-warm-white)" }}>
            We started with a quiet question.
          </h2>
          <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 17, lineHeight: 1.7, color: "var(--sese-warm-white)", opacity: 0.88 }}>
            What if anti-aging didn't have to mean fighting the mirror? What if it could feel like
            the time you take in the morning, the salt on your skin after a swim, the breath before
            the day begins?
          </p>
          <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 17, lineHeight: 1.7, color: "var(--sese-warm-white)", opacity: 0.88 }}>
            SESE is skincare made on the Belgian coast — gentle, honest, made for the long view.
          </p>
          <div>
            <button style={{
              background: "transparent", color: "var(--sese-warm-white)",
              border: "1px solid rgba(250,245,236,0.55)", padding: "16px 28px", cursor: "pointer",
              fontFamily: "var(--font-display)", fontWeight: 300,
              fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", borderRadius: 4
            }}>Read our full story</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { kpi: "92%", label: "noticed softer skin in two weeks" },
    { kpi: "4.8 / 5", label: "1,200+ verified reviews" },
    { kpi: "0", label: "fragrance, essential oils, parabens" },
    { kpi: "30 days", label: "skin-feel guarantee" }
  ];
  return (
    <section style={{ padding: "96px 80px", background: "var(--sese-warm-white)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
        {items.map((i, idx) => (
          <div key={i.label} style={{ display: "flex", flexDirection: "column", gap: 12, paddingRight: 24, borderRight: idx < 3 ? "1px solid var(--line-soft)" : "none" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 44, color: ["var(--sese-blue)","var(--sese-green)","var(--sese-ink)","var(--sese-sand-700)"][idx], letterSpacing: "0.01em" }}>{i.kpi}</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 14, lineHeight: 1.5, color: "var(--fg-secondary)" }}>{i.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FaqPreview({ onNav }) {
  const qs = [
    { q: "Is SESE suitable for sensitive skin?", a: "Yes. Every formula is fragrance-free and built around well-tolerated actives." },
    { q: "When will I see results?", a: "Most people feel softer, calmer skin in 10–14 days. Firmness builds over 6–8 weeks." },
    { q: "Can I use the Peptide and Retinol Alternative serums together?", a: "Yes — Peptide in the morning, Retinol Alternative at night works beautifully." }
  ];
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: "120px 80px", background: "var(--sese-blue-50)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 80 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <Eyebrow color="var(--sese-blue-700)">FAQ</Eyebrow>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 44, lineHeight: 1.1, color: "var(--sese-ink)" }}>
            Honest answers to honest questions.
          </h2>
          <Btn variant="ghost" onClick={() => onNav("faq")}>Read all FAQs</Btn>
        </div>
        <div>
          {qs.map((item, i) => (
            <div key={i} onClick={() => setOpen(open === i ? -1 : i)} style={{ borderTop: "1px solid var(--line-default)", padding: "22px 0", cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 20, color: "var(--sese-ink)" }}>{item.q}</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 22, color: "var(--fg-muted)" }}>{open === i ? "—" : "+"}</span>
              </div>
              {open === i && (
                <p style={{ margin: "14px 0 0", fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 16, lineHeight: 1.6, color: "var(--fg-secondary)", maxWidth: 560 }}>{item.a}</p>
              )}
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--line-default)" }} />
        </div>
      </div>
    </section>
  );
}

function FinalCta({ onCta }) {
  return (
    <section style={{ background: "var(--sese-ink)", padding: "140px 80px", color: "var(--sese-warm-white)", textAlign: "center" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
        <Eyebrow color="rgba(250,245,236,0.6)">A small ritual, every morning</Eyebrow>
        <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 64, lineHeight: 1.05, color: "var(--sese-warm-white)", letterSpacing: "0.01em" }}>
          Unlock your skin's<br/>timeless beauty.
        </h2>
        <div style={{ display: "flex", gap: 14, marginTop: 12 }}>
          <button onClick={() => onCta && onCta("starter")} style={{
            background: "var(--sese-warm-white)", color: "var(--sese-ink)",
            border: "none", padding: "16px 28px", cursor: "pointer",
            fontFamily: "var(--font-display)", fontWeight: 300,
            fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", borderRadius: 4
          }}>Start the routine</button>
          <button style={{
            background: "transparent", color: "var(--sese-warm-white)",
            border: "1px solid rgba(250,245,236,0.4)", padding: "16px 28px", cursor: "pointer",
            fontFamily: "var(--font-display)", fontWeight: 300,
            fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", borderRadius: 4
          }}>Take the skin quiz</button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--sese-ink)", color: "var(--sese-warm-white)", padding: "80px 80px 40px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 56, marginBottom: 64 }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 32, letterSpacing: "0.32em", marginBottom: 14 }}>S E S E</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 13, letterSpacing: "0.32em", textTransform: "lowercase", opacity: 0.7, marginBottom: 32 }}>unlock your skin's timeless beauty</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 14, opacity: 0.85 }}>
            <span>customerservice@sese.be</span>
            <span>Instagram &middot; @sese.be_</span>
          </div>
        </div>
        {[
          { h: "Help", items: ["FAQ", "Contact", "Shipping & Delivery", "Returns & Refunds", "Track my order"] },
          { h: "SESE", items: ["About us", "Ingredients", "Routines", "Journal"] },
          { h: "Legal", items: ["Privacy policy", "Terms & Conditions", "Right of Withdrawal", "Cookie policy"] }
        ].map(col => (
          <div key={col.h}>
            <h4 style={{ margin: "0 0 18px", fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", opacity: 0.6 }}>{col.h}</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 14, opacity: 0.85 }}>
              {col.items.map(it => <li key={it} style={{ cursor: "pointer" }}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(250,245,236,0.12)", paddingTop: 28, display: "flex", justifyContent: "space-between", fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.55 }}>
        <span>© 2026 SESE</span>
        <span>Visa &middot; Mastercard &middot; Bancontact &middot; PayPal</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Hero, RoutineFlow, ProductCard, ProductGrid, StarterBundle, DayVsNight, Ingredients, StorySection, Trust, FaqPreview, FinalCta, Footer });
