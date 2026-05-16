import { useState } from "react";

const styles = {
  root: {
    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
    color: "#111",
    background: "#fff",
    margin: 0,
    padding: 0,
    overflowX: "hidden",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    height: 56,
    borderBottom: "1px solid #e5e5e5",
    background: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  navLogo: {
    fontWeight: 800,
    fontSize: 18,
    letterSpacing: "-0.5px",
    color: "#111",
    textTransform: "uppercase",
  },
  navLinks: {
    display: "flex",
    gap: 32,
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    color: "#111",
    cursor: "pointer",
    textDecoration: "none",
  },
  navLinkActive: {
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    color: "#111",
    cursor: "pointer",
    textDecoration: "underline",
    textUnderlineOffset: 4,
  },
  navActions: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  btnOutline: {
    padding: "8px 18px",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    background: "transparent",
    border: "1px solid #111",
    color: "#111",
    cursor: "pointer",
    display: "none",
  },
  btnGhost: {
    padding: "8px 18px",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    background: "transparent",
    border: "none",
    color: "#111",
    cursor: "pointer",
  },
  btnSolid: {
    padding: "8px 20px",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    background: "#111",
    border: "1px solid #111",
    color: "#fff",
    cursor: "pointer",
  },

  // Hero
  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    minHeight: 520,
    position: "relative",
  },
  heroLeft: {
    padding: "80px 60px 80px 60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 24,
  },
  heroBadge: {
    display: "inline-block",
    background: "#111",
    color: "#fff",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    padding: "5px 10px",
    width: "fit-content",
  },
  heroTitle: {
    fontSize: 56,
    fontWeight: 800,
    lineHeight: 1.05,
    letterSpacing: "-2px",
    margin: 0,
    color: "#111",
  },
  heroSub: {
    fontSize: 15,
    lineHeight: 1.6,
    color: "#444",
    maxWidth: 300,
    margin: 0,
  },
  heroCTA: {
    display: "inline-block",
    padding: "14px 28px",
    background: "#111",
    color: "#fff",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    cursor: "pointer",
    border: "none",
    width: "fit-content",
  },
  heroRight: {
    background: "#111",
    position: "relative",
    overflow: "hidden",
    minHeight: 460,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  heroGeo: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  statusBadge: {
    position: "absolute",
    bottom: 0,
    left: 0,
    background: "#111",
    color: "#fff",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#4ade80",
  },

  // Features row
  featuresRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    borderTop: "1px solid #e5e5e5",
  },
  featureCard: {
    padding: "40px 36px",
    borderRight: "1px solid #e5e5e5",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  featureCardDark: {
    padding: "40px 36px",
    borderRight: "1px solid #333",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    background: "#111",
    color: "#fff",
  },
  featureIcon: {
    width: 36,
    height: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  featureIconDark: {
    width: 36,
    height: 36,
    background: "#333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 800,
    letterSpacing: "-0.3px",
    textTransform: "uppercase",
    margin: 0,
  },
  featureTitleDark: {
    fontSize: 16,
    fontWeight: 800,
    letterSpacing: "-0.3px",
    textTransform: "uppercase",
    margin: 0,
    color: "#fff",
  },
  featureBody: {
    fontSize: 13,
    lineHeight: 1.65,
    color: "#555",
    margin: 0,
  },
  featureBodyDark: {
    fontSize: 13,
    lineHeight: 1.65,
    color: "#aaa",
    margin: 0,
  },

  // Scalability
  scalability: {
    padding: "80px 60px",
    textAlign: "center",
    background: "#f7f7f5",
    borderTop: "1px solid #e5e5e5",
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 800,
    letterSpacing: "-1px",
    textTransform: "uppercase",
    margin: "0 0 48px",
  },
  scalabilityGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 0,
    maxWidth: 720,
    margin: "0 auto",
  },
  scalabilityCard: {
    border: "1px solid #ddd",
    padding: "28px 24px",
    textAlign: "left",
    marginLeft: -1,
  },
  scalabilityNum: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#999",
    marginBottom: 12,
  },
  scalabilityCardTitle: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "1px",
    textTransform: "uppercase",
    marginBottom: 10,
    color: "#111",
  },
  scalabilityCardBody: {
    fontSize: 13,
    lineHeight: 1.6,
    color: "#555",
  },

  // Business Perks
  perks: {
    padding: "60px 60px 0",
    borderTop: "1px solid #e5e5e5",
  },
  perksTitle: {
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: "-0.5px",
    textTransform: "uppercase",
    marginBottom: 32,
  },
  perksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    borderTop: "1px solid #e5e5e5",
    borderLeft: "1px solid #e5e5e5",
  },
  perkCell: {
    padding: "32px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 14,
    borderRight: "1px solid #e5e5e5",
    borderBottom: "1px solid #e5e5e5",
    cursor: "pointer",
  },
  perkIconBox: {
    width: 44,
    height: 44,
    background: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  perkIconBoxOutline: {
    width: 44,
    height: 44,
    border: "1.5px solid #111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  perkLabel: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#111",
    textAlign: "center",
  },

  // CTA
  ctaSection: {
    padding: "100px 60px",
    textAlign: "center",
    borderTop: "1px solid #e5e5e5",
  },
  ctaTitle: {
    fontSize: 52,
    fontWeight: 800,
    letterSpacing: "-2px",
    textTransform: "uppercase",
    margin: "0 0 40px",
  },
  ctaButtons: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
  },
  ctaBtnSolid: {
    padding: "16px 36px",
    background: "#111",
    color: "#fff",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    border: "1px solid #111",
    cursor: "pointer",
  },
  ctaBtnOutline: {
    padding: "16px 36px",
    background: "transparent",
    color: "#111",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    border: "1px solid #111",
    cursor: "pointer",
  },

  // Footer
  footer: {
    borderTop: "1px solid #e5e5e5",
    padding: "28px 60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerLogo: {
    fontWeight: 800,
    fontSize: 16,
    letterSpacing: "-0.5px",
    textTransform: "uppercase",
  },
  footerLinks: {
    display: "flex",
    gap: 28,
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  footerLink: {
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#555",
    cursor: "pointer",
  },
  footerCopy: {
    fontSize: 11,
    color: "#999",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  },
};

