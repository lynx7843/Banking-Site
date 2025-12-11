import React, { useState } from 'react';
// import axios from 'axios'; // ⬅️ axios ඉවත් කරන ලදී
import { LogIn, User, Lock, ArrowRight, Home, Loader2, XCircle } from 'lucide-react';

// Spring Boot Authentication API Endpoint
const LOGIN_URL = 'http://localhost:8080/api/auth/login'; 
// ⚠️ ඔබගේ Spring Boot port එක 8080 නොවේ නම්, මෙය නිවැරදි කරන්න.

// PAGES constants (ඔබේ ප්‍රධාන App එකෙන් ලබා ගන්නා)
const PAGES = {
    HOME: 'home',
    LOGIN: 'login', 
};

// Simple Login Form Component
const SimpleLoginForm = ({ onNavigate }) => {
    // State for form inputs and status
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Basic validation
        if (!username || !password) {
            setError('Please enter both username and password.');
            setLoading(false);
            return;
        }

        // ⚠️ NATIVE FETCH INTEGRATION LOGIC ⚠️
        const loginPayload = {
            username,
            password,
        };

        try {
            // fetch API භාවිතයෙන් Spring Boot API වෙත POST Request එක යැවීම
            const response = await fetch(LOGIN_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginPayload),
            });

            // සාර්ථක වුවත් නැතත්, response body එක JSON ලෙස කියවන්න
            const data = await response.json();
            
            // HTTP Status Code (200-299) සාර්ථක නම්
            if (response.ok) {
                console.log('Login Successful! Server Response:', data);
                
                // සාර්ථක වූ පසු Home Page වෙත Navigate කරන්න
                onNavigate(PAGES.HOME); 
            } else {
                // HTTP Status Code අසාර්ථක නම් (e.g., 401, 403, 500)
                if (response.status === 401) {
                    setError('Invalid credentials. Access denied by server.');
                } else if (data && data.message) {
                    setError(`Error: ${data.message}`);
                } else {
                    // response.status මගින් Error එකක් පෙන්වයි
                    setError(`Login failed (Status: ${response.status}).`);
                }
            }
        } catch (err) {
            // Network Error (e.g., server unreachable) හසුරුවයි
            setError('Could not connect to the authentication server. Please check the backend service.');
            console.error('Login Network Error Details:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-2xl transform hover:shadow-3xl transition duration-300">
                
                <div className="text-center mb-6">
                    <LogIn size={36} className="text-indigo-600 mx-auto mb-2"/>
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Sign In
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">Access your GenZ Banking Dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Error Message Display */}
                    {error && (
                        <div className="p-3 bg-red-100 text-red-700 text-sm rounded-lg border border-red-300 flex items-center">
                            <XCircle size={16} className="mr-2"/>
                            {error}
                        </div>
                    )}

                    {/* Username Input */}
                    <div>
                        <label htmlFor="username" className="sr-only">Username</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User size={20} className="text-gray-400" />
                            </div>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                disabled={loading}
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock size={20} className="text-gray-400" />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 transform hover:scale-[1.01] disabled:opacity-50"
                    >
                        {loading ? (
                            <span className="flex items-center"><Loader2 size={20} className="animate-spin mr-2"/> Verifying...</span>
                        ) : (
                            <span className="flex items-center">Log In <ArrowRight size={20} className="ml-2"/></span>
                        )}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <button 
                        onClick={() => onNavigate(PAGES.HOME)}
                        className="text-sm text-indigo-500 hover:text-indigo-700 flex items-center mx-auto transition"
                    >
                        <Home size={16} className="mr-1"/> Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SimpleLoginForm;