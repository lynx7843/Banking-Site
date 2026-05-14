// Register.js
import React from 'react';

function Register({ setPage }) {
  return (
    <section className="register-section container">
      <div className="register-card">
        <h2 className="register-title">Open an Account.</h2>
        
        <form className="register-form">
          <div className="form-grid">
            
            {/* Part 1: User Information */}
            <div className="form-section">
              <h3 className="section-title">1. User Information</h3>
              
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">Full Name</label>
                <input className="form-input" type="text" id="fullName" placeholder="Dilan Amantha" />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input className="form-input" type="email" id="email" placeholder="dilan@example.com" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone Number</label>
                <input className="form-input" type="tel" id="phone" placeholder="(+94) 0700000000" />
              </div>
            </div>

            {/* Part 2: Bank Use Details */}
            <div className="form-section section-dark">
              <h3 className="section-title">2. Account Details</h3>
              
              <div className="form-group">
                <label className="form-label" htmlFor="accountType">Account Type</label>
                <select className="form-input form-select" id="accountType">
                  <option value="personal">Personal Checking</option>
                  <option value="savings">High-Yield Savings</option>
                  <option value="business">Business Account</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="initialDeposit">Initial Deposit ($)</label>
                <input className="form-input" type="number" id="initialDeposit" placeholder="0.00" min="0" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="expectedSavings">Expected Savings EOY ($)</label>
                <input className="form-input" type="number" id="expectedSavings" placeholder="0.00" min="0" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="reason">Reason for Creating Account</label>
                <textarea className="form-input" id="reason" rows="3" placeholder="Briefly explain your primary use..."></textarea>
              </div>
            </div>

          </div>

          {/* Button does nothing because type="button" instead of "submit" */}
          <button 
            type="button" 
            className="btn btn-primary register-btn"
            onClick={() => setPage('home')}
          >
            Submit Application
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