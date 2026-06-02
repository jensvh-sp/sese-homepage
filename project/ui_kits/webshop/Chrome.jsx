/* global React */
const { useState } = React;

/* ─────────── small primitives ─────────── */

function Eyebrow({ children, color }) {
  return <span className="sese-eyebrow" style={{ color: color || "var(--fg-muted)" }}>{children}</span>;
}

function Btn({ variant = "primary", children, onClick, as = "button", ...rest }) {
  const cls = `sese-btn sese-btn--${variant}`;
  const Tag = as;
  return <Tag className={cls} onClick={onClick} {...rest}>{children}</Tag>;
}

function Tag({ children, active }) {
  return (
    <span style={{
      display: "inline-flex", padding: "6px 14px", borderRadius: 999,
      border: "1px solid " + (active ? "var(--sese-ink)" : "var(--line-default)"),
      background: active ? "var(--sese-ink)" : "transparent",
      color: active ? "var(--sese-warm-white)" : "var(--fg-secondary)",
      fontFamily: "var(--font-display)", fontWeight: 300,
      fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
      cursor: "pointer"
    }}>{children}</span>
  );
}

/* ─────────── announcement + nav ─────────── */

function AnnouncementBar() {
  const items = ["Free shipping over €60", "30-day skin-feel guarantee", "Made in Belgium"];
  return (
    <div style={{
      background: "var(--sese-ink)", color: "var(--sese-warm-white)",
      padding: "11px 24px", display: "flex", justifyContent: "center",
      gap: 36, fontFamily: "var(--font-display)", fontWeight: 300,
      fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase"
    }}>
      {items.map((t, i) => (
        <React.Fragment key={i}>
          <span style={{ opacity: 0.85 }}>{t}</span>
          {i < items.length - 1 && <span style={{ opacity: 0.4 }}>·</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

function Nav({ onNav, current }) {
  const links = [
    { id: "shop", label: "Shop" },
    { id: "routines", label: "Routines" },
    { id: "ingredients", label: "Ingredients" },
    { id: "about", label: "About" },
    { id: "faq", label: "FAQ" }
  ];
  return (
    <header style={{
      display: "grid", gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center", padding: "26px 40px",
      background: "var(--bg-primary)", borderBottom: "1px solid var(--line-soft)",
      position: "sticky", top: 0, zIndex: 50
    }}>
      <nav style={{ display: "flex", gap: 32 }}>
        {links.map(l => (
          <a key={l.id} onClick={() => onNav(l.id)} style={{
            cursor: "pointer", fontFamily: "var(--font-display)", fontWeight: 300,
            fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase",
            color: current === l.id ? "var(--sese-ink)" : "var(--fg-secondary)",
            paddingBottom: 4, borderBottom: "1px solid " + (current === l.id ? "var(--sese-ink)" : "transparent"),
            transition: "all .28s var(--ease-out)"
          }}>{l.label}</a>
        ))}
      </nav>
      <a onClick={() => onNav("home")} style={{
        cursor: "pointer", fontFamily: "var(--font-display)", fontWeight: 300,
        fontSize: 26, letterSpacing: "0.32em", color: "var(--sese-ink)"
      }}>S E S E</a>
      <div style={{
        display: "flex", gap: 24, justifyContent: "flex-end",
        fontFamily: "var(--font-display)", fontWeight: 300,
        fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase",
        color: "var(--fg-secondary)"
      }}>
        <span style={{ cursor: "pointer" }}>Search</span>
        <span style={{ cursor: "pointer" }}>Account</span>
        <span style={{ cursor: "pointer" }}>Bag · 0</span>
      </div>
    </header>
  );
}

Object.assign(window, { Eyebrow, Btn, Tag, AnnouncementBar, Nav });
