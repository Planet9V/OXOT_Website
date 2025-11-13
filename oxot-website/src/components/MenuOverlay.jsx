/**
 * MenuOverlay Component
 * File: /src/components/MenuOverlay.jsx
 * Created: 2025-11-13
 * Version: 1.0.0
 * Purpose: Full-screen menu overlay wrapper with open/close animations
 * Status: ACTIVE
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MenuSlideshow from './MenuSlideshow';
import { getMenuData } from '../data/menuData';
import './MenuSlideshow.css';

/**
 * MenuOverlay - Manages the full-screen menu experience
 * Handles opening/closing animations and data loading
 */
const MenuOverlay = ({ sectionId, isOpen, onClose }) => {
  const [menuData, setMenuData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  /**
   * Load menu data when section changes
   */
  useEffect(() => {
    if (sectionId && isOpen) {
      const data = getMenuData(sectionId);
      setMenuData(data);
    }
  }, [sectionId, isOpen]);

  /**
   * Handle opening animation
   */
  useEffect(() => {
    if (isOpen) {
      // Trigger opening animation
      setIsVisible(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      // Start closing animation
      setIsClosing(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
        setMenuData(null);
        document.body.style.overflow = ''; // Restore scrolling
      }, 600); // Match closing animation duration
    }
  }, [isOpen]);

  /**
   * Handle ESC key to close
   */
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isVisible) return null;

  const overlayClasses = [
    'menu-overlay',
    isOpen && !isClosing && 'menu-overlay--open',
    isClosing && 'menu-overlay--closing'
  ].filter(Boolean).join(' ');

  return (
    <div
      className={overlayClasses}
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-title"
    >
      {menuData && (
        <MenuSlideshow
          data={menuData}
          onClose={onClose}
          isOpen={isOpen && !isClosing}
        />
      )}

      {/* Background overlay (click to close) */}
      <div
        className="menu-overlay__backdrop"
        onClick={onClose}
        aria-label="Close menu"
      />
    </div>
  );
};

MenuOverlay.propTypes = {
  sectionId: PropTypes.oneOf(['institutional', 'commercial', 'mortgage']),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default MenuOverlay;
