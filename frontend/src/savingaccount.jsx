import React, { useState } from 'react';
import './index.css'; // Imports the separate CSS file

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 

    // --- MOCK LOGIN LOGIC ---
    if (username === 'user' && password === 'password') {
      alert('Login Successful!');
      setError('');
      // In a real application, you would make an API call here.
    } else {
      setError('Invalid username or password.');
    }
    // ------------------------
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Account Login</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            aria-label="Username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password"
          />
        </div>

        {/* Display error message only if 'error' state is set */}
        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;