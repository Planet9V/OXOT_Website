import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import MenuOverlay from './MenuOverlay';
import menuData from '../data/menuData';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOverlayOpen, setIsMenuOverlayOpen] = useState(false);
  const [currentMenuSection, setCurrentMenuSection] = useState(null);

  useEffect(() => {
    // Update body class based on nav state
    if (isOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }

    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keyup', handleEscape);
    return () => window.removeEventListener('keyup', handleEscape);
  }, [isOpen]);

  const navigationItems = [
    {
      page: 'service-institutional-banking',
      label: 'Institutional Banking',
      href: '/service/institutional-banking',
      menuSection: 'institutional',
      isService: true,
      anchors: [
        { index: 0, label: 'Financial Institutions', href: '#institutional_financial_institutions' },
        { index: 1, label: 'Investment Management', href: '#institutional_investment_management' },
        { index: 2, label: 'Government Banking', href: '#institutional_government_banking' }
      ]
    },
    {
      page: 'service-commercial-banking',
      label: 'Commercial Banking',
      href: '/service/commercial-banking',
      menuSection: 'commercial',
      isService: true,
      anchors: [
        { index: 0, label: 'Real Estate', href: '#commercial_real_estate' },
        { index: 1, label: 'Middle Market', href: '#commercial_middle_market' },
        { index: 2, label: 'Asset-Based Lending', href: '#commercial_asset_based' }
      ]
    },
    {
      page: 'service-mortgage-banking',
      label: 'Mortgage Banking',
      href: '/service/mortgage-banking',
      menuSection: 'mortgage',
      isService: true,
      anchors: [
        { index: 0, label: 'Correspondent Lending', href: '#mortgage_correspondent' },
        { index: 1, label: 'Warehouse Lending', href: '#mortgage_warehouse' }
      ]
    },
    {
      page: 'about',
      label: 'About',
      href: '/about',
      isService: false,
      anchors: []
    },
    {
      page: 'contact',
      label: 'Contact',
      href: '/contact',
      isService: false,
      anchors: []
    }
  ];

  const handleNavItemClick = (item, e) => {
    if (item.isService) {
      e.preventDefault();
      setCurrentMenuSection(item.menuSection);
      setIsMenuOverlayOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Navigation Toggle Button */}
      <button
        className="nav-toggle"
        aria-label="Navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="nav-toggle__close-label" aria-hidden={!isOpen}>
          Close
        </span>
        <span className="nav-toggle__picto-wrapper">
          <span className={`nav-toggle__picto nav-toggle__picto--close ${isOpen ? 'active' : ''}`}>
            <span className="nav-toggle__line"></span>
            <span className="nav-toggle__line"></span>
            <span className="nav-toggle__line"></span>
            <span className="nav-toggle__line"></span>
          </span>
          <span className={`nav-toggle__picto nav-toggle__picto--open ${!isOpen ? 'active' : ''}`}>
            <span className="nav-toggle__line"></span>
            <span className="nav-toggle__line"></span>
            <span className="nav-toggle__line"></span>
            <span className="nav-toggle__line"></span>
          </span>
        </span>
      </button>

      {/* Full Navigation Overlay */}
      <nav className={`nav ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="nav__background"></div>
        <div className="nav__inner">
          <div className="nav__inner__background"></div>

          <a className="nav__logo" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40">
              <text x="10" y="30" fill="currentColor" fontSize="32" fontWeight="300">
                OXOT
              </text>
            </svg>
          </a>

          <ul className="nav__items">
            {navigationItems.map((item, index) => (
              <li
                key={item.page}
                className="nav__item"
                data-page={item.page}
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                {item.isService ? (
                  <a
                    className="nav__item__link"
                    href={item.href}
                    onClick={(e) => handleNavItemClick(item, e)}
                  >
                    <span className="nav__item__arrow"></span>
                    <span className="nav__item__label">{item.label}</span>
                  </a>
                ) : (
                  <Link
                    className="nav__item__link"
                    to={item.href}
                    onClick={(e) => handleNavItemClick(item, e)}
                  >
                    <span className="nav__item__arrow"></span>
                    <span className="nav__item__label">{item.label}</span>
                  </Link>
                )}

                {item.anchors.length > 0 && (
                  <ul className="nav__anchors">
                    {item.anchors.map((anchor, anchorIndex) => (
                      <li
                        key={anchor.index}
                        className="nav__anchor"
                        style={{ transitionDelay: `${0.1 + anchorIndex * 0.085}s` }}
                      >
                        <a
                          data-index={anchor.index}
                          href={anchor.href}
                          className="nav__anchor__link js-anchor-link"
                          onClick={() => setIsOpen(false)}
                        >
                          {anchor.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <a
            className="nav__login underlined-cta"
            href="/onlinebanking"
            onClick={() => setIsOpen(false)}
          >
            <span className="nav__login__text">Online Banking Login</span>
          </a>
        </div>
      </nav>

      {isMenuOverlayOpen && currentMenuSection && (
        <MenuOverlay
          sectionId={currentMenuSection}
          isOpen={isMenuOverlayOpen}
          onClose={() => {
            setIsMenuOverlayOpen(false);
            setCurrentMenuSection(null);
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Navigation;
