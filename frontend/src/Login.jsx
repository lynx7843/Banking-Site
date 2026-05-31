// Login.js
import React, { useState } from 'react';

function Login({ setPage, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); 
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData); // Save user to App.jsx
        setPage('home'); // Go to Dashboard/Home
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      console.error("Login error:", err);
      setError('Cannot connect to the server.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="login-section container">
      <div className="login-card">
        <h2 className="login-title">Access Account.</h2>
        
        {error && <div className="error-message" style={{ marginBottom: '15px', color: 'red', fontWeight: 'bold' }}>{error}</div>}
        
        <form className="login-form">
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input 
              className="form-input" 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@mybank.com"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input 
              className="form-input" 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button 
            type="button" 
            className="btn btn-primary login-btn"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? 'Authenticating...' : 'Log In'}
          </button>
          
          <button 
            type="button" 
            className="btn btn-secondary login-btn"
            style={{ marginLeft: 0 }}
            onClick={() => setPage('register')}
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;