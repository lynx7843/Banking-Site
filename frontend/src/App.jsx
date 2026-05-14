// App.js
import React, { useState } from 'react';
import './App.css';

import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Login from './Login';
import Register from './Register'; // Import the new component

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div className="App">
      <Navbar setPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <Features />
        </>
      )}

      {currentPage === 'login' && (
        <Login />
      )}

      {/* Conditionally render the new Register page */}
      {currentPage === 'register' && (
        <Register />
      )}
      
      <footer style={{borderTop: '2px solid #000', padding: '20px', textAlign: 'center', marginTop: '40px'}}>
          <p>© 2024 Mono Bank. Simple. Static. Secure.</p>
      </footer>
    </div>
  );
}

export default App;