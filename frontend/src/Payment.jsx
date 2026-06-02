import { useState } from "react";

export default function MonoBankPayment() {
  const [payFrom, setPayFrom] = useState("Personal");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [amount, setAmount] = useState("");
  const [remark, setRemark] = useState("");

  const handleAmountChange = (e) => {
    const val = e.target.value.replace(/[^0-9.]/g, "");
    setAmount(val);
  };

  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", minHeight: "100vh", background: "#f0f0ec", color: "#111" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input::placeholder, textarea::placeholder { color: #aaa; font-family: inherit; }
        input:focus, textarea:focus, select:focus { outline: none; border-color: #111 !important; }
        select { -webkit-appearance: none; -moz-appearance: none; appearance: none; }
        textarea { resize: none; }
      `}</style>

      {/* Navbar */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px", height: "64px", background: "#fff",
        borderBottom: "1px solid #ddd", position: "sticky", top: 0, zIndex: 100
      }}>
        <span style={{ fontWeight: 800, fontSize: "18px", letterSpacing: "-0.5px" }}>MONO BANK.</span>
        <div style={{ display: "flex", gap: "36px", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em" }}>
          {["HOME", "PERSONAL", "BUSINESS", "FEATURES"].map((item) => (
            <span key={item} style={{
              cursor: "pointer",
              borderBottom: item === "PERSONAL" ? "2px solid #111" : "none",
              paddingBottom: "2px"
            }}>{item}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <span style={{ fontSize: "13px", fontWeight: 500, cursor: "pointer", letterSpacing: "0.05em" }}>LOG IN</span>
          <button style={{
            background: "#111", color: "#fff", border: "none",
            padding: "10px 20px", fontSize: "12px", fontWeight: 700,
            letterSpacing: "0.08em", cursor: "pointer", fontFamily: "inherit"
          }}>OPEN ACCOUNT</button>
        </div>
      </nav>

      {/* Main */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "300px 1fr",
          border: "2px solid #111", background: "#fff"
        }}>

          {/* Left Panel */}
          <div style={{
            background: "#fff", padding: "40px 32px",
            borderRight: "2px solid #111",
            display: "flex", flexDirection: "column", gap: "32px"
          }}>
            <div>
              <h1 style={{
                fontSize: "52px", fontWeight: 900, lineHeight: 1.0,
                letterSpacing: "-2px", marginBottom: "20px"
              }}>MAKE A<br />PAYMENT</h1>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#555" }}>
                Secure, real-time transfers within the MONO network and external financial institutions.
              </p>
            </div>

            {/* Processing Time card */}
            <div style={{
              border: "1px solid #ddd", padding: "16px 18px",
              display: "flex", gap: "14px", alignItems: "flex-start"
            }}>
              <div style={{ marginTop: "2px", flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "4px" }}>
                  PROCESSING TIME
                </div>
                <div style={{ fontSize: "11px", color: "#666", lineHeight: 1.6 }}>
                  Transfers are usually processed within 15 minutes.
                </div>
              </div>
            </div>

            {/* Notice */}
            <div style={{ background: "#111", color: "#fff", padding: "24px 20px", marginTop: "auto" }}>
              <div style={{ fontSize: "16px", fontWeight: 700, marginBottom: "10px" }}>Notice</div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", lineHeight: 1.7, color: "#ccc" }}>
                TRANSACTION LIMITS APPLY TO ALL PERSONAL ACCOUNTS.
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div style={{ padding: "40px 44px" }}>
            {/* Row 1: Pay From + Bank Name */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
              <div>
                <label style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
                  PAY FROM
                </label>
                <div style={{ position: "relative" }}>
                  <select
                    value={payFrom}
                    onChange={(e) => setPayFrom(e.target.value)}
                    style={{
                      width: "100%", padding: "13px 40px 13px 14px",
                      border: "1px solid #ccc", fontSize: "14px",
                      fontFamily: "inherit", color: "#111", background: "#fff",
                      cursor: "pointer"
                    }}
                  >
                    <option value="Personal">Personal</option>
                    <option value="Business">Business</option>
                  </select>
                  <svg style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>
              <div>
                <label style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
                  BANK NAME
                </label>
                <input
                  type="text"
                  placeholder="ENTER RECEIVING BANK"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  style={{
                    width: "100%", padding: "13px 14px", border: "1px solid #ccc",
                    fontSize: "13px", fontFamily: "inherit", color: "#111",
                    letterSpacing: "0.04em", background: "#fff"
                  }}
                />
              </div>
            </div>

            {/* Row 2: Account Number + Beneficiary Name */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
              <div>
                <label style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
                  ACCOUNT NUMBER
                </label>
                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  style={{
                    width: "100%", padding: "13px 14px", border: "1px solid #ccc",
                    fontSize: "13px", fontFamily: "inherit", color: "#111",
                    letterSpacing: "0.08em", background: "#fff"
                  }}
                />
              </div>
              <div>
                <label style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
                  BENEFICIARY NAME
                </label>
                <input
                  type="text"
                  placeholder="FULL NAME"
                  value={beneficiaryName}
                  onChange={(e) => setBeneficiaryName(e.target.value)}
                  style={{
                    width: "100%", padding: "13px 14px", border: "1px solid #ccc",
                    fontSize: "13px", fontFamily: "inherit", color: "#111",
                    letterSpacing: "0.04em", background: "#fff"
                  }}
                />
              </div>
            </div>

            {/* Row 3: Amount */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
                AMOUNT (LKR)
              </label>
              <div style={{ position: "relative", border: "1px solid #ccc", background: "#fff", width: "50%" }}>
                <input
                  type="text"
                  placeholder="0.00"
                  value={amount}
                  onChange={handleAmountChange}
                  style={{
                    width: "100%", padding: "13px 52px 13px 14px",
                    border: "none", outline: "none", fontSize: "16px",
                    fontWeight: 600, fontFamily: "inherit", color: "#111",
                    background: "transparent"
                  }}
                />
                <span style={{
                  position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)",
                  fontSize: "11px", fontWeight: 700, color: "#999", letterSpacing: "0.08em"
                }}>LKR</span>
              </div>
            </div>

            {/* Row 4: Remark */}
            <div style={{ marginBottom: "28px" }}>
              <label style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
                REMARK
              </label>
              <textarea
                placeholder="OPTIONAL TRANSACTION NOTE"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                rows={4}
                style={{
                  width: "100%", padding: "14px", border: "1px solid #ccc",
                  fontSize: "13px", fontFamily: "inherit", color: "#111",
                  letterSpacing: "0.04em", background: "#fff", lineHeight: 1.6
                }}
              />
            </div>

            <div style={{ borderTop: "1px solid #eee", paddingTop: "28px", display: "flex", justifyContent: "flex-end" }}>
              <button
                style={{
                  background: "#111", color: "#fff", border: "none",
                  padding: "18px 40px", fontSize: "14px", fontWeight: 800,
                  letterSpacing: "0.1em", cursor: "pointer", fontFamily: "inherit",
                  display: "flex", alignItems: "center", gap: "12px",
                  transition: "background 0.2s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#333"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#111"}
              >
                CONFIRM PAYMENT
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #ddd", background: "#fff",
        padding: "28px 48px", display: "flex",
        justifyContent: "space-between", alignItems: "center"
      }}>
        <span style={{ fontWeight: 900, fontSize: "18px", letterSpacing: "-0.5px", lineHeight: 1.2 }}>
          MONO<br />BANK.
        </span>
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
