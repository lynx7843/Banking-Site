// Features.js
import React from 'react';

function Features() {
  return (
    <section className="features-section container">
        <div className="features-header">
            <h2>Designed for Efficiency.</h2>
            <p>Everything you need.</p>
        </div>

      <div className="features-grid">
        {/* Feature Card 1 */}
        <div className="feature-card">
            {/* Placeholder for icon */}
           <div className="icon-placeholder">■</div>
           <h3>Global Spending</h3>
           <p>Use your monochrome card anywhere contactless payments are accepted around the world.</p>
        </div>

        {/* Feature Card 2 */}
        <div className="feature-card card-dark">
           <div className="icon-placeholder icon-light">□</div>
           <h3>Smart Savings</h3>
           <p>High-yield savings accounts without the confusing tiers or colorful gimmicks.</p>
        </div>

        {/* Feature Card 3 */}
        <div className="feature-card">
           <div className="icon-placeholder">■</div>
           <h3>Business Focus</h3>
           <p>Tools built to help manage cash flow and keep your business accounts in the black.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
