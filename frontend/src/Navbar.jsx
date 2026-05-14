// Navbar.js
import React from 'react';

function Navbar({ setPage }) {
  
  const handleNavigation = (e, pageName) => {
    e.preventDefault(); 
    setPage(pageName);  
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
          <li className="nav-item"><a href="#" className="nav-link">Personal</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Business</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
        </ul>

        <div className="nav-actions">
          <a 
            href="#" 
            className="btn btn-primary" 
            onClick={(e) => handleNavigation(e, 'register')}
          >
            Open Account
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;