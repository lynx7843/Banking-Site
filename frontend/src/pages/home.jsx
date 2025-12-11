import React, { useState, useEffect } from 'react';
import { ChevronDown, MessageSquare, Briefcase, DollarSign, CreditCard, Wrench, TrendingUp, Zap, FileText } from 'lucide-react';

// --- Feature Card Component ---
const FeatureCard = ({ icon: Icon, title, description, isPrimary = false }) => (
  <div 
    className={`feature-card ${isPrimary ? 'primary-card' : 'secondary-card'}`}
    // Conditional inline style for a stronger, highlighted shadow on the primary card
    style={isPrimary 
      ? { boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)', transform: 'translateY(-5px)', transition: 'all 0.3s ease' }
      : {}
    }
  >
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
    imageConcept: ""
  },
  {
    title: "Seamless Embedded Finance",
    description: "Banking that fits your life, not the other way around. Access payments, loans, and insurance directly within your favorite third-party apps and services.",
    imageConcept: ""
  },
  {
    title: "The Neobank Experience: Digital-First",
    description: "Say goodbye to branches and hidden fees. Enjoy a transparent, mobile-first banking experience with real-time transactions and 24/7 global support.",
    imageConcept: ""
  }
];

// --- Digital Banking Carousel Component ---
const DigitalBankingCarousel = () => { 
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesData.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="digital-banking-carousel-container">
      {/* Background/Ambient Text */}
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
            {/* Displaying Image Concept */}
            <div className="slide-image-placeholder">
              {slide.imageConcept}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots (Indicators) */}
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

// --- Mock Form Component ---
const ApplicationFormPlaceholder = ({ product }) => {
  if (product === 'Select One' || !product) return null;

  return (
    <div className="application-form-placeholder">
      <div className="form-header">
        <h3 className="form-title">Application for: **{product}**</h3>
        <p className="form-subtitle">**This is a placeholder form.** In a real application, the full application process for a {product} would appear here or on a new page.</p>
      </div>
      <div className="form-fields">
        {/* Mock form fields */}
        <input type="text" placeholder="Full Name" className="form-input" />
        <input type="email" placeholder="Email Address" className="form-input" />
        <input type="tel" placeholder="Phone Number" className="form-input" />
        <button className="form-submit-btn">Continue Application</button>
      </div>
    </div>
  );
};


// --- Home Page Content ---
const Home = ({ onNavigate, PAGES }) => {
  const [selectedApplication, setSelectedApplication] = useState(''); 

  const handleSelectChange = (event) => {
      setSelectedApplication(event.target.value);
  };
    
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
    <main className="middle-content-main">
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
        <div style={{ marginBottom: '1.5rem' }}>
          <DigitalBankingCarousel />
        </div>
        
        {/* --- Create Account CTA Button --- */}
        <div style={{ textAlign: 'center', margin: '0 0 3rem 0' }}>
            <button
                onClick={() => onNavigate(PAGES.CREATE_ACCOUNT)}
                className="btn btn-primary create-account-cta-btn"
                style={{
                    padding: '15px 30px',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    borderRadius: '50px',
                    background: 'linear-gradient(45deg, #007bff, #0056b3)',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 10px 20px rgba(0, 123, 255, 0.4)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    transform: 'scale(1)',
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 123, 255, 0.6)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 123, 255, 0.4)';
                }}
            >
                Create a New Bank Account
            </button>
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
                value={selectedApplication} 
                onChange={handleSelectChange} 
              >
                <option value="">Select One</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Fixed Deposit">Fixed Deposit</option>
                <option value="Mortgage">Mortgage</option>
              </select>
              <div className="hero-section-select-icon">
                <ChevronDown size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Conditional rendering of the application form */}
        {selectedApplication && selectedApplication !== '' && (
            <ApplicationFormPlaceholder product={selectedApplication} />
        )}
        
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
    </main>
  );
};

export default Home;