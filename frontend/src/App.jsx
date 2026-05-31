// App.js
import React, { useState } from 'react';
import './App.css';

import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Login from './Login';
import Register from './Register'; 
import Business from './Business';
import Personal from './personal';
import FeaturesPage from './features_page';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  
  // NEW: State to store the logged-in user data
  const [user, setUser] = useState(null); 

  return (
    <div className="App">
      {currentPage !== 'login' && currentPage !== 'register' && currentPage !== 'business' && currentPage !== 'personal' && currentPage !== 'features_page' && (
        <Navbar setPage={setCurrentPage} />
      )}
      
      {currentPage === 'home' && (
        <>
          {/* Dashboard Header injected straight into the Home view */}
          <div className="container" style={{ padding: '20px 0', borderBottom: '2px solid #000' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800' }}>
              Welcome back, {user ? user.name : 'Guest'}.
            </h2>
          </div>
          <Hero />
          <Features />
        </>
      )}

      {currentPage === 'login' && (
        <Login setPage={setCurrentPage} setUser={setUser} />
      )}

      {currentPage === 'register' && (
        <Register setPage={setCurrentPage} />
      )}

      {/* Pass the logged-in user to your existing pages */}
      {currentPage === 'business' && (
        <Business setPage={setCurrentPage} user={user} />
      )}

      {currentPage === 'personal' && (
        <Personal setPage={setCurrentPage} user={user} />
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