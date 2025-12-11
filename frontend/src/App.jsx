import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MessageSquare, Briefcase } from 'lucide-react';

import Home from "./pages/home";
import GenZCreateAccountPage from './pages/createaccount'; // For creating new accounts
import LoginPage from './pages/login'; // The new login page
import Dashboard from './pages/dashboard'; // The new online banking dashboard

// Define PAGE constants for clearer state management
const PAGES = {
  HOME: 'home',
  CREATE_ACCOUNT: 'createAccount',
  LOGIN: 'login',
  DASHBOARD: 'dashboard',
};

// --- AI Assistant Component (No changes needed) ---
const AIAssistant = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hello! I'm Chai, your AI Banking Assistant. How can I help you with your finances today? (e.g., 'What are the current interest rates?' or 'How do I apply for a loan?')" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', text: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');

    // Simulate AI response (replace with actual API call)
    const simulatedResponse = simulateAIResponse(input);

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', text: simulatedResponse }]);
    }, 1000);
  };

  const simulateAIResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes('loan') || lowerQuery.includes('apply')) {
      return "You can apply for a Business Loan right from the 'Applications' section. Would you like me to guide you there?";
    } else if (lowerQuery.includes('rate') || lowerQuery.includes('interest')) {
      return "Current Savings Account interest rates are 3.5% APY. Please check the 'Rates & Tariffs' page for detailed information.";
    } else if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
      return "Hi there! I'm ready to assist you. What's on your mind?";
    }
    return "I'm still learning! For complex queries, please visit the 'Important Notices' or contact a human representative.";
  };

  return (
    <div className="ai-assistant">
      <div className="ai-assistant-header">
        <div className="ai-assistant-title-group">
          <MessageSquare size={18} />
          <h3 className="ai-assistant-title">Chat with Chai!</h3>
        </div>
        <button onClick={onClose} className="ai-assistant-close-btn">
          <X size={20} />
        </button>
        </div>
        <div className="ai-assistant-messages custom-scrollbar">
          {messages.map((msg, index) => (
            <div key={index} className={`message-container ${msg.role === 'user' ? 'user' : 'assistant'}`}>
              <div className={`message-bubble ${msg.role === 'user' ? 'user-bubble' : 'assistant-bubble'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="ai-assistant-input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question..."
            className="ai-assistant-input"
          />
          <button
            onClick={handleSend}
            className="ai-assistant-send-btn"
          >
            Send
          </button>
        </div>
      </div>
  );
};

// --- Navbar Component (Modified to use onNavigate) ---
const Navbar = ({ onNavigate }) => { // onNavigate is new prop
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Personal Banking');

  const navItems = [
    'Personal Banking',
    'Business Banking',
    'Non Resident Banking',
    'Services',
  ];

  const topLinks = [
    { name: 'About us', href: '#' },
    { name: 'Branches/ATMs', href: '#' },
    { name: 'Investors', href: '#' },
    { name: 'News', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact us', href: '#' },
    { name: 'Overseas Operations', href: '#' },
  ];

  return (
    <nav className="navbar-container">
      {/* Top Bar */}
      <div className="navbar-topbar-wrapper">
        <div className="navbar-content-wrapper navbar-topbar">
          <div className="navbar-topbar-links">
            {topLinks.map((item) => (
              <a key={item.name} href={item.href} className="navbar-topbar-link">
                {item.name}
              </a>
            ))}
          </div>
          <div className="navbar-topbar-actions">
            <a href="#" className="navbar-topbar-link lang-select">
              <span className="mr-1">🏳️</span> EN <ChevronDown size={12} className="ml-05" />
            </a>
            <a href="#" className="navbar-topbar-link accessibility-link">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon-4 icon-w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0v4m-4 5h4m-4 0v4m-4-4v4m-4-4h4m-4 0v4m-4-4h4m-4 0v4" />
              </svg>
              Accessibility Options
            </a>
            <button onClick={() => onNavigate(PAGES.LOGIN)} className="navbar-online-banking-btn">
              Online Banking
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="navbar-content-wrapper navbar-main">
        <div className="navbar-flex-container">
          {/* Logo and Main Links */}
          <div className="navbar-logo-links">
            {/* Replaced Link with a button/div that calls onNavigate to HOME */}
            <div onClick={() => onNavigate(PAGES.HOME)} className="navbar-logo clickable">
              <span className="logo-color-accent">GenZ</span>Bank
            </div>
            <div className="navbar-links-desktop">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`nav-item ${
                    activeTab === item
                      ? 'active'
                      : ''
                  }`}
                >
                  {item}
                  {activeTab === item && (
                    <span className="nav-item-underline"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="navbar-actions-desktop">
            <button className="navbar-digital-banking-btn">
              Digital Banking
            </button>
            <button className="navbar-commercial-btn">
              <Briefcase size={16} className="mr-1" /> Commercial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="navbar-mobile-menu-btn-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-mobile-menu-btn"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="navbar-mobile-menu-panel">
          <div className="navbar-mobile-links">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => { setActiveTab(item); setIsOpen(false); }}
                className="navbar-mobile-link"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="navbar-mobile-actions">
            <div className="navbar-mobile-actions-group">
              <button className="navbar-mobile-digital-btn">
                Digital Banking
              </button>
              <button className="navbar-mobile-commercial-btn">
                Commercial
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Footer Component (No changes needed) ---
const Footer = () => {
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        'Correspondent Banks', 'CBSL - Customer Charter', 'Complaints and Grievances',
        'Registering US Persons', 'Policies & Procedures', 'Properties for Sale',
        'General Terms and Conditions',
      ],
    },
    {
      title: 'About Us',
      links: [
        'Our History', 'Achievements', 'Social Responsibility',
        'Board of Directors', 'Corporate Management', 'Careers',
        'Latest Market Watch Report',
      ],
    },
    {
      title: 'Personal Banking',
      links: ['Savings Accounts', 'Deposits', 'Current Accounts', 'Cards', 'Loans'],
    },
    {
      title: 'Business Banking',
      links: ['Corporate Banking', 'Trade Finance', 'Treasury', 'SME', 'Investment Banking'],
    },
    {
      title: 'Non Resident Banking',
      links: ['Savings Accounts', 'Deposits', 'Loans', 'Investments', 'Sending Money'],
    },
  ];

  const socialIcons = [
    { icon: 'Facebook', href: '#' },
    { icon: 'Twitter', href: '#' },
    { icon: 'Instagram', href: '#' },
    { icon: 'YouTube', href: '#' },
    { icon: 'LinkedIn', href: '#' },
    { icon: 'WhatsApp', href: '#' },
  ];

  return (
    <footer className="footer-container">
      <div className="navbar-content-wrapper content-wrapper">
        {/* Social Links */}
        <div className="footer-social-links">
          <span className="footer-social-title">Follow us:</span>
          {socialIcons.map((item, index) => (
            <a key={index} href={item.href} className="footer-social-icon-link">
              {/* Using a placeholder SVG for social icons */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" opacity={0} />
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <text x="12" y="15" fontSize="12" fill="white" textAnchor="middle" dominantBaseline="middle">{item.icon[0]}</text>
              </svg>
            </a>
          ))}
        </div>

        {/* Footer Links Grid */}
        <div className="footer-links-grid">
          {footerLinks.map((section, index) => (
            <div key={index} className="footer-links-column">
              <h4 className="footer-links-title">{section.title}</h4>
              <ul className="footer-links-list">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="footer-link-item">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* AI Assistant Image Placeholder in Footer */}
          <div className="footer-ai-placeholder">
            <div className="footer-ai-placeholder-content">
              <div className="footer-ai-placeholder-text">
                Chat with Chai!
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} BankConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};


// --- Main App Component (Now manages page state) ---
const App = () => {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  // State to manage which 'page' is currently displayed (replacing React Router)
  const [currentPage, setCurrentPage] = useState(PAGES.HOME); 

  // Function to determine which component to render
  const renderPage = () => {
    switch (currentPage) {
      case PAGES.CREATE_ACCOUNT:
        return <GenZCreateAccountPage onNavigate={setCurrentPage} PAGES={PAGES} />;
      case PAGES.LOGIN:
        return <LoginPage onNavigate={setCurrentPage} PAGES={PAGES} />;
      case PAGES.DASHBOARD:
        return <Dashboard onNavigate={setCurrentPage} PAGES={PAGES} />;
      case PAGES.HOME:
      default:
        return <Home onNavigate={setCurrentPage} PAGES={PAGES} />;
    }
  };

  return (
    <div className="app-container">
      {/* Pass the navigation function down to Navbar */}
      <Navbar onNavigate={setCurrentPage} /> 

      {/* Conditionally render the selected page */}
      {renderPage()}

      <Footer />

      {/* Floating AI Assistant Button/Widget */}
      <div className="ai-float-widget-wrapper">
        {isAIChatOpen ? (
          <div className="ai-chat-open">
            <AIAssistant onClose={() => setIsAIChatOpen(false)} />
          </div>
        ) : (
          <button
            onClick={() => setIsAIChatOpen(true)}
            className="ai-chat-button"
            title="Chat with AI Assistant"
          >
            <MessageSquare size={30} />
          </button>
        )}
      </div>
    </div>
  );
};

export default App; // Export the main App component