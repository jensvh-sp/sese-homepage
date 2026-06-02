/* global React */
const { useState } = React;

/* Editorial PDP — image-led, magazine layout */
function PDPEditorial({ p }) {
  return (
    <div style={{ background: "var(--sese-warm-white)", color: "var(--sese-ink)", fontFamily: "var(--font-display)", fontWeight: 300 }}>
      <div style={{ padding: "16px 40px", borderBottom: "1px solid var(--line-soft)", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center" }}>
        <span style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--fg-muted)" }}>Shop &nbsp;/&nbsp; Serums &nbsp;/&nbsp; Peptide Serum</span>
        <span style={{ fontSize: 22, letterSpacing: "0.32em" }}>S E S E</span>
        <span style={{ textAlign: "right", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-secondary)" }}>Bag · 0</span>
      </div>

      <section style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", minHeight: 760 }}>
        <div style={{ background: "var(--sese-sand)", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 40px", position: "relative" }}>
          <img src={p.img} style={{ maxHeight: 620, maxWidth: "85%", objectFit: "contain" }} />
          <span style={{ position: "absolute", top: 32, left: 32, fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--fg-on-sand)", opacity: 0.7 }}>{p.step}</span>
          <span style={{ position: "absolute", bottom: 32, right: 32, fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--fg-on-sand)", opacity: 0.7 }}>30 ml</span>
        </div>
        <div style={{ padding: "96px 64px", display: "flex", flexDirection: "column", gap: 28, justifyContent: "center", maxWidth: 580 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--sese-blue-700)" }}>Treat · firming</span>
          <h1 style={{ margin: 0, fontSize: 68, lineHeight: 1.02, letterSpacing: "0.01em" }}>Peptide<br/>Serum.</h1>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.65, color: "var(--fg-secondary)" }}>
            A weightless serum that signals the skin to firm — slowly, honestly, the way time should pass.
            Made for mornings or evenings, suited to every skin type.
          </p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 4 }}>
            <span style={{ fontSize: 36 }}>{p.price}</span>
            <span style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-muted)" }}>30 ml · ~2 months</span>
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 12 }}>
            <button style={{ background: "var(--sese-ink)", color: "var(--sese-warm-white)", border: "none", padding: "18px 32px", fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", borderRadius: 4, cursor: "pointer" }}>Add to bag · {p.price}</button>
            <button style={{ background: "transparent", border: "1px solid var(--line-strong)", color: "var(--sese-ink)", padding: "18px 28px", fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", borderRadius: 4, cursor: "pointer" }}>Add to routine</button>
          </div>
          <div style={{ display: "flex", gap: 28, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-muted)", marginTop: 8 }}>
            <span>Fragrance-free</span><span>Cruelty-free</span><span>Made in Belgium</span>
          </div>
        </div>
      </section>

      <section style={{ padding: "120px 80px", background: "var(--sese-blue-50)", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 80 }}>
        <div>
          <span style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--sese-blue-700)" }}>The honest part</span>
          <h2 style={{ margin: "16px 0 0", fontSize: 44, lineHeight: 1.1 }}>What it does, what it doesn't.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {[
            { h: "Firms over time", c: "Visible improvement in elasticity after 6–8 weeks of daily use." },
            { h: "Calms first", c: "Niacinamide and aloe to soothe before the actives go to work." },
            { h: "Layers gently", c: "Plays well with Vitamin C in the morning, Retinol Alt. at night." },
            { h: "No miracles", c: "We don't promise wrinkles gone. We promise softer, calmer, kinder skin." }
          ].map(item => (
            <div key={item.h}>
              <div style={{ fontSize: 18, color: "var(--sese-ink)", marginBottom: 8 }}>{item.h}</div>
              <div style={{ fontSize: 15, lineHeight: 1.6, color: "var(--fg-secondary)" }}>{item.c}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "120px 80px", background: "var(--sese-warm-white)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div style={{ aspectRatio: "4/5", background: "var(--sese-sand-50)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--fg-muted)" }}>Lifestyle · hand & dropper</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--fg-muted)" }}>How to use</span>
          <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.1 }}>Two drops. Patted in. That's it.</h2>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 18 }}>
            {["Cleanse with Cleansing Foam.", "Mist with Hydrating Toner.", "Press 2–3 drops into damp skin.", "Follow with Day Cream and SPF50."].map((s, i) => (
              <li key={i} style={{ display: "flex", gap: 18, paddingBottom: 14, borderBottom: "1px solid var(--line-soft)" }}>
                <span style={{ fontSize: 11, letterSpacing: "0.32em", color: "var(--fg-muted)", minWidth: 28 }}>{String(i+1).padStart(2,'0')}</span>
                <span style={{ fontSize: 17, lineHeight: 1.5 }}>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

/* Clinical PDP — accordion-ed, transparent, info-dense */
function PDPClinical({ p }) {
  const [open, setOpen] = useState(0);
  const sections = [
    { h: "Full ingredient list (INCI)", c: "Aqua, Glycerin, Niacinamide (5%), Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Acetyl Hexapeptide-8, Sodium Hyaluronate, Aloe Barbadensis Leaf Juice, Squalane, Tocopherol, Phenoxyethanol, Citric Acid." },
    { h: "Clinical study summary", c: "Independent 8-week study, n=42. 92% reported softer skin texture in 14 days. 81% reported visibly firmer skin in 56 days. Self-assessed; no instrumental claims." },
    { h: "Texture & finish", c: "Lightweight emulsion. Absorbs in ~30 seconds. Leaves no shine. Fragrance-free, dye-free, essential-oil-free." },
    { h: "Suitability", c: "Suitable for all skin types including sensitive. Pregnancy-safe. Patch-test recommended for compromised skin barriers." },
    { h: "Storage & shelf life", c: "Store below 25°C, away from direct sunlight. PAO 12 months after opening. Best within 24 months of production date." }
  ];

  return (
    <div style={{ background: "var(--sese-warm-white)", color: "var(--sese-ink)", fontFamily: "var(--font-display)", fontWeight: 300 }}>
      <div style={{ padding: "16px 40px", borderBottom: "1px solid var(--line-soft)", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center" }}>
        <span style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--fg-muted)" }}>Shop &nbsp;/&nbsp; Serums &nbsp;/&nbsp; Peptide Serum</span>
        <span style={{ fontSize: 22, letterSpacing: "0.32em" }}>S E S E</span>
        <span style={{ textAlign: "right", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-secondary)" }}>Bag · 0</span>
      </div>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "48px 80px 80px", gap: 64 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ aspectRatio: "1/1", background: "var(--sese-sand-50)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8 }}>
            <img src={p.img} style={{ maxHeight: "85%", maxWidth: "85%", objectFit: "contain" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
            {[p.img, p.studio, p.img, p.studio].map((src, i) => (
              <div key={i} style={{ aspectRatio: "1/1", background: "var(--sese-sand-50)", borderRadius: 4, border: i === 0 ? "1px solid var(--sese-ink)" : "1px solid var(--line-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={src} style={{ maxHeight: "75%", maxWidth: "75%", objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, paddingTop: 12 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--sese-blue-700)" }}>{p.step}</span>
          <h1 style={{ margin: 0, fontSize: 48, lineHeight: 1.05 }}>Peptide Serum</h1>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--fg-secondary)", maxWidth: 460 }}>{p.benefit} A peptide-rich, fragrance-free formula for daily use, AM or PM.</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}>
            {["Fragrance-free", "Vegan", "Pregnancy-safe", "Dermatologist-tested"].map(t => (
              <span key={t} style={{ padding: "6px 12px", border: "1px solid var(--sese-green)", color: "var(--sese-green-700)", borderRadius: 999, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>{t}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "baseline", marginTop: 8 }}>
            <span style={{ fontSize: 32 }}>{p.price}</span>
            <span style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-muted)" }}>30 ml · €1.60/ml</span>
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
            <button style={{ background: "var(--sese-ink)", color: "var(--sese-warm-white)", border: "none", padding: "16px 28px", fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", borderRadius: 4, cursor: "pointer", flex: 1 }}>Add to bag · {p.price}</button>
            <button style={{ background: "var(--sese-blue)", color: "var(--sese-warm-white)", border: "none", padding: "16px 24px", fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", borderRadius: 4, cursor: "pointer" }}>Subscribe · save 10%</button>
          </div>
          <div style={{ borderTop: "1px solid var(--line-soft)", marginTop: 12 }}>
            {sections.map((s, i) => (
              <div key={s.h} style={{ borderBottom: "1px solid var(--line-soft)" }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: "100%", background: "none", border: "none", padding: "18px 0", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--sese-ink)" }}>
                  <span>{s.h}</span>
                  <span style={{ fontSize: 18 }}>{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <div style={{ paddingBottom: 18, fontSize: 14, lineHeight: 1.65, color: "var(--fg-secondary)" }}>{s.c}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* Mobile shells (390px) */
function PDPEditorialMobile({ p }) {
  return (
    <div style={{ background: "var(--sese-warm-white)", color: "var(--sese-ink)", fontFamily: "var(--font-display)", fontWeight: 300, width: 390 }}>
      <div style={{ padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line-soft)" }}>
        <span style={{ fontSize: 18, letterSpacing: "0.22em" }}>≡</span>
        <span style={{ fontSize: 18, letterSpacing: "0.32em" }}>S E S E</span>
        <span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-secondary)" }}>Bag</span>
      </div>
      <div style={{ background: "var(--sese-sand)", aspectRatio: "1/1.1", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <img src={p.img} style={{ maxHeight: "82%", maxWidth: "65%", objectFit: "contain" }} />
        <span style={{ position: "absolute", top: 18, left: 18, fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--fg-on-sand)", opacity: 0.75 }}>{p.step}</span>
      </div>
      <div style={{ padding: "32px 24px 24px", display: "flex", flexDirection: "column", gap: 18 }}>
        <span style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--sese-blue-700)" }}>Treat · firming</span>
        <h1 style={{ margin: 0, fontSize: 40, lineHeight: 1.05 }}>Peptide<br/>Serum.</h1>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--fg-secondary)" }}>Signals the skin to firm — slowly, honestly. Made for every morning or every evening.</p>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}><span style={{ fontSize: 28 }}>{p.price}</span><span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-muted)" }}>30 ml</span></div>
        <button style={{ background: "var(--sese-ink)", color: "var(--sese-warm-white)", border: "none", padding: "18px 24px", fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", borderRadius: 4 }}>Add to bag · {p.price}</button>
      </div>
      <div style={{ background: "var(--sese-blue-50)", padding: "32px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
        <span style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--sese-blue-700)" }}>The honest part</span>
        <div style={{ fontSize: 22, lineHeight: 1.15 }}>What it does, what it doesn't.</div>
        {[
          { h: "Firms over time", c: "Visible improvement in elasticity at 6–8 weeks." },
          { h: "Calms first", c: "Niacinamide and aloe before the peptides go to work." },
          { h: "No miracles", c: "Softer, calmer, kinder skin — that's the promise." }
        ].map(i => (
          <div key={i.h} style={{ paddingTop: 12, borderTop: "1px solid rgba(58,125,148,0.18)" }}>
            <div style={{ fontSize: 15, marginBottom: 4 }}>{i.h}</div>
            <div style={{ fontSize: 13, lineHeight: 1.55, color: "var(--fg-secondary)" }}>{i.c}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PDPClinicalMobile({ p }) {
  return (
    <div style={{ background: "var(--sese-warm-white)", color: "var(--sese-ink)", fontFamily: "var(--font-display)", fontWeight: 300, width: 390 }}>
      <div style={{ padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line-soft)" }}>
        <span style={{ fontSize: 18 }}>≡</span>
        <span style={{ fontSize: 18, letterSpacing: "0.32em" }}>S E S E</span>
        <span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-secondary)" }}>Bag</span>
      </div>
      <div style={{ aspectRatio: "1/1", background: "var(--sese-sand-50)", display: "flex", alignItems: "center", justifyContent: "center", margin: "20px 24px", borderRadius: 8 }}>
        <img src={p.img} style={{ maxHeight: "82%", maxWidth: "65%", objectFit: "contain" }} />
      </div>
      <div style={{ padding: "0 24px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
        <span style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--sese-blue-700)" }}>{p.step}</span>
        <h1 style={{ margin: 0, fontSize: 32, lineHeight: 1.05 }}>Peptide Serum</h1>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--fg-secondary)" }}>{p.benefit}</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["Fragrance-free", "Vegan", "Pregnancy-safe"].map(t => (
            <span key={t} style={{ padding: "5px 10px", border: "1px solid var(--sese-green)", color: "var(--sese-green-700)", borderRadius: 999, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" }}>{t}</span>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}><span style={{ fontSize: 26 }}>{p.price}</span><span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-muted)" }}>30 ml · €1.60/ml</span></div>
        <button style={{ background: "var(--sese-ink)", color: "var(--sese-warm-white)", border: "none", padding: "16px 24px", fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", borderRadius: 4 }}>Add to bag · {p.price}</button>
        <button style={{ background: "var(--sese-blue)", color: "var(--sese-warm-white)", border: "none", padding: "14px 20px", fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", borderRadius: 4 }}>Subscribe · save 10%</button>
        <div style={{ borderTop: "1px solid var(--line-soft)", marginTop: 8 }}>
          {[
            { h: "Full INCI", c: "Aqua, Glycerin, Niacinamide (5%), Palmitoyl Tripeptide-1…" },
            { h: "Clinical study", c: "8 weeks, n=42 · 92% softer skin in 14 days." },
            { h: "Suitability", c: "All skin types · pregnancy-safe · patch-test sensitive." }
          ].map(s => (
            <div key={s.h} style={{ borderBottom: "1px solid var(--line-soft)", padding: "14px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>{s.h}</span>
              <span style={{ fontSize: 18, color: "var(--fg-muted)" }}>+</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { PDPEditorial, PDPClinical, PDPEditorialMobile, PDPClinicalMobile });
