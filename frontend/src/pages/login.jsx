import React, { useState } from 'react';
import { User, Lock, ChevronRight, Aperture } from 'lucide-react';

// Re-export PAGE constants (Assuming this is defined elsewhere for navigation)
const PAGES = {
    HOME: 'home',
    CREATE_ACCOUNT: 'createAccount',
    DASHBOARD: 'dashboard' // Added for login success
};


const GenZLoginPage = ({ onNavigate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        // Basic mock login logic
        if (username === 'GenZUser123' && password === 'password123') {
            alert('Login Successful! Redirecting to Dashboard.');
            onNavigate(PAGES.DASHBOARD); // Navigate to a success page/dashboard
        } else {
            setError('Invalid username or password. Please try again.');
        }
    };

    return (
        <div className="login-page middle-content-main">
            <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
                {/* CONVERSION TO H1 TAG */}
                <h1 className="page-title">
                    <Aperture size={30} className="mr-2" /> GenZ Online Banking: <span className="text-secondary">Next-Gen Finance</span>
                </h1>
                <p className="page-subtitle">Login to access your personalized, gamified financial dashboard.</p>
            </div>

            <form onSubmit={handleLogin} className="login-form-placeholder simple-form">
                <div className="form-body">
                    <h3 className="form-title">Secure Login</h3>
                    
                    {/* Username Field */}
                    <div className="input-group">
                        <label htmlFor="username">Username / Email</label>
                        <div className="input-with-icon">
                            <User size={20} className="input-icon" />
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter your username or email"
                                className="form-input"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-with-icon">
                            <Lock size={20} className="input-icon" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="form-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    
                    {/* Error Message */}
                    {error && <p className="error-message">{error}</p>}
                </div>

                <div className="form-navigation">
                    <button 
                        type="submit" 
                        className="btn btn-primary nav-btn login-btn"
                    >
                        Login <ChevronRight size={20} />
                    </button>
                </div>
                
                {/* Link to Create Account */}
                <p className="mt-4 text-center">
                    Don't have an account? 
                    <button 
                        type="button"
                        onClick={() => onNavigate(PAGES.CREATE_ACCOUNT)}
                        className="btn btn-link ml-1" 
                    >
                        Create Your GenZ Account
                    </button>
                </p>
            </form>
        </div>
    );
};

export default GenZLoginPage;