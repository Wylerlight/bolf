import React from 'react';
import './Sponsors.css';

const SponsorsMarquee = ({ sponsors, scrollSpeed, tier = 'gold' }) => {
  // Ensure scrollSpeed is a valid number and apply a fallback
  const speed = scrollSpeed || 15; // Default speed to 15s if not provided

  // Use sponsors array as-is, no duplication
  const sponsorItems = sponsors;

  return (
    <div className={`marquee-container ${tier}`}>
      <div
        className="marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: tier === 'platinum' ? 'reverse' : 'normal',
        }}
      >
        {sponsorItems.map((sponsor, index) => (
          <div key={`${sponsor}-${index}`} className="sponsor-card">
            <div className="sponsor-content">
              <span className="sponsor-name">{sponsor}</span>
              {tier === 'platinum' && (
                <div className="sponsor-badge">PLATINUM</div>
              )}
              {tier === 'gold' && <div className="sponsor-badge">GOLD</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsMarquee;
