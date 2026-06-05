import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const APY = 0.0485;
const MONTHS = 60;

function calcResults(deposit, monthly) {
  const r = APY / 12;
  const growth = Math.pow(1 + r, MONTHS);
  const fv = deposit * growth + monthly * (growth - 1) / r;
  const interest = Math.max(0, fv - deposit - monthly * MONTHS);
  return { fv, interest };
}

function fmt(n) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function OrbArt() {
  return (
    <svg
      viewBox="0 0 520 380"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="520" height="380" fill="#080808" />
      {/* Glow rings */}
      <circle cx="260" cy="130" r="180" fill="#1a1a1a" opacity=".5" />
      <circle cx="260" cy="130" r="120" fill="#2e2e2e" opacity=".45" />
      <circle cx="260" cy="130" r="80"  fill="#555"   opacity=".35" />
      <circle cx="260" cy="130" r="52"  fill="#909090" opacity=".35" />
      <circle cx="260" cy="130" r="32"  fill="#c8c8c8" opacity=".6"  />
      <circle cx="260" cy="130" r="18"  fill="#e8e8e8" opacity=".9"  />
      <circle cx="260" cy="130" r="8"   fill="#ffffff"               />
      {/* Tower discs — base to top */}
      <rect x="194" y="295" width="132" height="20" fill="#0d0d0d" />
      <ellipse cx="260" cy="295" rx="66" ry="10" fill="#161616" stroke="#222" strokeWidth="0.5" />
      <rect x="202" y="277" width="116" height="19" fill="#0d0d0d" />
      <ellipse cx="260" cy="277" rx="58" ry="9"  fill="#191919" stroke="#252525" strokeWidth="0.5" />
      <rect x="211" y="260" width="98"  height="18" fill="#0d0d0d" />
      <ellipse cx="260" cy="260" rx="49" ry="8"  fill="#1c1c1c" stroke="#272727" strokeWidth="0.5" />
      <rect x="220" y="244" width="80"  height="17" fill="#0d0d0d" />
      <ellipse cx="260" cy="244" rx="40" ry="7"  fill="#1e1e1e" stroke="#282828" strokeWidth="0.5" />
      <rect x="228" y="230" width="64"  height="15" fill="#0d0d0d" />
      <ellipse cx="260" cy="230" rx="32" ry="6"  fill="#202020" stroke="#2a2a2a" strokeWidth="0.5" />
      <rect x="236" y="217" width="48"  height="14" fill="#0d0d0d" />
      <ellipse cx="260" cy="217" rx="24" ry="5"  fill="#222"    stroke="#2d2d2d" strokeWidth="0.5" />
      <rect x="243" y="206" width="34"  height="12" fill="#0d0d0d" />
      <ellipse cx="260" cy="206" rx="17" ry="4.5" fill="#242424" stroke="#2f2f2f" strokeWidth="0.5" />
      <rect x="249" y="196" width="22"  height="11" fill="#0d0d0d" />
      <ellipse cx="260" cy="196" rx="11" ry="3.5" fill="#262626" stroke="#313131" strokeWidth="0.5" />
      <rect x="254" y="188" width="12"  height="9"  fill="#0d0d0d" />
      <ellipse cx="260" cy="188" rx="6"  ry="2.5" fill="#282828" stroke="#333"   strokeWidth="0.5" />
      <rect x="257" y="181" width="6"   height="8"  fill="#0d0d0d" />
      <ellipse cx="260" cy="181" rx="3"  ry="2"   fill="#2a2a2a" />
      {/* Spire */}
      <line x1="260" y1="177" x2="260" y2="166" stroke="#363636" strokeWidth="1.5" />
      <circle cx="260" cy="164" r="2.5" fill="#363636" />
      {/* Floor */}
      <rect x="0" y="302" width="520" height="78" fill="#060606" />
    </svg>
  );
}

