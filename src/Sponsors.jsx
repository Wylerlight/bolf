import React from "react";
import "./Sponsors.css";

const SponsorsMarquee = ({ sponsors, scrollSpeed }) => {
  // Ensure scrollSpeed is a valid number and apply a fallback
  const speed = scrollSpeed || 10; // Default speed to 10s if not provided

  return (
    <div className="marquee-wrapper">
      <div className="marquee" style={{ animationDuration: `${speed}s` }}>
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-item">
            {sponsor}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsMarquee;