// Geometric SVG for hero
function HeroGeometry() {
  return (
    <svg
      viewBox="0 0 500 520"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="500" height="520" fill="#111" />
      {/* Large dark rectangles forming geometric composition */}
      <polygon points="80,0 320,0 420,180 180,180" fill="#1c1c1c" />
      <polygon points="320,0 500,0 500,220 420,180" fill="#2a2a2a" />
      <polygon points="180,180 420,180 500,400 260,400" fill="#222" />
      <polygon points="0,0 80,0 180,180 0,260" fill="#181818" />
      <polygon points="0,260 180,180 260,400 80,520 0,520" fill="#1a1a1a" />
      <polygon points="260,400 500,400 500,520 60,520" fill="#202020" />
      {/* Highlight edge lines */}
      <line x1="80" y1="0" x2="180" y2="180" stroke="#333" strokeWidth="0.5" />
      <line x1="320" y1="0" x2="420" y2="180" stroke="#333" strokeWidth="0.5" />
      <line x1="180" y1="180" x2="420" y2="180" stroke="#2a2a2a" strokeWidth="0.5" />
      <line x1="180" y1="180" x2="260" y2="400" stroke="#2a2a2a" strokeWidth="0.5" />
      <line x1="420" y1="180" x2="500" y2="400" stroke="#2a2a2a" strokeWidth="0.5" />
      <line x1="260" y1="400" x2="500" y2="400" stroke="#2a2a2a" strokeWidth="0.5" />
      {/* Top-right bright panel */}
      <polygon points="320,0 500,0 500,100 420,180 320,0" fill="#3a3a3a" />
    </svg>
  );
}

// SVG Icons
function IconWallet({ color = "#fff" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <circle cx="17" cy="15" r="1" fill={color} stroke="none" />
    </svg>
  );
}

