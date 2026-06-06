import React, { useState } from 'react';

function Register({ setPage }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // Updated default to exact wording
  const [accountType, setAccountType] = useState('Personal');
  const [initialDeposit, setInitialDeposit] = useState('');
  const [expectedSavings, setExpectedSavings] = useState('');
  const [reason, setReason] = useState('');
  
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const accountData = {
        customerId: email, 
        accountType: accountType,
        intention: reason,
        currentBalance: parseFloat(initialDeposit) || 0.0,
      };

      const response = await fetch('http://localhost:8080/api/accounts/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(accountData),
      });

      if (response.ok) {
        console.log("Account application submitted successfully!");
        setPage('home'); 
      } else {
        setError('Failed to submit application. Please check your details.');
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError('Cannot connect to the server. Is Spring Boot running?');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="register-section container">
      <div className="register-card">
        <h2 className="register-title">Open an Account.</h2>
        
        {error && <div className="error-message" style={{ margin: '20px 40px 0', color: 'red', fontWeight: 'bold' }}>{error}</div>}
        
        <form className="register-form" onSubmit={handleRegister}>
          <div className="form-grid">
            
            {/* Part 1: User Information */}
            <div className="form-section">
              <h3 className="section-title">1. User Information</h3>
              
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">Full Name</label>
                <input 
                  className="form-input" 
                  type="text" 
                  id="fullName" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Dilan Amantha" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input 
                  className="form-input" 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="dilan@example.com" 
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone Number</label>
                <input 
                  className="form-input" 
                  type="tel" 
                  id="phone" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(+94) 0700000000" 
                />
              </div>
            </div>

            {/* Part 2: Bank Use Details */}
            <div className="form-section section-dark">
              <h3 className="section-title">2. Account Details</h3>
              
              <div className="form-group">
                <label className="form-label" htmlFor="accountType">Account Type</label>
                {/* Updated Select Options */}
                <select 
                  className="form-input form-select" 
                  id="accountType"
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                >
                  <option value="Personal">Personal</option>
                  <option value="Business">Business</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="initialDeposit">Initial Deposit ($)</label>
                <input 
                  className="form-input" 
                  type="number" 
                  id="initialDeposit" 
                  value={initialDeposit}
                  onChange={(e) => setInitialDeposit(e.target.value)}
                  placeholder="0.00" 
                  min="0" 
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="expectedSavings">Expected Savings EOY ($)</label>
                <input 
                  className="form-input" 
                  type="number" 
                  id="expectedSavings" 
                  value={expectedSavings}
                  onChange={(e) => setExpectedSavings(e.target.value)}
                  placeholder="0.00" 
                  min="0" 
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="reason">Reason for Creating Account</label>
                <textarea 
                  className="form-input" 
                  id="reason" 
                  rows="3" 
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Briefly explain your primary use..."
                ></textarea>
              </div>
            </div>

          </div>

          <button 
            type="submit" 
            className="btn btn-primary register-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit Application'}
          </button>
          
          <button 
            type="button" 
            className="btn btn-secondary register-btn"
            style={{ marginLeft: 0, marginTop: '10px', borderColor: '#000' }}
            onClick={() => setPage('login')}
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;