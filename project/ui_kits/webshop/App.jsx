/* global React, ReactDOM */
const { useState } = React;

function ProductDetail({ p, onBack }) {
  const [qty, setQty] = useState(1);
  return (
    <main style={{ background: "var(--sese-warm-white)", padding: "48px 80px 120px" }}>
      <div onClick={onBack} style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--fg-muted)", cursor: "pointer", marginBottom: 32 }}>← All products</div>
      <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 80 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ aspectRatio: "1/1", background: "var(--sese-sand-50)", backgroundImage: `url('${p.img}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
            {[p.img, p.studio, p.img, p.studio].map((src, i) => (
              <div key={i} style={{ aspectRatio: "1/1", background: "var(--sese-sand-50)", backgroundImage: `url('${src}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", border: i === 0 ? "1px solid var(--sese-ink)" : "1px solid var(--line-soft)" }} />
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, paddingTop: 32 }}>
          <Eyebrow>{p.step}</Eyebrow>
          <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 56, lineHeight: 1.05, color: "var(--sese-ink)", letterSpacing: "0.01em" }}>{p.name}</h1>
          <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 18, lineHeight: 1.65, color: "var(--fg-secondary)", maxWidth: 520 }}>{p.benefit} A weightless, fragrance-free formula made for the long view — pair with the rest of your routine.</p>
          <div style={{ display: "flex", gap: 16, alignItems: "baseline", marginTop: 8 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 32, color: "var(--sese-ink)" }}>{p.price}</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-muted)" }}>30 ml &middot; ~2 months</span>
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "center", marginTop: 8 }}>
            <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--line-default)", borderRadius: 4 }}>
              <button onClick={() => setQty(Math.max(1, qty-1))} style={{ background: "none", border: "none", padding: "14px 18px", cursor: "pointer", fontFamily: "var(--font-display)", fontSize: 16 }}>−</button>
              <span style={{ padding: "0 12px", fontFamily: "var(--font-display)", fontSize: 16 }}>{qty}</span>
              <button onClick={() => setQty(qty+1)} style={{ background: "none", border: "none", padding: "14px 18px", cursor: "pointer", fontFamily: "var(--font-display)", fontSize: 16 }}>+</button>
            </div>
            <Btn>Add to bag</Btn>
          </div>
          <div style={{ borderTop: "1px solid var(--line-soft)", paddingTop: 24, marginTop: 16, display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              { h: "How to use", c: "Apply 2–3 drops to clean, toned skin morning or evening. Follow with moisturiser and SPF." },
              { h: "Key ingredients", c: "Bakuchiol · Niacinamide · Squalane · Aloe vera · Vitamin E. Fragrance-free." },
              { h: "Made in", c: "Belgium. Cruelty-free, dermatologist-tested." }
            ].map(s => (
              <div key={s.h}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 6 }}>{s.h}</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 15, lineHeight: 1.6, color: "var(--fg-secondary)" }}>{s.c}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function Home({ products, onOpen, onNav }) {
  return (
    <>
      <Hero onCta={onNav} />
      <RoutineFlow />
      <ProductGrid products={products} onOpen={onOpen} />
      <StarterBundle products={products} onCta={onNav} />
      <DayVsNight products={products} />
      <Ingredients />
      <StorySection />
      <Trust />
      <FaqPreview onNav={onNav} />
      <FinalCta onCta={onNav} />
    </>
  );
}

function App() {
  const products = window.SESE_PRODUCTS;
  const [page, setPage] = useState("home");
  const [activeProduct, setActiveProduct] = useState(null);

  const handleNav = (id) => {
    setPage(id === "home" ? "home" : id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleOpen = (p) => { setActiveProduct(p); setPage("pdp"); window.scrollTo({ top: 0 }); };

  return (
    <div style={{ background: "var(--sese-warm-white)", minHeight: "100vh", color: "var(--sese-ink)" }}>
      <AnnouncementBar />
      <Nav onNav={handleNav} current={page} />
      {page === "pdp" && activeProduct ? (
        <ProductDetail p={activeProduct} onBack={() => setPage("home")} />
      ) : (
        <Home products={products} onOpen={handleOpen} onNav={handleNav} />
      )}
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
