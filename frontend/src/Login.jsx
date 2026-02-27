// Login.js
import React from 'react';

function Login() {
  return (
    <section className="login-section container">
      <div className="login-card">
        <h2 className="login-title">Access Account.</h2>
        
        <form className="login-form">
          <div className="form-group">
            <label className="form-label" htmlFor="username">Username</label>
            <input className="form-input" type="text" id="username" />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input className="form-input" type="password" id="password" />
          </div>
          
          {/* type="button" ensures it doesn't submit or refresh the page */}
          <button type="button" className="btn btn-primary login-btn">
            Log In
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;