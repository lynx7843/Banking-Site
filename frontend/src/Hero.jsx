// Hero.js
import React from 'react';
import logo from './assets/logo.jpg';

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Left Side: Text Content */}
        <div className="hero-content">
          <h1 className="hero-headline">
            Essential Banking.<br />
            Pure Clarity.
          </h1>
          <p className="hero-subtext">
            Strip away the noise. Secure, simple digital banking designed for focus.
            No hidden fees, just black and white value.
          </p>
          <div className="hero-btns">
            <a href="#" className="btn btn-primary">Start Banking</a>
            <a href="#" className="btn btn-secondary">Learn More</a>
          </div>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="hero-image-wrapper">
            {/* Import image so Vite can handle it correctly */}
            <img src={logo} alt="Banking Concept Placeholder" className="hero-img-placeholder" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
