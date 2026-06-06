import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./App.css";

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
    <div className="biz-page-wrapper">
      <div className="biz-root">
        {/* NAV */}
        <Navbar setPage={setPage} />

        {/* HERO */}
        <section className="biz-hero">
          <div className="biz-hero-left">
            <h1 className="biz-hero-title">
              Banking Built<br />for Business.
            </h1>
            
            <p className="biz-hero-sub">
              {balance !== null 
                ? `Active Business Balance: Rs. ${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}` 
                : 'Uncompromising financial infrastructure for modern enterprises. Zero fluff, total control.'}
            </p>
            
            {/* Conditional Rendering: Only show if the user has a Business account */}
            {hasBusinessAccount && (
              <>
                <div className="biz-hero-balance-title">YOUR CURRENT<br />ACCOUNT BALANCE</div>
                <div className="biz-hero-balance-val">
                  Rs. {actualBusinessBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>

                <div className="biz-hero-cta-group">
                  <button className="biz-hero-btn-outline-dark" onClick={() => setPage('payment')}>Payment</button>
                  <button className="biz-hero-cta" onClick={() => setPage('deposit')}>Deposit</button>
                </div>
              </>
            )}

          </div>
          <div className="biz-hero-right">
            <HeroGeometry />
            <div className="biz-status-badge">
              <span className="biz-status-dot" />
              System Status: Optimal
            </div>
          </div>
        </section>

        {/* FEATURES ROW */}
        <div className="biz-features-header">
            <h2 className="biz-features-title">Designed for Efficiency.</h2>
            <p className="biz-features-sub">Everything you need to keep your business in the black.</p>
        </div>
        <div className="biz-features-row">
          {/* Global Spending */}
          <div className="biz-feature-card">
            <div className="biz-feature-icon">
              <IconWallet color="#111" />
            </div>
            <p className="biz-feature-title-centered">Global Spending</p>
            <p className="biz-feature-body-centered">
              Use your monochrome card anywhere contactless payments are accepted
              around the world.
            </p>
          </div>
          {/* Cash Flow Mastery */}
          <div className="biz-feature-card-dark">
            <div className="biz-feature-icon">
              <IconSync color="#fff" />
            </div>
            <p className="biz-feature-title-centered" style={{ color: "#fff" }}>
              Cash Flow Mastery
            </p>
            <p className="biz-feature-body-dark-centered">
              Real-time liquidity tracking with predictive forecasting. Every cent
              accounted for, every move calculated.
            </p>
          </div>
          {/* Multi-User */}
          <div className="biz-feature-card">
            <div className="biz-feature-icon">
              <IconUsers color="#111" />
            </div>
            <p className="biz-feature-title-centered">Multi–User Access</p>
            <p className="biz-feature-body-centered">
              Delegate with precision. Granular permission levels for your entire
              finance team and accountants.
            </p>
          </div>
        </div>

        {/* BUSINESS PERKS */}
        <section className="biz-perks">
          <h2 className="biz-section-title">Business Perks.</h2>
          <div className="biz-perks-grid">
            {perks.map((p, i) => (
              <div
                key={i}
                className="biz-perk-cell"
              >
                {p.dark ? (
                  <div className="biz-perk-icon-box">{p.icon}</div>
                ) : (
                  <div className="biz-perk-icon-box-outline">{p.icon}</div>
                )}
                <span className="biz-perk-label">{p.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* READY TO SCALE */}
        <section className="biz-cta-section">
          <h2 className="biz-cta-title">Ready to Scale?</h2>
          <div className="biz-cta-buttons">
            <button
              className="biz-cta-btn-solid"
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