export default function MonoBankFeatures({ setPage, user }) {
  const [deposit, setDeposit] = useState(10000);
  const [monthly, setMonthly] = useState(500);
  
  const [actualBalance, setActualBalance] = useState(0); 
  
  // NEW: State to track if the user has a personal account
  const [hasPersonalAccount, setHasPersonalAccount] = useState(false);
  
  useEffect(() => {
    if (user && user.id) {
      fetch(`http://localhost:8080/api/accounts/customer/${user.id}`)
        .then(res => res.json())
        .then(data => {
          if (!Array.isArray(data)) {
            console.error("Fetched data is not an array:", data);
            setHasPersonalAccount(false);
            return;
          }
          // Look for an account type containing "Saving" or "Personal"
          const personalAcc = data.find(acc => 
            acc.accountType.toLowerCase().includes('saving') || 
            acc.accountType.toLowerCase().includes('personal')
          );
          
          if (personalAcc && personalAcc.currentBalance !== undefined) {
            setDeposit(personalAcc.currentBalance); // Update slider with live balance!
            setActualBalance(personalAcc.currentBalance);
            setHasPersonalAccount(true); // Enable balance & buttons
          } else {
            setHasPersonalAccount(false); // Hide balance & buttons
          }
        })
        .catch(err => console.error("Error fetching account data:", err));
    }
  }, [user]);

  const { fv, interest } = calcResults(deposit, monthly);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .mb2-root { font-family: 'DM Sans', sans-serif; color: #111; background: #fff; }
        .mb2-screen { position: relative; width: 100%; padding-bottom: 56.25%; overflow: hidden; }
        .mb2-inner { position: absolute; inset: 0; overflow-y: auto; overflow-x: hidden; background: #fff; }
        .mb2-inner::-webkit-scrollbar { width: 5px; }
        .mb2-inner::-webkit-scrollbar-thumb { background: #bbb; }
        .mb2-inner::-moz-scrollbar { width: 5px; }

        /* Slider reset */
        .mb2-slider { -webkit-appearance: none; appearance: none; width: 100%;
          height: 2px; background: #ddd; outline: none; cursor: pointer; display: block; margin: 0; }
        .mb2-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none;
          width: 13px; height: 13px; background: #111; border-radius: 0; cursor: pointer; }
        .mb2-slider::-moz-range-thumb { width: 13px; height: 13px; background: #111;
          border-radius: 0; border: none; cursor: pointer; }

        /* Nav */
        .mb2-nav { display: flex; align-items: center; justify-content: space-between;
          padding: 0 44px; height: 44px; border-bottom: 1px solid #e5e5e5;
          background: #fff; position: sticky; top: 0; z-index: 100; flex-shrink: 0; }
        .mb2-nav-logo { font-weight: 800; font-size: 16px; letter-spacing: -0.5px; text-transform: uppercase; }
        .mb2-nav-links { display: flex; gap: 28px; list-style: none; }
        .mb2-nav-link { font-size: 11px; font-weight: 500; letter-spacing: 0.8px; text-transform: uppercase;
          color: #888; text-decoration: none; cursor: pointer; }
        .mb2-nav-link.active { color: #111; font-weight: 700;
          text-decoration: underline; text-underline-offset: 4px; }
        .mb2-nav-right { display: flex; align-items: center; gap: 8px; }
        .mb2-btn-ghost { background: none; border: none; font-family: inherit;
          font-size: 11px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase;
          color: #111; padding: 6px 14px; cursor: pointer; }
        .mb2-btn-solid { background: #111; border: 1.5px solid #111; color: #fff;
          font-family: inherit; font-size: 20px; font-weight: 800; letter-spacing: 0.8px;
          text-transform: uppercase; padding: 10px 24px; cursor: pointer; }
        .mb2-btn-outline { background: #fff; border: 1.5px solid #111; color: #111;
          font-family: inherit; font-size: 20px; font-weight: 800; letter-spacing: 0.8px;
          text-transform: uppercase; padding: 10px 24px; cursor: pointer; }
        .mb2-hero-action-btns { display: flex; gap: 12px; margin-top: 24px; }

        /* Hero */
        .mb2-hero { display: grid; grid-template-columns: 1fr 1fr;
          height: calc(56.25vw - 44px - 52px); min-height: 240px; }
        .mb2-hero-left { padding: 40px 48px; display: flex; flex-direction: column;
          justify-content: flex-start; gap: 16px; }
        .mb2-hero-badge { display: inline-block; background: #111; color: #fff;
          font-size: 9px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase;
          padding: 5px 10px; width: fit-content; }
        .mb2-hero-title { font-size: clamp(30px, 3.8vw, 56px); font-weight: 800;
          line-height: 1.0; letter-spacing: -2px; text-transform: uppercase; color: #111; }
        .mb2-hero-sub { font-size: 12px; line-height: 1.7; color: #555; max-width: 290px; }
        .mb2-hero-balance-title { font-size: clamp(24px, 3.2vw, 46px); font-weight: 800; color: #111; margin-top: 24px; letter-spacing: -1px; line-height: 1; }
        .mb2-hero-balance-val { font-size: clamp(20px, 2.5vw, 36px); font-weight: 700; color: #333; margin-top: 8px; }
        .mb2-hero-right { background: #0a0a0a; position: relative; overflow: hidden; }

        /* Compounder */
        .mb2-compounder { padding: 56px 48px; text-align: center; border-top: 1px solid #e5e5e5; }
        .mb2-section-title { font-size: 22px; font-weight: 800; letter-spacing: -0.5px;
          text-transform: uppercase; margin-bottom: 6px; color: #111; }
        .mb2-section-sub { font-size: 11.5px; color: #999; margin-bottom: 36px; }
        .mb2-calc-card { max-width: 560px; margin: 0 auto; border: 1px solid #d8d8d8; padding: 32px 36px; }
        .mb2-calc-row { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 10px; }
        .mb2-calc-label { font-size: 8.5px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: #aaa; }
        .mb2-calc-val { font-size: 18px; font-weight: 800; letter-spacing: -0.5px; color: #111; }
        .mb2-calc-divider { border: none; border-top: 1px solid #e5e5e5; margin: 24px 0; }
        .mb2-calc-results { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; text-align: left; }
        .mb2-result-label { font-size: 8px; font-weight: 700; letter-spacing: 1.2px;
          text-transform: uppercase; color: #aaa; margin-bottom: 5px; }
        .mb2-result-val { font-size: 22px; font-weight: 800; letter-spacing: -0.5px; color: #111; }

        /* Features grid */
        .mb2-features { display: grid; grid-template-columns: 1fr 1fr 1fr;
          border-top: 1px solid #e5e5e5; }
        .mb2-feat-col1 { padding: 36px 32px; border-right: 1px solid #e5e5e5;
          display: flex; flex-direction: column; gap: 14px; }
        .mb2-feat-check { width: 32px; height: 32px; border: 1.5px solid #111; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; }
        .mb2-feat-col2 { border-right: 1px solid #e5e5e5; display: flex; flex-direction: column; }
        .mb2-feat-col2-top { padding: 36px 32px; border-bottom: 1px solid #e5e5e5; flex: 1; }
        .mb2-feat-col2-bot { padding: 32px 32px 40px; position: relative; flex: 1; }
        .mb2-feat-autopilot { position: absolute; bottom: 0; left: 32px; right: 32px;
          border-top: 1px solid #e8e8e8; padding: 8px 0;
          font-size: 7.5px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: #ccc; }
        .mb2-feat-col3 { background: #f5f5f3; display: flex; flex-direction: column; }
        .mb2-feat-col3-top { padding: 28px 24px; border-bottom: 1px solid #e5e5e5; }
        .mb2-feat-col3-bot { flex: 1; display: flex; align-items: center; justify-content: center; padding: 24px; }
        .mb2-feat-title { font-size: 13px; font-weight: 800; letter-spacing: -0.2px;
          text-transform: uppercase; color: #111; margin-bottom: 10px; line-height: 1.2; }
        .mb2-feat-body { font-size: 11px; line-height: 1.7; color: #666; }
        .mb2-progress-row { display: flex; justify-content: space-between; margin-bottom: 8px; }
        .mb2-progress-label { font-size: 8px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: #aaa; }
        .mb2-progress-pct { font-size: 8px; font-weight: 700; letter-spacing: 1px; color: #111; }
        .mb2-progress-track { height: 11px; background: #ddd; }
        .mb2-progress-fill { width: 65%; height: 100%; background: #111; }
        .mb2-safe-card { border: 1px solid #ddd; background: #fff; padding: 20px 24px; text-align: center; }
        .mb2-safe-label { font-size: 8px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: #aaa; margin-bottom: 5px; margin-top: 8px; }
        .mb2-safe-val { font-size: 18px; font-weight: 800; letter-spacing: -0.5px; color: #111; }

        /* Footer */
        .mb2-footer { border-top: 1px solid #e5e5e5; padding: 20px 44px;
          display: flex; align-items: center; justify-content: space-between; }
        .mb2-footer-logo { font-weight: 800; font-size: 14px; letter-spacing: -0.5px; text-transform: uppercase; }
        .mb2-footer-links { display: flex; gap: 20px; list-style: none; }
        .mb2-footer-link { font-size: 9px; font-weight: 600; letter-spacing: 1px;
          text-transform: uppercase; color: #999; text-decoration: none; cursor: pointer; }
        .mb2-footer-copy { font-size: 9px; color: #bbb; letter-spacing: 0.5px; text-transform: uppercase; }
      `}</style>

      <div className="mb2-root">
        <div className="mb2-screen">
          <div className="mb2-inner">

            {/* ── NAV ── */}
            <Navbar setPage={setPage} />

            {/* ── HERO ── */}
            <section className="mb2-hero">
              <div className="mb2-hero-left">
                <span className="mb2-hero-badge">Smart Savings</span>
                <h1 className="mb2-hero-title">Save Without<br />Thinking.</h1>
                <p className="mb2-hero-sub">
                  High-yield accounts engineered for clarity. No hidden tiers, no complex
                  requirements, just pure financial growth through automated precision.
                </p>
                
                {/* CONDITIONAL RENDERING: Only display if personal account exists */}
                {hasPersonalAccount && (
                  <>
                    <div className="mb2-hero-balance-title">YOUR CURRENT<br /> BALANCE</div>
                    <div className="mb2-hero-balance-val">Rs. {fmt(actualBalance)}</div>
                    
                    <div className="mb2-hero-action-btns">
                      <button className="mb2-btn-outline" onClick={() => setPage('deposit')}>Deposit</button>
                      <button className="mb2-btn-solid" onClick={() => setPage('payment')}>Payment</button>
                    </div>
                  </>
                )}

              </div>
              <div className="mb2-hero-right">
                <OrbArt />
              </div>
            </section>

            {/* ── THE COMPOUNDER ── */}
            <section className="mb2-compounder">
              <h2 className="mb2-section-title">The Compounder</h2>
              <p className="mb2-section-sub">
                Calculate your projected growth over time with our zero-gimmick yield.
              </p>
              <div className="mb2-calc-card">
                {/* Deposit slider */}
                <div className="mb2-calc-row">
                  <span className="mb2-calc-label">Initial Deposit</span>
                  <span className="mb2-calc-val">Rs. {deposit.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  className="mb2-slider"
                  min={1000}
                  max={100000}
                  step={500}
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  style={{ marginBottom: 22 }}
                />
                {/* Monthly slider */}
                <div className="mb2-calc-row">
                  <span className="mb2-calc-label">Monthly Contribution</span>
                  <span className="mb2-calc-val">Rs. {monthly.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  className="mb2-slider"
                  min={0}
                  max={5000}
                  step={50}
                  value={monthly}
                  onChange={(e) => setMonthly(Number(e.target.value))}
                />
                <hr className="mb2-calc-divider" />
                <div className="mb2-calc-results">
                  <div>
                    <div className="mb2-result-label">Balance After 5 Years</div>
                    <div className="mb2-result-val">Rs. {fmt(fv)}</div>
                  </div>
                  <div>
                    <div className="mb2-result-label">Total Interest Earned</div>
                    <div className="mb2-result-val">Rs. {fmt(interest)}</div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── FEATURES GRID ── */}
            <div className="mb2-features">
              {/* Col 1 — Automated Round-Ups */}
              <div className="mb2-feat-col1">
                <div className="mb2-feat-check">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="mb2-feat-title">Automated Round-Ups</p>
                <p className="mb2-feat-body">
                  Every transaction is rounded to the nearest dollar. The difference is instantly
                  funneled into your high-yield vault. Micro-savings, macro impact.
                </p>
              </div>

              {/* Col 2 — Smart Vaults + Direct Deposit */}
              <div className="mb2-feat-col2">
                <div className="mb2-feat-col2-top">
                  <p className="mb2-feat-title">Smart Vaults</p>
                  <p className="mb2-feat-body">
                    Organize your capital into goal-based buckets. House, Travel, Emergency —
                    partitioned within one account for ultimate visibility.
                  </p>
                </div>
                <div className="mb2-feat-col2-bot">
                  <p className="mb2-feat-title">Direct Deposit Logic</p>
                  <p className="mb2-feat-body">
                    Split your paycheck before it even hits your main balance. Set a percentage,
                    and we'll handle the rest upon arrival.
                  </p>
                  <div className="mb2-feat-autopilot">Feature 01 / Auto-Pilot</div>
                </div>
              </div>

              {/* Col 3 — UI mockups */}
              <div className="mb2-feat-col3">
                <div className="mb2-feat-col3-top">
                  <div className="mb2-progress-row">
                    <span className="mb2-progress-label">New House</span>
                    <span className="mb2-progress-pct">65%</span>
                  </div>
                  <div className="mb2-progress-track">
                    <div className="mb2-progress-fill" />
                  </div>
                </div>
                <div className="mb2-feat-col3-bot">
                  <div className="mb2-safe-card">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                      stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                    <div className="mb2-safe-label">Safe-to-Spend</div>
                    {/* Displays live balance in the UI mockup if available */}
                    <div className="mb2-safe-val">Rs. {fmt(deposit)}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── FOOTER ── */}
            <footer className="mb2-footer">
              <div className="mb2-footer-logo">Mono Bank.</div>
              <ul className="mb2-footer-links">
                {["Privacy Policy", "Terms of Service", "Security", "Help Center"].map((l) => (
                  <li key={l}><a className="mb2-footer-link" href="#">{l}</a></li>
                ))}
              </ul>
              <span className="mb2-footer-copy">© 2026 Mono Bank. All rights reserved.</span>
            </footer>

          </div>
        </div>
      </div>
    </>
  );
}