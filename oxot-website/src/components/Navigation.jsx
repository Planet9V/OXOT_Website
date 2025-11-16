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
      page: 'solutions',
      label: 'Solutions',
      href: '/solutions',
      menuSection: 'solutions',
      isService: true,
      anchors: [
        { index: 0, label: 'Breach Disclosure Mitigation', href: '#solution_breach_disclosure' },
        { index: 1, label: 'Digital Twin', href: '#solution_digital_twin' },
        { index: 2, label: 'Cyber Defender Program', href: '#solution_cyber_defender' }
      ]
    },
    {
      page: 'services',
      label: 'Services',
      href: '/services',
      menuSection: 'services',
      isService: true,
      anchors: [
        { index: 0, label: 'IEC 62443 Compliance', href: '#service_iec62443' },
        { index: 1, label: 'Railway Security', href: '#service_railway' },
        { index: 2, label: 'Data Center Security', href: '#service_datacenter' }
      ]
    },
    {
      page: 'knowledge',
      label: 'Knowledge Hub',
      href: '/articles',
      menuSection: 'knowledge',
      isService: true,
      anchors: [
        { index: 0, label: 'Technical Articles', href: '/articles' },
        { index: 1, label: 'Blind Spots', href: '/blindspots' },
        { index: 2, label: 'Simulations', href: '/simulations' }
      ]
    },
    {
      page: 'industries',
      label: 'Industries',
      href: '/industries',
      isService: false,
      anchors: []
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
            href="/contact"
            onClick={() => setIsOpen(false)}
          >
            <span className="nav__login__text">Request Consultation</span>
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
