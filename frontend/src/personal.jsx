import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./App.css";

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
            <footer className="app-footer">
              <p>© 2026 Mono Bank. Simple. Static. Secure.</p>
            </footer>

          </div>
        </div>
      </div>
    </>
  );
}