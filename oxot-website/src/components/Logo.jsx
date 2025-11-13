import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <a className="logo" href="/">
      <div className="logo__inner">
        {/* SVG Text Logo */}
        <svg className="text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" aria-label="OXOT Logo">
          <text x="10" y="30" fill="currentColor" fontSize="32" fontWeight="300" fontFamily="system-ui, -apple-system, sans-serif">
            OXOT
          </text>
        </svg>

        {/* Colored Icon Elements */}
        <svg className="colored" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
          <path fill="#c10230" d="M21 17c6-7 12-7 13-7V0c-1 0-7 0-14 8z"/>
          <path fill="#154372" d="M14 17c-6-7-12-7-14-7V0c2 0 8 0 14 8z"/>
        </svg>

        {/* Animated Stripe Elements - Left Thin */}
        <svg className="left thin thin-stripe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
          <line x1="0" y1="17" x2="34" y2="17" stroke="#fff" strokeWidth="0.5" />
        </svg>

        {/* Animated Stripe Elements - Right Thin */}
        <svg className="right thin thin-stripe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
          <line x1="0" y1="17" x2="34" y2="17" stroke="#fff" strokeWidth="0.5" />
        </svg>

        {/* Animated Stripe Elements - Left Bold */}
        <svg className="left bold bold-stripe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
          <line x1="0" y1="17" x2="34" y2="17" stroke="#fff" strokeWidth="5.5" />
        </svg>

        {/* Animated Stripe Elements - Right Bold */}
        <svg className="right bold bold-stripe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
          <line x1="0" y1="17" x2="34" y2="17" stroke="#fff" strokeWidth="5.5" />
        </svg>

        {/* Corner Bar Elements */}
        <div className="left top bar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
            <path d="M0,0 L34,0" stroke="#fff" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        <div className="left bottom bar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
            <path d="M0,34 L34,34" stroke="#fff" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        <div className="right top bar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
            <path d="M0,0 L34,0" stroke="#fff" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        <div className="right bottom bar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
            <path d="M0,34 L34,34" stroke="#fff" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      </div>
    </a>
  );
};

export default Logo;
