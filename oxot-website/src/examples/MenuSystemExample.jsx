/**
 * MenuSystemExample Component
 * File: /src/examples/MenuSystemExample.jsx
 * Created: 2025-11-13
 * Version: 1.0.0
 * Purpose: Example implementation showing how to use the menu system
 * Status: ACTIVE - Reference Implementation
 */

import React, { useState } from 'react';
import MenuOverlay from '../components/MenuOverlay';
import '../components/MenuSlideshow.css';

/**
 * MenuSystemExample - Demonstrates how to integrate the menu system
 * Shows usage for Institutional, Commercial, and Mortgage sections
 */
const MenuSystemExample = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);

  /**
   * Open menu for specific section
   */
  const openMenu = (sectionId) => {
    setCurrentSection(sectionId);
    setIsMenuOpen(true);
  };

  /**
   * Close menu
   */
  const closeMenu = () => {
    setIsMenuOpen(false);
    // Wait for close animation before clearing section
    setTimeout(() => setCurrentSection(null), 600);
  };

  return (
    <div className="menu-example">
      {/* Example Navigation Buttons */}
      <nav className="menu-example__nav">
        <h1>NexBank Menu System</h1>
        <p>Click a section to view the 3-slide menu:</p>

        <div className="menu-example__buttons">
          <button
            className="menu-example__button"
            onClick={() => openMenu('institutional')}
          >
            Institutional Banking
          </button>

          <button
            className="menu-example__button"
            onClick={() => openMenu('commercial')}
          >
            Commercial Banking
          </button>

          <button
            className="menu-example__button"
            onClick={() => openMenu('mortgage')}
          >
            Mortgage Services
          </button>
        </div>

        <div className="menu-example__instructions">
          <h2>How It Works:</h2>
          <ul>
            <li><strong>Slide 1 (Title):</strong> Displays section title with animated background</li>
            <li><strong>Slide 2 (Description):</strong> Shows detailed description with geometric patterns</li>
            <li><strong>Slide 3 (Services):</strong> Lists all services with scrollable content</li>
          </ul>

          <h3>Navigation:</h3>
          <ul>
            <li>Auto-advance: Slide 1→2 (2s), Slide 2→3 (3s)</li>
            <li>Manual: Use arrow buttons on the right</li>
            <li>Keyboard: ↑/↓ arrows or ESC to close</li>
            <li>Click outside or × button to close</li>
          </ul>

          <h3>Features:</h3>
          <ul>
            <li>✅ Smooth fade transitions (800ms)</li>
            <li>✅ Responsive design (mobile-friendly)</li>
            <li>✅ Keyboard navigation support</li>
            <li>✅ Cascade animation on service items</li>
            <li>✅ Scrollable services list</li>
            <li>✅ Reusable across all sections</li>
          </ul>
        </div>

        <div className="menu-example__code">
          <h2>Usage Example:</h2>
          <pre>{`
// 1. Import components
import MenuOverlay from './components/MenuOverlay';

// 2. Add state management
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [currentSection, setCurrentSection] = useState(null);

// 3. Create open/close handlers
const openMenu = (sectionId) => {
  setCurrentSection(sectionId);
  setIsMenuOpen(true);
};

const closeMenu = () => {
  setIsMenuOpen(false);
};

// 4. Use the component
<MenuOverlay
  sectionId={currentSection}
  isOpen={isMenuOpen}
  onClose={closeMenu}
/>

// 5. Trigger from buttons
<button onClick={() => openMenu('institutional')}>
  Institutional Banking
</button>
          `}</pre>
        </div>
      </nav>

      {/* Menu Overlay */}
      <MenuOverlay
        sectionId={currentSection}
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />

      {/* Example Styles */}
      <style jsx>{`
        .menu-example {
          min-height: 100vh;
          background: #f5f5f5;
          padding: 40px 20px;
        }

        .menu-example__nav {
          max-width: 1200px;
          margin: 0 auto;
          background: white;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .menu-example__nav h1 {
          font-size: 32px;
          margin-bottom: 16px;
          color: #2a2a2a;
        }

        .menu-example__nav p {
          font-size: 18px;
          color: #666;
          margin-bottom: 24px;
        }

        .menu-example__buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .menu-example__button {
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          background: #2a2a2a;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .menu-example__button:hover {
          background: #1a1a1a;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .menu-example__instructions {
          margin-top: 40px;
          padding-top: 40px;
          border-top: 2px solid #e0e0e0;
        }

        .menu-example__instructions h2,
        .menu-example__instructions h3 {
          color: #2a2a2a;
          margin-top: 24px;
          margin-bottom: 12px;
        }

        .menu-example__instructions ul {
          list-style: none;
          padding-left: 0;
        }

        .menu-example__instructions li {
          padding: 8px 0;
          padding-left: 24px;
          position: relative;
          color: #666;
          line-height: 1.6;
        }

        .menu-example__instructions li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #2a2a2a;
        }

        .menu-example__code {
          margin-top: 40px;
          padding-top: 40px;
          border-top: 2px solid #e0e0e0;
        }

        .menu-example__code pre {
          background: #1a1a1a;
          color: #ffffff;
          padding: 24px;
          border-radius: 8px;
          overflow-x: auto;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .menu-example__buttons {
            flex-direction: column;
          }

          .menu-example__button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default MenuSystemExample;
