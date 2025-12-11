import React, { useState } from 'react';
import { User, Lock, ArrowRight, Loader2, XCircle, Eye, EyeOff, LogIn, UserPlus } from 'lucide-react';

// --- Login Page Component (Simplified to match image) ---
const LoginPage = ({ onNavigate, PAGES }) => {
    // State for form inputs and status
    const [username, setUsername] = useState('GenZUser'); // Pre-filled for demo
    const [password, setPassword] = useState('password123'); // Pre-filled for demo
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Kept for functionality

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!username || !password) {
            setError('Please enter both username and password.');
            setLoading(false);
            return;
        }

        // --- MOCK LOGIN LOGIC ---
        setTimeout(() => {
            if (username === 'GenZUser' && password === 'password123') {
                console.log('Login Successful!');
                onNavigate(PAGES.DASHBOARD);
            } else {
                setError('Invalid credentials. Please try again.');
            }
            setLoading(false);
        }, 1500); // Simulate network delay
    };

    // Common input styling to achieve the dark, bordered look
    const inputStyle = "w-full pl-12 pr-4 py-4 text-white rounded-xl shadow-inner placeholder-slate-400 text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-500 bg-slate-900/50 border border-slate-600 backdrop-blur-sm";
    // Icon wrapper styling
    const iconWrapperStyle = "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300";

    return (
        <>
            <style>{`
                @keyframes gradient-xy {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
                .advanced-bg {
                    background: linear-gradient(-45deg, #0f172a, #1e1b4b, #312e81, #0f172a);
                    background-size: 400% 400%;
                    animation: gradient-xy 15s ease infinite;
                }
                .glass-card {
                    background: rgba(30, 41, 59, 0.4);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
                }
                .blob {
                    position: absolute;
                    filter: blur(40px);
                    z-index: 0;
                    opacity: 0.4;
                    animation: float 10s ease-in-out infinite;
                }
                .blob-1 { top: 10%; left: 20%; width: 300px; height: 300px; background: #4f46e5; animation-delay: 0s; }
                .blob-2 { bottom: 20%; right: 20%; width: 250px; height: 250px; background: #ec4899; animation-delay: -5s; }
                
                .input-group:focus-within svg {
                    color: #818cf8; /* indigo-400 */
                    filter: drop-shadow(0 0 5px rgba(129, 140, 248, 0.5));
                }
            `}</style>

            <main className="middle-content-main flex items-center justify-center min-h-screen advanced-bg p-4 relative overflow-hidden">
                
                {/* Decorative Background Blobs */}
                <div className="blob blob-1 rounded-full"></div>
                <div className="blob blob-2 rounded-full"></div>
                
                {/* Main Title - Centered above the form card */}
                <div className="absolute top-[15%] text-center z-10">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 tracking-tight drop-shadow-lg">
                        GenZ <span className="text-white">Online Banking</span>
                    </h1>
                    <p className="text-slate-300 mt-2 text-lg font-light tracking-wide">Experience the future of finance</p>
                </div>

                {/* Login Card Container */}
                <div className="w-full max-w-md glass-card p-8 rounded-2xl transition-all duration-300 z-10 mt-10">
                    
                    {/* Login Icon Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/20 mb-4 shadow-[0_0_15px_rgba(99,102,241,0.3)] border border-indigo-500/30">
                            <LogIn size={28} className="text-indigo-400"/>
                        </div>
                        <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {/* Error Message Display (Simplified red text) */}
                        {error && (
                            <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-200 text-sm text-center backdrop-blur-sm animate-pulse">
                                {error}
                            </div>
                        )}

                        {/* Username Input */}
                        <div className="input-group">
                            <label htmlFor="username" className="sr-only">Username</label>
                            <div className="relative">
                                <div className={iconWrapperStyle}>
                                    <User size={24} className="text-slate-400 transition-colors duration-300" />
                                </div>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    className={inputStyle}
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="input-group">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <div className="relative">
                                <div className={iconWrapperStyle}>
                                    <Lock size={24} className="text-slate-400 transition-colors duration-300" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    className={`${inputStyle} pr-12`}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={loading}
                                />
                                {/* Show/Hide Password Button */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-indigo-400 transition-colors"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    disabled={loading}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button (Primary - Gradient Blue) */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center items-center py-4 px-4 rounded-xl text-xl font-bold text-white transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/40 disabled:opacity-50 disabled:scale-100 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500"
                        >
                            {loading ? (
                                <span className="flex items-center"><Loader2 size={24} className="animate-spin mr-2"/> LOADING...</span>
                            ) : (
                                <span className="flex items-center">LOGIN</span>
                            )}
                        </button>
                    </form>

                    {/* Create Account Button (Secondary - White) */}
                    <div className="mt-6">
                        <button 
                            onClick={() => onNavigate(PAGES.CREATE_ACCOUNT)}
                            disabled={loading}
                            className="w-full flex justify-center items-center py-4 px-4 border border-slate-600 rounded-xl text-lg font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 hover:border-slate-500 transition-all duration-200"
                        >
                            Create New Account
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default LoginPage;