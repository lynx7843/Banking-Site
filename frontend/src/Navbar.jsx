// Navbar.js
import React from 'react';

function Navbar({ setPage }) {
  
  const handleNavigation = (e, pageName) => {
    e.preventDefault(); 
    setPage(pageName);  
  };

  // Define inline style for the Sign Out button
  const signOutBtnStyle = {
    background: '#fff',
    color: '#111',
    // Adjusted border to 1.5px to match typical outlines and prevent size shift
    border: '1.5px solid #111', 
    marginLeft: '12px'
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <h1 
            className="logo" 
            style={{ cursor: 'pointer' }} 
            onClick={(e) => handleNavigation(e, 'home')}
        >
            MONO BANK.
        </h1>

        <ul className="nav-menu">
          {/* Added the separate Home button here */}
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={(e) => handleNavigation(e, 'home')}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={(e) => handleNavigation(e, 'personal')}>Personal</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={(e) => handleNavigation(e, 'business')}>Business</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={(e) => handleNavigation(e, 'features_page')}>Features</a>
          </li>
        </ul>

        <div className="nav-actions">
          <a 
            href="#" 
            className="btn btn-primary" 
            onClick={(e) => handleNavigation(e, 'register')}
          >
            Open Account
          </a>
          <a 
            href="#"
            className="btn btn-primary"
            style={signOutBtnStyle}
            onClick={(e) => handleNavigation(e, 'login')}
          >
            Sign Out
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
