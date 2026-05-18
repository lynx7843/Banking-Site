// App.js
import React, { useState } from 'react';
import './App.css';

import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Login from './Login';
import Register from './Register'; // Import the new component
import Business from './Business';
import Personal from './personal';
import FeaturesPage from './features_page';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div className="App">
      {currentPage !== 'login' && currentPage !== 'register' && currentPage !== 'business' && currentPage !== 'personal' && currentPage !== 'features_page' && (
        <Navbar setPage={setCurrentPage} />
      )}
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <Features />
        </>
      )}

      {currentPage === 'login' && (
        <Login setPage={setCurrentPage} />
      )}

      {/* Conditionally render the new Register page */}
      {currentPage === 'register' && (
        <Register setPage={setCurrentPage} />
      )}

      {currentPage === 'business' && (
        <Business setPage={setCurrentPage} />
      )}

      {currentPage === 'personal' && (
        <Personal setPage={setCurrentPage} />
      )}

      {currentPage === 'features_page' && (
        <FeaturesPage setPage={setCurrentPage} />
      )}

      {currentPage !== 'business' && currentPage !== 'personal' && currentPage !== 'features_page' && (
        <footer style={{borderTop: '2px solid #000', padding: '20px', textAlign: 'center', marginTop: '40px'}}>
            <p>© 2026 Mono Bank. Simple. Static. Secure.</p>
        </footer>
      )}
    </div>
  );
}

export default App;