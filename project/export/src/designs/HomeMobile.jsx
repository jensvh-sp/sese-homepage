/* global React */

/* Mobile homepage — condenses the desktop hero, routine, products, bundle, story */
function HomeMobile({ products }) {
  return (
    <div style={{ background: "var(--sese-warm-white)", color: "var(--sese-ink)", fontFamily: "var(--font-display)", fontWeight: 300, width: 390 }}>
      <div style={{ background: "var(--sese-ink)", color: "var(--sese-warm-white)", padding: "10px 20px", textAlign: "center", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase" }}>
        Free shipping over €60
      </div>
      <div style={{ padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line-soft)" }}>
        <span style={{ fontSize: 18 }}>≡</span>
        <span style={{ fontSize: 18, letterSpacing: "0.32em" }}>S E S E</span>
        <span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-secondary)" }}>Bag</span>
      </div>

      {/* Hero */}
      <div style={{ padding: "48px 24px 32px", display: "flex", flexDirection: "column", gap: 18 }}>
        <span style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--fg-muted)" }}>Beach · Botanical · Anti-Aging</span>
        <h1 style={{ margin: 0, fontSize: 46, lineHeight: 1.02 }}>Skincare for<br/>timeless beauty.</h1>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--fg-secondary)" }}>Five steps. One routine. Five minutes that feel like yours.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
          <button style={{ background: "var(--sese-ink)", color: "var(--sese-warm-white)", border: "none", padding: "16px 24px", fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", borderRadius: 4 }}>Shop the routine</button>
          <button style={{ background: "transparent", color: "var(--sese-ink)", border: "1px solid var(--line-strong)", padding: "16px 24px", fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", borderRadius: 4 }}>Read our story</button>
        </div>
      </div>
      <div style={{ background: "var(--sese-sand)", aspectRatio: "4/5", margin: "0 24px 32px", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={products[3].img} style={{ maxHeight: "75%", maxWidth: "55%", objectFit: "contain" }} />
      </div>

      {/* Routine flow */}
      <div style={{ padding: "32px 24px", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
        <div style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 16 }}>The SESE rhythm</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
          {[
            { n: "01", l: "Cleanse",    bg: "var(--sese-blue-50)",  c: "var(--sese-blue)" },
            { n: "02", l: "Tone",       bg: "var(--sese-blue-50)",  c: "var(--sese-blue-300)" },
            { n: "03", l: "Treat",      bg: "var(--sese-sand-50)",  c: "var(--sese-sand-700)" },
            { n: "04", l: "Hydrate",    bg: "var(--sese-green-50)", c: "var(--sese-green-300)" },
            { n: "05", l: "Protect",    bg: "var(--sese-sand)",     c: "var(--sese-sand-700)" }
          ].map(s => (
            <div key={s.n} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: s.bg, border: `1px solid ${s.c}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, letterSpacing: "0.22em", color: s.c }}>{s.n}</div>
              <span style={{ fontSize: 11, letterSpacing: "0.04em" }}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Product grid 2-up */}
      <div style={{ padding: "40px 24px" }}>
        <div style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 8 }}>The full line</div>
        <h2 style={{ margin: "0 0 24px", fontSize: 28, lineHeight: 1.1 }}>Nine products. One quiet philosophy.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {products.slice(0, 4).map(p => (
            <div key={p.id} style={{ background: "var(--bg-elevated)", border: "1px solid var(--line-soft)" }}>
              <div style={{ aspectRatio: "3/4", background: "var(--sese-sand-50)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={p.img} style={{ maxHeight: "85%", maxWidth: "70%", objectFit: "contain" }} />
              </div>
              <div style={{ padding: "12px 12px 14px" }}>
                <div style={{ fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--fg-muted)" }}>{p.step}</div>
                <div style={{ fontSize: 14, marginTop: 4 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: "var(--fg-muted)", marginTop: 4 }}>{p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Starter bundle */}
      <div style={{ background: "var(--sese-sand)", padding: "48px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
        <span style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--fg-on-sand)" }}>Starter Routine Bundle</span>
        <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.05, color: "var(--fg-on-sand)" }}>Begin where it matters.</h2>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--fg-on-sand)", opacity: 0.85 }}>The five-step morning routine in one box. Save €18.</p>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
          <span style={{ fontSize: 28, color: "var(--fg-on-sand)" }}>€168</span>
          <s style={{ fontSize: 15, color: "var(--fg-on-sand)", opacity: 0.55 }}>€186</s>
        </div>
        <button style={{ background: "var(--sese-ink)", color: "var(--sese-warm-white)", border: "none", padding: "16px 24px", fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", borderRadius: 4, alignSelf: "flex-start" }}>Add the bundle</button>
      </div>

      {/* Story (blue) */}
      <div style={{ background: "var(--sese-blue)", color: "var(--sese-warm-white)", padding: "48px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
        <span style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", opacity: 0.7 }}>Our story</span>
        <h2 style={{ margin: 0, fontSize: 32, lineHeight: 1.1 }}>We started with a quiet question.</h2>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, opacity: 0.88 }}>What if anti-aging didn't have to mean fighting the mirror? Made on the Belgian coast — gentle, honest, made for the long view.</p>
      </div>

      {/* Final CTA */}
      <div style={{ background: "var(--sese-ink)", color: "var(--sese-warm-white)", padding: "64px 24px", textAlign: "center", display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
        <span style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", opacity: 0.6 }}>A small ritual</span>
        <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.05 }}>Unlock your skin's<br/>timeless beauty.</h2>
        <button style={{ background: "var(--sese-warm-white)", color: "var(--sese-ink)", border: "none", padding: "16px 24px", fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", borderRadius: 4, marginTop: 8 }}>Start the routine</button>
      </div>
    </div>
  );
}

Object.assign(window, { HomeMobile });
