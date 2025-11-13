import React from 'react';
import './WaveBackground.css';

const WaveBackground = ({ children, variant = 'dark' }) => {
  return (
    <div className={`wave-background wave-background--${variant}`}>
      {/* Diagonal Stripe Pattern - NexBank Style */}
      <div className="wave-background__stripes"></div>

      {/* Outlined Typography - NexBank Style */}
      <div className="wave-background__typography">
        <span className="outlined-text">OXOT</span>
      </div>

      <div className="wave-background__content">{children}</div>
    </div>
  );
};

export default WaveBackground;
