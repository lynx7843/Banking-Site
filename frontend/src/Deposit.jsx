import { useState } from "react";
import Navbar from "./Navbar";

const styles = {
  "@import": "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap",
};

export default function MonoBankDeposit({ setPage, user }) {
  const [sourceOfFunds, setSourceOfFunds] = useState("");
  const [amount, setAmount] = useState("");
  const [depositTo, setDepositTo] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const currentBalance = "1,240,500.00";

  const handleAmountChange = (e) => {
    const val = e.target.value.replace(/[^0-9.]/g, "");
    setAmount(val);
  };

  const displayAmount = amount === "" ? "" : amount;

  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", minHeight: "100vh", background: "#f5f5f3", color: "#111" }}>
      {/* Navbar */}
      <Navbar setPage={setPage} />

      {/* Main Content */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "320px 1fr",
          border: "1px solid #ddd", background: "#fff"
        }}>
          {/* Left Panel */}
          <div style={{
            background: "#f0f0ec", padding: "40px 32px",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            borderRight: "1px solid #ddd"
          }}>
            <div>
              <span style={{
                background: "#111", color: "#fff", fontSize: "10px",
                fontWeight: 700, letterSpacing: "0.12em", padding: "5px 10px",
                display: "inline-block", marginBottom: "32px"
              }}>TRANSACTION MODE</span>
              <h1 style={{
                fontSize: "52px", fontWeight: 900, lineHeight: 1.0,
                letterSpacing: "-2px", margin: "0 0 24px"
              }}>MAKE A<br />DEPOSIT.</h1>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#444", margin: 0 }}>
                Securely transfer funds into your Mono Bank account. Our grid-locked system ensures every cent is tracked with absolute precision.
              </p>
            </div>
            <div style={{ borderTop: "1px solid #ccc", paddingTop: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                END-TO-END ENCRYPTED
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div style={{ padding: "40px 48px" }}>
            {/* Source Details */}
            <div style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "24px", borderBottom: "1px solid #111", paddingBottom: "12px" }}>
                <h2 style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.5px", margin: 0 }}>SOURCE DETAILS</h2>
                <span style={{ fontSize: "11px", color: "#999", fontWeight: 600, letterSpacing: "0.08em" }}>STEP 01/02</span>
              </div>
              <label style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
                SOURCE OF FUNDS
              </label>
              <input
                type="text"
                placeholder="E.G. PERSONAL SAVINGS OR SALARY"
                value={sourceOfFunds}
                onChange={(e) => setSourceOfFunds(e.target.value)}
                style={{
                  width: "100%", padding: "14px 16px", border: "1px solid #ccc",
                  fontSize: "13px", letterSpacing: "0.04em", outline: "none",
                  background: "#fff", boxSizing: "border-box",
                  fontFamily: "inherit", color: "#111"
                }}
              />
              <p style={{ fontSize: "10px", color: "#999", letterSpacing: "0.06em", marginTop: "8px" }}>
                PLEASE SPECIFY THE LEGAL ORIGIN OF THE DEPOSIT.
              </p>
            </div>

            {/* Monetary Value */}
            <div style={{ marginBottom: "32px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "24px", borderBottom: "1px solid #111", paddingBottom: "12px" }}>
                <h2 style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.5px", margin: 0 }}>MONETARY VALUE</h2>
                <span style={{ fontSize: "11px", color: "#999", fontWeight: 600, letterSpacing: "0.08em" }}>STEP 02/02</span>
              </div>

              <label style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
                AMOUNT (LKR)
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "16px", marginBottom: "24px" }}>
                <div style={{ position: "relative", border: "1px solid #ccc", background: "#fff" }}>
                  <input
                    type="text"
                    placeholder="0.00"
                    value={displayAmount}
                    onChange={handleAmountChange}
                    style={{
                      width: "100%", padding: "18px 56px 18px 16px",
                      border: "none", outline: "none", fontSize: "28px",
                      fontWeight: 700, letterSpacing: "-0.5px", color: "#111",
                      background: "transparent", boxSizing: "border-box",
                      fontFamily: "inherit"
                    }}
                  />
                  <span style={{
                    position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)",
                    fontSize: "12px", fontWeight: 700, color: "#999", letterSpacing: "0.06em"
                  }}>LKR</span>
                </div>
                <div style={{ border: "1px solid #ddd", background: "#f5f5f3", padding: "14px 16px" }}>
                  <div style={{ fontSize: "10px", color: "#888", fontWeight: 600, letterSpacing: "0.1em", marginBottom: "6px" }}>CURRENT BALANCE</div>
                  <div style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.5px" }}>{currentBalance}</div>
                </div>
              </div>

              {/* Deposit To Dropdown */}
              <label style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
                DEPOSIT TO
              </label>
              <select
                value={depositTo}
                onChange={(e) => setDepositTo(e.target.value)}
                style={{
                  width: "100%", padding: "14px 16px", border: "1px solid #ccc",
                  fontSize: "13px", letterSpacing: "0.04em", outline: "none",
                  background: "#fff", fontFamily: "inherit", color: depositTo === "" ? "#aaa" : "#111",
                  appearance: "none", cursor: "pointer",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                  boxSizing: "border-box"
                }}
              >
                <option value="" disabled>SELECT ACCOUNT TYPE</option>
                <option value="personal">PERSONAL ACCOUNT</option>
                <option value="business">BUSINESS ACCOUNT</option>
              </select>
            </div>

            {/* Confirmation Checkbox */}
            <div style={{
              border: "1px solid #ddd", padding: "20px", marginBottom: "28px",
              display: "flex", alignItems: "flex-start", gap: "14px", background: "#fafafa"
            }}>
              <div
                onClick={() => setConfirmed(!confirmed)}
                style={{
                  width: "18px", height: "18px", border: "2px solid #111",
                  flexShrink: 0, cursor: "pointer", marginTop: "1px",
                  background: confirmed ? "#111" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}
              >
                {confirmed && (
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <p style={{ fontSize: "12px", lineHeight: 1.7, color: "#444", margin: 0 }}>
                I confirm that the information provided is accurate and that the funds are not derived from any prohibited activities as per Mono Bank's compliance policy.
              </p>
            </div>

            {/* Submit Button */}
            <button
              style={{
                width: "100%", padding: "22px", background: "#111",
                color: "#fff", border: "none", fontSize: "14px",
                fontWeight: 800, letterSpacing: "0.12em", cursor: "pointer",
                fontFamily: "inherit", transition: "background 0.2s"
              }}
              onMouseEnter={(e) => e.target.style.background = "#333"}
              onMouseLeave={(e) => e.target.style.background = "#111"}
            >
              SUBMIT DEPOSIT
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #ddd", background: "#fff",
        padding: "28px 48px", display: "flex",
        justifyContent: "space-between", alignItems: "center"
      }}>
        <span style={{ fontWeight: 800, fontSize: "16px", letterSpacing: "-0.5px" }}>MONO BANK.</span>
        <div style={{ display: "flex", gap: "32px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#555" }}>
          {["PRIVACY POLICY", "TERMS OF SERVICE", "SECURITY", "HELP CENTER"].map(item => (
            <span key={item} style={{ cursor: "pointer" }}>{item}</span>
          ))}
        </div>
        <span style={{ fontSize: "11px", color: "#999", fontWeight: 500, letterSpacing: "0.04em" }}>
          © 2024 MONO BANK. ALL RIGHTS RESERVED.
        </span>
      </footer>
    </div>
  );
}