function IconUsers({ color = "#111" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconSync({ color = "#111" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9S13.657 3 12 3m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
    </svg>
  );
}

function IconPercent({ color = "#fff" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="5" x2="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}
function IconPlane({ color = "#fff" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 1 16.5 2.5L13 6 4.8 4.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 5.7 4.3c.3.2.8.3 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}
function IconConcierge({ color = "#fff" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  );
}
function IconNetwork({ color = "#fff" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="4" height="4" />
      <rect x="10" y="2" width="4" height="4" />
      <rect x="18" y="2" width="4" height="4" />
      <rect x="10" y="18" width="4" height="4" />
      <line x1="6" y1="4" x2="10" y2="4" />
      <line x1="14" y1="4" x2="18" y2="4" />
      <line x1="12" y1="6" x2="12" y2="18" />
    </svg>
  );
}
function IconShield({ color = "#fff" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
function IconCloud({ color = "#111" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

export default function MonoBank({ setPage }) {
  const [hovered, setHovered] = useState(null);

  const perks = [
    { label: "Tax Credits", icon: <IconPercent />, dark: true },
    { label: "Travel Rewards", icon: <IconPlane />, dark: true },
    { label: "24/7 Concierge", icon: <IconConcierge />, dark: true },
    { label: "Networking", icon: <IconNetwork />, dark: true },
    { label: "Legal Shield", icon: <IconShield />, dark: true },
    { label: "SaaS Credits", icon: <IconCloud color="#111" />, dark: false },
  ];

  return (
    <div style={styles.root}>
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }
        button:hover { opacity: 0.85; }
      `}</style>

      {/* NAV */}
      <nav style={styles.nav}>
        <div 
          style={{ ...styles.navLogo, cursor: "pointer" }} 
          onClick={() => setPage && setPage('home')}
        >
          Mono Bank.
        </div>
        <ul style={styles.navLinks}>
          {["Home", "Personal", "Business", "Features"].map((item) => (
            <li key={item}>
              <a
                style={item === "Business" ? styles.navLinkActive : styles.navLink}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (setPage && item === "Home") {
                    setPage('home');
                  }
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div style={styles.navActions}>
          <button style={styles.btnGhost}>Log In</button>
          <button style={styles.btnSolid}>Open Account</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <span style={styles.heroBadge}>Business Focus</span>
          <h1 style={styles.heroTitle}>
            Banking Built<br />for Business.
          </h1>
          <p style={styles.heroSub}>
            Uncompromising financial infrastructure for modern enterprises.
            Zero fluff, total control.
          </p>
          <button style={styles.heroCTA}>Launch Your Account</button>
        </div>
        <div style={styles.heroRight}>
          <HeroGeometry />
          <div style={styles.statusBadge}>
            <span style={styles.statusDot} />
            System Status: Optimal
          </div>
        </div>
      </section>

      {/* FEATURES ROW */}
      <div style={styles.featuresRow}>
        {/* Cash Flow - dark */}
        <div style={styles.featureCardDark}>
          <div style={styles.featureIconDark}>
            <IconWallet color="#fff" />
          </div>
          <p style={{ ...styles.featureTitle, color: "#fff", fontSize: 18 }}>
            Cash Flow Mastery.
          </p>
          <p style={styles.featureBodyDark}>
            Real-time liquidity tracking with predictive forecasting. Every cent
            accounted for, every move calculated.
          </p>
        </div>
        {/* Multi-User */}
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>
            <IconUsers color="#111" />
          </div>
          <p style={styles.featureTitle}>Multi–User Access.</p>
          <p style={styles.featureBody}>
            Delegate with precision. Granular permission levels for your entire
            finance team and accountants.
          </p>
        </div>
        {/* Seamless Sync */}
        <div style={{ ...styles.featureCard, borderRight: "none" }}>
          <div style={styles.featureIcon}>
            <IconSync color="#111" />
          </div>
          <p style={styles.featureTitle}>Seamless Sync.</p>
          <p style={styles.featureBody}>
            Direct API integrations with Xero, QuickBooks, and Sage. Your
            books, always in balance.
          </p>
        </div>
      </div>

      {/* ARCHITECTED FOR SCALABILITY */}
      <section style={styles.scalability}>
        <h2 style={styles.sectionTitle}>Architected for Scalability.</h2>
        <div style={styles.scalabilityGrid}>
          {[
            {
              num: "01.",
              title: "Automation",
              body: "Automate recurring payments and payroll with logic-based triggers.",
            },
            {
              num: "02.",
              title: "Analytics",
              body: "Advanced data visualization for multi-entity reporting and tax prep.",
            },
            {
              num: "03.",
              title: "Security",
              body: "Hardware-level encryption for every transaction and team login.",
            },
          ].map((c, i) => (
            <div key={i} style={styles.scalabilityCard}>
              <p style={styles.scalabilityNum}>{c.num}</p>
              <p style={styles.scalabilityCardTitle}>{c.title}</p>
              <p style={styles.scalabilityCardBody}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUSINESS PERKS */}
      <section style={styles.perks}>
        <h2 style={styles.perksTitle}>Business Perks.</h2>
        <div style={styles.perksGrid}>
          {perks.map((p, i) => (
            <div
              key={i}
              style={{
                ...styles.perkCell,
                background: hovered === i ? "#f7f7f5" : "#fff",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {p.dark ? (
                <div style={styles.perkIconBox}>{p.icon}</div>
              ) : (
                <div style={styles.perkIconBoxOutline}>{p.icon}</div>
              )}
              <span style={styles.perkLabel}>{p.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* READY TO SCALE */}
      <section style={styles.ctaSection}>
        <h2 style={{ ...styles.ctaTitle, fontSize: 60 }}>Ready to Scale?</h2>
        <div style={styles.ctaButtons}>
          <button style={styles.ctaBtnSolid}>Open Business Account</button>
          <button style={styles.ctaBtnOutline}>Talk to an Expert</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerLogo}>Mono Bank.</div>
        <ul style={styles.footerLinks}>
          {["Privacy Policy", "Terms of Service", "Security", "Help Center"].map(
            (l) => (
              <li key={l}>
                <a style={styles.footerLink} href="#">
                  {l}
                </a>
              </li>
            )
          )}
        </ul>
        <span style={styles.footerCopy}>© 2024 Mono Bank. All rights reserved.</span>
      </footer>
    </div>
  );
}
