// OnlineBankingHome.jsx

import React, { useState, useEffect } from 'react';
import { ChevronDown, DollarSign, CreditCard, Wrench, TrendingUp, Zap, FileText, MessageSquare, Briefcase } from 'lucide-react';

// --- Feature Card Component (UNCHANGED) ---
const FeatureCard = ({ icon: Icon, title, description, isPrimary = false }) => (
  <div className={`feature-card ${isPrimary ? 'primary-card' : 'secondary-card'}`}>
    <div className={`feature-card-icon-wrapper ${isPrimary ? 'primary-icon-bg' : 'secondary-icon-bg'}`}>
      <Icon size={28} />
    </div>
    <h3 className={`feature-card-title ${isPrimary ? 'primary-title' : 'secondary-title'}`}>{title}</h3>
    <p className={`feature-card-description ${isPrimary ? 'primary-description' : 'secondary-description'}`}>{description}</p>
  </div>
);

const slidesData = [
  {
    title: "AI-Powered Personalization",
    description: "Experience banking tailored just for you. Our AI analyzes your spending to provide proactive financial advice and customized savings goals, making your money work smarter.",
    imageConcept: "Concept: A digital interface showing charts, graphs, and a friendly AI icon offering personalized advice."
  },
  {
    title: "Seamless Embedded Finance",
    description: "Banking that fits your life, not the other way around. Access payments, loans, and insurance directly within your favorite third-party apps and services.",
    imageConcept: "Concept: Various digital icons (e-commerce, ride-share, etc.) connected to a central banking app, illustrating integration."
  },
  {
    title: "The Neobank Experience: Digital-First",
    description: "Say goodbye to branches and hidden fees. Enjoy a transparent, mobile-first banking experience with real-time transactions and 24/7 global support.",
    imageConcept: "Concept: A sleek smartphone displaying a minimalist banking app interface with a globe or fast payment symbols in the background."
  }
];

// --- Digital Banking Carousel Component (UNCHANGED) ---
const DigitalBankingCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesData.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="digital-banking-carousel-container">
      <div className="carousel-background-text">
        <p>FINTECH</p>
        <p>INNOVATION</p>
      </div>
      
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div className="slide-content">
            <h1 className="slide-title">{slide.title}</h1>
            <p className="slide-description">{slide.description}</p>
            <div className="slide-image-placeholder">
              {slide.imageConcept}
            </div>
          </div>
        </div>
      ))}
      <div className="carousel-indicators">
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

// --- Main Home Content Component ---
const OnlineBankingHome = () => {
  const featureItems = [
    { icon: Wrench, title: 'Tools & Calculator' },
    { icon: TrendingUp, title: 'Rewards & Promotion' },
    { icon: DollarSign, title: 'Rates & Tariffs' },
    { icon: Zap, title: 'Exchange Rates' },
    { icon: FileText, title: 'Applications' },
    { icon: MessageSquare, title: 'Important Notices' },
  ];

  const accountTypes = [
    { icon: DollarSign, title: 'Savings Accounts', isPrimary: true, description: 'Start saving for a secure future.' },
    { icon: Briefcase, title: 'Deposits', isPrimary: false, description: 'Invest securely with fixed term deposits.' },
    { icon: CreditCard, title: 'Current Accounts', isPrimary: false, description: 'Manage daily transactions with ease.' },
    { icon: CreditCard, title: 'Cards', isPrimary: false, description: 'Explore credit and debit card options.' },
  ];

  return (
    <div className="navbar-content-wrapper content-wrapper">
      {/* Secondary Feature Navigation (Strip) */}
      <div className="secondary-nav-strip">
        {featureItems.map((item, index) => (
          <div key={index} className="secondary-nav-item">
            <item.icon size={24} className="secondary-nav-icon" />
            <span className="secondary-nav-text">{item.title}</span>
          </div>
        ))}
      </div>

      {/* Digital Banking Carousel */}
      <div style={{ marginBottom: '3rem' }}>
        <DigitalBankingCarousel />
      </div>

      {/* Main Heading and Application Query */}
      <div className="hero-section">
        <p className="hero-section-pre-title">GenZ Personal Banking</p>
        <h1 className="hero-section-title">
          What can we help you with today?
        </h1>
        <div className="hero-section-select-group">
          <label htmlFor="apply-for" className="hero-section-label">Apply for</label>
          <div className="hero-section-select-wrapper">
            <select
              id="apply-for"
              className="hero-section-select"
            >
              <option>Select One</option>
              <option>Personal Loan</option>
              <option>Credit Card</option>
              <option>Fixed Deposit</option>
              <option>Mortgage</option>
            </select>
            <div className="hero-section-select-icon">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Account Type Cards */}
      <div className="account-cards-grid">
        {accountTypes.map((card, index) => (
          <FeatureCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            isPrimary={card.isPrimary}
          />
        ))}
      </div>
      
    </div>
  );
};

export default OnlineBankingHome;