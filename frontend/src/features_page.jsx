import Navbar from "./Navbar";
import "./App.css";

/* ─── credit card SVG art ─── */
function CardArt() {
  return (
    <svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg"
      style={{ width: "84%", maxWidth: 380, filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.32))" }}>
      {/* Card body */}
      <rect x="0" y="30" width="420" height="230" rx="16" fill="#1a1a1a" />
      <rect x="0" y="30" width="420" height="230" rx="16" fill="url(#cg)" />
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </linearGradient>
      </defs>
      {/* Chip */}
      <rect x="32" y="108" width="44" height="34" rx="5" fill="#b8960c" opacity=".85" />
      <line x1="32" y1="121" x2="76" y2="121" stroke="#9a7d0a" strokeWidth="1" />
      <line x1="32" y1="133" x2="76" y2="133" stroke="#9a7d0a" strokeWidth="1" />
      <line x1="54" y1="108" x2="54" y2="142" stroke="#9a7d0a" strokeWidth="1" />
      {/* Card number */}
      <text x="32" y="175" fontFamily="monospace" fontSize="15" fill="#fff" opacity=".7" letterSpacing="2">1338  8670  8088  8688</text>
      {/* Name & expiry */}
      <text x="32" y="220" fontFamily="monospace" fontSize="11" fill="#fff" opacity=".5" letterSpacing="1">CARDMEMBER</text>
      <text x="320" y="220" fontFamily="monospace" fontSize="11" fill="#fff" opacity=".5">12/28</text>
      {/* Network logo circles */}
      <circle cx="368" cy="110" r="22" fill="#cc0000" opacity=".8" />
      <circle cx="392" cy="110" r="22" fill="#ff6600" opacity=".7" />
    </svg>
  );
}

/* ─── ATM art (greyscale scene) ─── */
function AtmArt() {
  return (
    <svg viewBox="0 0 400 460" xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="460" fill="#c8c8c8" />
      {/* Back wall tiles */}
      {[0,1,2,3,4].map(col => [0,1,2,3,4,5].map(row => (
        <rect key={`${col}-${row}`} x={col*80} y={row*76} width="79" height="75"
          fill={`hsl(0,0%,${74 + (col+row)%3*3}%)`} stroke="#bbb" strokeWidth=".5" />
      )))}
      {/* Floor */}
      <rect x="0" y="340" width="400" height="120" fill="#a0a0a0" />
      {/* ATM machine body */}
      <rect x="120" y="140" width="160" height="210" rx="6" fill="#2a2a2a" />
      <rect x="126" y="148" width="148" height="100" rx="3" fill="#1a1a1a" />
      {/* Screen glow */}
      <rect x="130" y="152" width="140" height="92" rx="2" fill="#3a3a3a" />
      <text x="200" y="204" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#7cfc00" opacity=".7">WELCOME</text>
      {/* Card slot */}
      <rect x="152" y="258" width="96" height="8" rx="2" fill="#1a1a1a" />
      {/* Keypad */}
      <rect x="148" y="276" width="104" height="60" rx="3" fill="#222" />
      {[0,1,2].map(r => [0,1,2].map(c => (
        <rect key={`k${r}${c}`} x={156+c*32} y={282+r*18} width="24" height="12" rx="2" fill="#333" />
      )))}
      {/* Cash slot */}
      <rect x="152" y="342" width="96" height="6" rx="1" fill="#1a1a1a" />
      {/* Shadow */}
      <ellipse cx="200" cy="355" rx="80" ry="8" fill="rgba(0,0,0,0.25)" />
      {/* Ceiling light beam */}
      <polygon points="170,0 230,0 280,140 120,140" fill="rgba(255,255,255,0.12)" />
    </svg>
  );
}

/* ─── World map dots background ─── */
function WorldMapBg() {
  const dots = [];
  for (let x = 0; x < 40; x++) {
    for (let y = 0; y < 20; y++) {
      if (Math.random() > 0.55) {
        dots.push({ x: x * 2.5 + Math.random() * 1.5, y: y * 5 + Math.random() * 3 });
      }
    }
  }
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }}>
      {dots.map((d, i) => <circle key={i} cx={d.x} cy={d.y} r="0.5" fill="#fff" />)}
    </svg>
  );
}

export default function MonoBankGlobal({ setPage }) {
  return (
    <>
      <div className="mbg-root">
        <div className="mbg-screen">
          <div className="mbg-inner">

            {/* ── NAV ── */}
            <Navbar setPage={setPage} />

            {/* ── HERO ── */}
            <section className="mbg-hero">
              <div className="mbg-hero-left">
                <span className="mbg-badge">Global Spending</span>
                <h1 className="mbg-hero-title">Spend Anywhere.<br />Go Everywhere.</h1>
                <p className="mbg-hero-sub">
                  The monochrome card is engineered for the borderless traveler. Real-time
                  rates, zero hidden fees, and absolute security across country.
                </p>
                <div className="mbg-hero-btns">
                  <button className="mbg-btn-solid" onClick={() => setPage('login')}>Get Started</button>
                </div>
              </div>
              <div className="mbg-hero-right">
                <CardArt />
              </div>
            </section>

            {/* ── ZERO PERCENT STRIP ── */}
            <div className="mbg-zero">
              <div className="mbg-zero-left">
                <p className="mbg-zero-title">Zero Percent.<br />Zero Hidden.</p>
                <p className="mbg-zero-sub">
                  We've eliminated the friction of international travel. Pay in the local
                  currency at the interbank rate without the traditional banking markup.
                </p>
              </div>

              {/* FX Fees card */}
              <div className="mbg-stat-card">
                <div className="mbg-stat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>
                <div className="mbg-stat-label">FX Fees</div>
                <div className="mbg-stat-big">0.0%</div>
                <div className="mbg-stat-caption">Interbank exchange rates applied instantly.</div>
              </div>

              {/* Network card */}
              <div className="mbg-stat-card">
                <div className="mbg-stat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="mbg-stat-label">Network</div>
                <div className="mbg-stat-big">200M+</div>
                <div className="mbg-stat-caption">Merchants worldwide via global card systems.</div>
              </div>
            </div>

            {/* ── GLOBAL CASH ACCESS ── */}
            <div className="mbg-cash">
              <div className="mbg-cash-left">
                <div className="mbg-cash-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="2" y1="9" x2="22" y2="9" />
                    <line x1="2" y1="15" x2="22" y2="15" />
                  </svg>
                </div>
                <p className="mbg-cash-title">Global Cash Access.</p>
                <p className="mbg-cash-body">
                  Withdraw cash from any ATM displaying the network logo. We don't charge
                  you for domestic or international withdrawals up to Rs.10,000 monthly.
                </p>
                <div className="mbg-check-list">
                  {[
                    "Free withdrawals up to Rs.1,000/mo",
                    "ATM locator via mobile app",
                    "Instant freeze if lost abroad",
                  ].map(item => (
                    <div className="mbg-check-item" key={item}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                        stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mbg-cash-right">
                <AtmArt />
              </div>
            </div>

            {/* ── JOIN THE MOVEMENT ── */}
            <section className="mbg-join">
              <WorldMapBg />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 className="mbg-join-title">Join the Movement.</h2>
                <p className="mbg-join-sub">
                  Join over 5 million people moving money around the world without the
                  typical bank hassle.
                </p>
                <button className="mbg-btn-join" onClick={() => setPage('register')}>Open Your Account</button>
              </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="app-footer">
              <p>© 2026 Mono Bank. Simple. Static. Secure.</p>
            </footer>

          </div>
        </div>
      </div>
    </>
  );
}