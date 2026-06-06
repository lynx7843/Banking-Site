import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const styles = {
  pageWrapper: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#fff",
    overflowY: "auto",
    overflowX: "hidden",
  },
  root: {
    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
    color: "#111",
    background: "#fff",
    margin: "0 auto",
    padding: 0,
    maxWidth: "1440px", 
    minHeight: "100%",
    position: "relative",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    minHeight: 520,
    position: "relative",
    borderBottom: "1px solid #e5e5e5",
  },
  heroLeft: {
    padding: "100px 60px",
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
    maxWidth: 340,
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
    cursor: "pointer",
    border: "none",
    width: "fit-content",
  },
  heroBalanceTitle: {
    fontSize: 24, 
    fontWeight: 800,
    color: "#111",
    marginTop: 24,
    letterSpacing: "-1px",
    lineHeight: 1,
  },
  heroBalanceVal: {
    fontSize: 36, 
    fontWeight: 700, 
    color: "#333", 
    marginTop: 8,
  },
  heroCTAGroup: {
    display: "flex",
    gap: 16,
  },
  heroBtnOutlineDark: {
    padding: "14px 28px",
    background: "#fff",
    color: "#111",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "1.5px",
    cursor: "pointer",
    border: "1px solid #111",
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
  featuresHeader: {
    textAlign: "center",
    padding: "80px 0 40px 0",
  },
  featuresTitle: {
    fontSize: 32,
    fontWeight: 800,
    letterSpacing: "-1px",
    margin: "0 0 10px 0",
  },
  featuresSub: {
    fontSize: 14,
    color: "#555",
    margin: 0,
  },
  featuresRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    padding: "0 60px 80px 60px",
  },
  featureCard: {
    padding: "40px 36px",
    border: "2px solid #111",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 16,
  },
  featureCardDark: {
    padding: "40px 36px",
    border: "2px solid #111",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
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
    marginBottom: 8,
  },
  featureTitleCentered: {
    fontSize: 18,
    fontWeight: 800,
    letterSpacing: "-0.3px",
    margin: 0,
  },
  featureBodyCentered: {
    fontSize: 13,
    lineHeight: 1.65,
    color: "#555",
    margin: 0,
  },
  featureBodyDarkCentered: {
    fontSize: 13,
    lineHeight: 1.65,
    color: "#aaa",
    margin: 0,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 800,
    letterSpacing: "-1px",
    margin: "0 0 48px",
  },
  perks: {
    padding: "80px 60px",
    borderTop: "1px solid #e5e5e5",
    textAlign: "center",
  },
  perksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    borderTop: "1px solid #e5e5e5",
    borderLeft: "1px solid #e5e5e5",
    marginTop: 40,
  },
  perkCell: {
    padding: "40px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    borderRight: "1px solid #e5e5e5",
    borderBottom: "1px solid #e5e5e5",
    cursor: "pointer",
    transition: "background 0.2s ease",
  },
  perkIconBox: {
    width: 48,
    height: 48,
    background: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  perkIconBoxOutline: {
    width: 48,
    height: 48,
    border: "2px solid #111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  perkLabel: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#111",
    textAlign: "center",
  },
  ctaSection: {
    padding: "100px 60px",
    textAlign: "center",
    background: "#111",
    color: "#fff",
  },
  ctaTitle: {
    fontSize: 48,
    fontWeight: 800,
    letterSpacing: "-1.5px",
    margin: "0 0 40px",
  },
  ctaButtons: {
    display: "flex",
    gap: 16,
    justifyContent: "center",
  },
  ctaBtnSolid: {
    padding: "16px 36px",
    background: "#fff",
    color: "#111",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "1px",
    border: "none",
    cursor: "pointer",
  },
  ctaBtnOutline: {
    padding: "16px 36px",
    background: "transparent",
    color: "#fff",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "1px",
    border: "1px solid #fff",
    cursor: "pointer",
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
      <polygon points="80,0 320,0 420,180 180,180" fill="#1c1c1c" />
      <polygon points="320,0 500,0 500,220 420,180" fill="#2a2a2a" />
      <polygon points="180,180 420,180 500,400 260,400" fill="#222" />
      <polygon points="0,0 80,0 180,180 0,260" fill="#181818" />
      <polygon points="0,260 180,180 260,400 80,520 0,520" fill="#1a1a1a" />
      <polygon points="260,400 500,400 500,520 60,520" fill="#202020" />
      <line x1="80" y1="0" x2="180" y2="180" stroke="#333" strokeWidth="0.5" />
      <line x1="320" y1="0" x2="420" y2="180" stroke="#333" strokeWidth="0.5" />
      <line x1="180" y1="180" x2="420" y2="180" stroke="#2a2a2a" strokeWidth="0.5" />
      <line x1="180" y1="180" x2="260" y2="400" stroke="#2a2a2a" strokeWidth="0.5" />
      <line x1="420" y1="180" x2="500" y2="400" stroke="#2a2a2a" strokeWidth="0.5" />
      <line x1="260" y1="400" x2="500" y2="400" stroke="#2a2a2a" strokeWidth="0.5" />
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

export default function MonoBank({ setPage, user }) {
  const [hovered, setHovered] = useState(null);
  
  // States to manage business account data visibility
  const [balance, setBalance] = useState(null);
  const [actualBusinessBalance, setActualBusinessBalance] = useState(0);
  const [hasBusinessAccount, setHasBusinessAccount] = useState(false); // Controls rendering of balance/buttons

  useEffect(() => {
    if (user && user.id) {
      fetch(`http://localhost:8080/api/accounts/customer/${user.id}`)
        .then(res => res.json())
        .then(data => { 
          if (!Array.isArray(data)) {
            console.error("Fetched data is not an array:", data);
            setBalance(null); 
            setActualBusinessBalance(0);
            setHasBusinessAccount(false);
            return;
          }
          // Find if the user has a business account
          const businessAcc = data.find(acc => acc.accountType.toLowerCase().includes('business'));
          
          if (businessAcc && businessAcc.currentBalance !== undefined) {
            setBalance(businessAcc.currentBalance);
            setActualBusinessBalance(businessAcc.currentBalance);
            setHasBusinessAccount(true); // Account found, enable buttons and balance
          } else {
            setHasBusinessAccount(false); // Account not found, hide UI elements
          }
        })
        .catch(err => console.error("Error fetching account data:", err));
    }
  }, [user]);

  const perks = [
    { label: "Tax Credits", icon: <IconPercent />, dark: true },
    { label: "Travel Rewards", icon: <IconPlane />, dark: true },
    { label: "24/7 Concierge", icon: <IconConcierge />, dark: true },
    { label: "Networking", icon: <IconNetwork />, dark: true },
    { label: "Legal Shield", icon: <IconShield />, dark: true },
    { label: "SaaS Credits", icon: <IconCloud color="#111" />, dark: false },
  ];

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.root}>
        {/* Google Font */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { margin: 0; background: #fff; }
          button:hover { opacity: 0.85; }
        `}</style>

        {/* NAV */}
        <Navbar setPage={setPage} />

        {/* HERO */}
        <section style={styles.hero}>
          <div style={styles.heroLeft}>
            <h1 style={styles.heroTitle}>
              Banking Built<br />for Business.
            </h1>
            
            <p style={styles.heroSub}>
              {balance !== null 
                ? `Active Business Balance: Rs. ${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}` 
                : 'Uncompromising financial infrastructure for modern enterprises. Zero fluff, total control.'}
            </p>
            
            {/* Conditional Rendering: Only show if the user has a Business account */}
            {hasBusinessAccount && (
              <>
                <div style={styles.heroBalanceTitle}>YOUR CURRENT<br />ACCOUNT BALANCE</div>
                <div style={styles.heroBalanceVal}>
                  Rs. {actualBusinessBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>

                <div style={{...styles.heroCTAGroup, marginTop: '24px'}}>
                  <button style={styles.heroBtnOutlineDark} onClick={() => setPage('payment')}>Payment</button>
                  <button style={styles.heroCTA} onClick={() => setPage('deposit')}>Deposit</button>
                </div>
              </>
            )}

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
        <div style={styles.featuresHeader}>
            <h2 style={styles.featuresTitle}>Designed for Efficiency.</h2>
            <p style={styles.featuresSub}>Everything you need to keep your business in the black.</p>
        </div>
        <div style={styles.featuresRow}>
          {/* Global Spending */}
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>
              <IconWallet color="#111" />
            </div>
            <p style={styles.featureTitleCentered}>Global Spending</p>
            <p style={styles.featureBodyCentered}>
              Use your monochrome card anywhere contactless payments are accepted
              around the world.
            </p>
          </div>
          {/* Cash Flow Mastery */}
          <div style={styles.featureCardDark}>
            <div style={styles.featureIcon}>
              <IconSync color="#fff" />
            </div>
            <p style={{ ...styles.featureTitleCentered, color: "#fff" }}>
              Cash Flow Mastery
            </p>
            <p style={styles.featureBodyDarkCentered}>
              Real-time liquidity tracking with predictive forecasting. Every cent
              accounted for, every move calculated.
            </p>
          </div>
          {/* Multi-User */}
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>
              <IconUsers color="#111" />
            </div>
            <p style={styles.featureTitleCentered}>Multi–User Access</p>
            <p style={styles.featureBodyCentered}>
              Delegate with precision. Granular permission levels for your entire
              finance team and accountants.
            </p>
          </div>
        </div>

        {/* BUSINESS PERKS */}
        <section style={styles.perks}>
          <h2 style={styles.sectionTitle}>Business Perks.</h2>
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
          <h2 style={styles.ctaTitle}>Ready to Scale?</h2>
          <div style={styles.ctaButtons}>
            <button
              style={styles.ctaBtnSolid}
              onClick={() => setPage('register')}
            >Open Business Account</button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="app-footer">
            <p>© 2026 Mono Bank. Simple. Static. Secure.</p>
        </footer>
      </div>
    </div>
  );
}