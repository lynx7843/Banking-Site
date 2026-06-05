import { useState, useEffect } from "react";
import Navbar from "./Navbar";

/* ─── tiny sparkline bar chart ─── */
function MiniBar({ trend }) {
  const bars = [0.3, 0.5, 0.4, 0.7, 0.6, 0.8, 0.65, 0.9, 0.75, 1.0];
  const coloured = trend === "up" ? "#111" : trend === "down" ? "#111" : "#555";
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 20, marginTop: 10 }}>
      {bars.map((h, i) => (
        <div key={i} style={{ width: 6, height: `${h * 100}%`, background: i === bars.length - 1 ? coloured : "#ddd" }} />
      ))}
    </div>
  );
}

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

const CURRENCIES = [
  { pair: "USD / EUR", rate: 0.9234, trend: "up"   },
  { pair: "GBP / USD", rate: 1.2671, trend: "flat" },
  { pair: "JPY / USD", rate: 0.0067, trend: "down" },
];

function TrendIcon({ trend }) {
  if (trend === "up")
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
  if (trend === "down")
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>;
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>;
}

export default function MonoBankGlobal({ setPage }) {
  const [seconds, setSeconds] = useState(2);
  useEffect(() => {
    const t = setInterval(() => setSeconds(s => (s >= 59 ? 1 : s + 1)), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .mbg-root { font-family: 'DM Sans', sans-serif; color: #111; background: #fff; }
        .mbg-screen { position: relative; width: 100%; padding-bottom: 56.25%; overflow: hidden; }
        .mbg-inner { position: absolute; inset: 0; overflow-y: auto; overflow-x: hidden; background: #fff; }
        .mbg-inner::-webkit-scrollbar { width: 5px; }
        .mbg-inner::-webkit-scrollbar-thumb { background: #bbb; }

        /* NAV */
        .mbg-nav { display:flex; align-items:center; justify-content:space-between;
          padding:0 44px; height:44px; border-bottom:1px solid #e5e5e5;
          background:#fff; position:sticky; top:0; z-index:100; }
        .mbg-logo { font-weight:800; font-size:16px; letter-spacing:-.5px; text-transform:uppercase; }
        .mbg-nav-links { display:flex; gap:28px; list-style:none; }
        .mbg-nav-link { font-size:11px; font-weight:500; letter-spacing:.8px; text-transform:uppercase;
          color:#888; text-decoration:none; cursor:pointer; }
        .mbg-nav-link.active { color:#111; font-weight:700;
          text-decoration:underline; text-underline-offset:4px; }
        .mbg-nav-right { display:flex; align-items:center; gap:8px; }
        .mbg-btn-ghost { background:none; border:none; font-family:inherit; font-size:11px;
          font-weight:700; letter-spacing:.8px; text-transform:uppercase; color:#111; padding:6px 14px; cursor:pointer; }
        .mbg-btn-nav-solid { background:#111; border:1.5px solid #111; color:#fff; font-family:inherit;
          font-size:10px; font-weight:800; letter-spacing:.8px; text-transform:uppercase; padding:7px 16px; cursor:pointer; }

        /* HERO */
        .mbg-hero { display:grid; grid-template-columns:1fr 1fr; border-bottom:1px solid #e5e5e5; }
        .mbg-hero-left { padding:48px 48px; display:flex; flex-direction:column; justify-content:center; gap:18px; }
        .mbg-badge { display:inline-block; font-size:9px; font-weight:700; letter-spacing:2px;
          text-transform:uppercase; color:#888; width:fit-content; }
        .mbg-hero-title { font-size:clamp(28px,3.8vw,52px); font-weight:800; line-height:1.04;
          letter-spacing:-1.5px; color:#111; }
        .mbg-hero-sub { font-size:12px; line-height:1.7; color:#555; max-width:280px; }
        .mbg-hero-btns { display:flex; gap:10px; flex-wrap:wrap; }
        .mbg-btn-solid { padding:11px 22px; background:#111; color:#fff; border:1.5px solid #111;
          font-family:inherit; font-size:10px; font-weight:800; letter-spacing:1.5px;
          text-transform:uppercase; cursor:pointer; }
        .mbg-btn-outline { padding:11px 22px; background:#fff; color:#111; border:1.5px solid #111;
          font-family:inherit; font-size:10px; font-weight:800; letter-spacing:1.5px;
          text-transform:uppercase; cursor:pointer; }
        .mbg-hero-right { background:#ebebeb; display:flex; align-items:center;
          justify-content:center; padding:40px 32px; min-height:320px; border-left:1px solid #ddd; }

        /* ZERO PERCENT STRIP */
        .mbg-zero { display:grid; grid-template-columns:1fr 1fr 1fr; border-top:1px solid #e5e5e5; }
        .mbg-zero-left { background:#111; color:#fff; padding:36px 32px;
          display:flex; flex-direction:column; justify-content:center; gap:14px;
          border-right:1px solid #2a2a2a; }
        .mbg-zero-title { font-size:22px; font-weight:800; letter-spacing:-0.5px;
          text-transform:uppercase; line-height:1.1; }
        .mbg-zero-sub { font-size:11px; line-height:1.7; color:#888; max-width:220px; }
        .mbg-stat-card { padding:28px 28px; border-right:1px solid #e5e5e5;
          display:flex; flex-direction:column; gap:10px; }
        .mbg-stat-card:last-child { border-right:none; }
        .mbg-stat-icon { width:36px; height:36px; border:1.5px solid #ddd;
          display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .mbg-stat-label { font-size:10px; font-weight:700; letter-spacing:1.5px;
          text-transform:uppercase; color:#111; }
        .mbg-stat-big { font-size:36px; font-weight:800; letter-spacing:-1px; color:#111; }
        .mbg-stat-caption { font-size:8.5px; font-weight:700; letter-spacing:1px;
          text-transform:uppercase; color:#aaa; border-top:1px solid #f0f0f0;
          padding-top:10px; margin-top:4px; }

        /* LIVE MARKET DATA */
        .mbg-market { padding:20px 44px; border-top:1px solid #e5e5e5;
          display:flex; align-items:center; justify-content:space-between; }
        .mbg-market-title { font-size:15px; font-weight:800; letter-spacing:-0.3px; text-transform:uppercase; }
        .mbg-market-updated { font-size:8.5px; font-weight:600; letter-spacing:1px;
          text-transform:uppercase; color:#aaa; margin-top:3px; }
        .mbg-btn-terminal { padding:8px 16px; background:#111; color:#fff; border:none;
          font-family:inherit; font-size:9px; font-weight:800; letter-spacing:1.5px;
          text-transform:uppercase; cursor:pointer; }
        .mbg-rates { display:grid; grid-template-columns:repeat(3,1fr);
          border:1px solid #e5e5e5; margin:0 44px 0; }
        .mbg-rate-card { padding:22px 28px; border-right:1px solid #e5e5e5; }
        .mbg-rate-card:last-child { border-right:none; }
        .mbg-rate-pair { display:flex; justify-content:space-between; align-items:center;
          font-size:9px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#aaa; margin-bottom:6px; }
        .mbg-rate-val { font-size:32px; font-weight:800; letter-spacing:-1px; color:#111; }

        /* GLOBAL CASH ACCESS */
        .mbg-cash { display:grid; grid-template-columns:1fr 1fr;
          margin:32px 44px; border:1px solid #e5e5e5; }
        .mbg-cash-left { padding:36px 36px; display:flex; flex-direction:column; gap:14px;
          border-right:1px solid #e5e5e5; }
        .mbg-cash-icon { width:36px; height:36px; border:1.5px solid #ddd;
          display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .mbg-cash-title { font-size:18px; font-weight:800; letter-spacing:-0.3px; text-transform:uppercase; }
        .mbg-cash-body { font-size:11.5px; line-height:1.75; color:#555; max-width:300px; }
        .mbg-check-list { display:flex; flex-direction:column; gap:0; margin-top:6px; }
        .mbg-check-item { display:flex; align-items:center; gap:10px; padding:9px 0;
          border-bottom:1px solid #f0f0f0; font-size:9px; font-weight:700;
          letter-spacing:1.2px; text-transform:uppercase; color:#555; }
        .mbg-check-item:last-child { border-bottom:none; }
        .mbg-cash-right { position:relative; min-height:300px; overflow:hidden; background:#c0c0c0; }

        /* JOIN */
        .mbg-join { position:relative; background:#111; padding:72px 48px;
          text-align:center; overflow:hidden; }
        .mbg-join-title { font-size:clamp(28px,4vw,52px); font-weight:800; letter-spacing:-2px;
          text-transform:uppercase; color:#fff; margin-bottom:16px; }
        .mbg-join-sub { font-size:12px; line-height:1.75; color:#888;
          max-width:380px; margin:0 auto 32px; }
        .mbg-btn-join { padding:14px 36px; background:transparent; color:#fff;
          border:1.5px solid #fff; font-family:inherit; font-size:10px; font-weight:800;
          letter-spacing:2px; text-transform:uppercase; cursor:pointer; }
        .mbg-btn-join:hover { background:rgba(255,255,255,.08); }

        /* FOOTER */
        .mbg-footer { border-top:1px solid #e5e5e5; padding:20px 44px;
          display:flex; align-items:center; justify-content:space-between; }
        .mbg-footer-logo { font-weight:800; font-size:14px; letter-spacing:-.5px; text-transform:uppercase; }
        .mbg-footer-links { display:flex; gap:20px; list-style:none; }
        .mbg-footer-link { font-size:9px; font-weight:600; letter-spacing:1px;
          text-transform:uppercase; color:#999; text-decoration:none; cursor:pointer; }
        .mbg-footer-copy { font-size:9px; color:#bbb; letter-spacing:.5px; text-transform:uppercase; }
      `}</style>

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
                  rates, zero hidden fees, and absolute security across 180+ countries.
                </p>
                <div className="mbg-hero-btns">
                  <button className="mbg-btn-solid">Get Started</button>
                  <button className="mbg-btn-outline">View Rates</button>
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

            {/* ── LIVE MARKET DATA ── */}
            <div style={{ borderTop: "1px solid #e5e5e5" }}>
              <div className="mbg-market">
                <div>
                  <div className="mbg-market-title">Live Market Data</div>
                  <div className="mbg-market-updated">Updated {seconds} second{seconds !== 1 ? "s" : ""} ago</div>
                </div>
                <button className="mbg-btn-terminal">Open Terminal</button>
              </div>
              <div className="mbg-rates">
                {CURRENCIES.map(({ pair, rate, trend }) => (
                  <div className="mbg-rate-card" key={pair}>
                    <div className="mbg-rate-pair">
                      <span>{pair}</span>
                      <TrendIcon trend={trend} />
                    </div>
                    <div className="mbg-rate-val">{rate.toFixed(4)}</div>
                    <MiniBar trend={trend} />
                  </div>
                ))}
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
                  you for domestic or international withdrawals up to $1,000 monthly.
                </p>
                <div className="mbg-check-list">
                  {[
                    "Free withdrawals up to $1,000/mo",
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
                <button className="mbg-btn-join">Open Your Account</button>
              </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="mbg-footer">
              <div className="mbg-footer-logo">Mono Bank.</div>
              <ul className="mbg-footer-links">
                {["Privacy Policy", "Terms of Service", "Security", "Help Center"].map(l => (
                  <li key={l}><a className="mbg-footer-link" href="#">{l}</a></li>
                ))}
              </ul>
              <span className="mbg-footer-copy">© 2024 Mono Bank. All rights reserved.</span>
            </footer>

          </div>
        </div>
      </div>
    </>
  );
}