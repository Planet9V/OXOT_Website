/**
 * MenuSlide Component
 * File: /src/components/MenuSlide.jsx
 * Created: 2025-11-13
 * Version: 1.0.0
 * Purpose: Individual slide component for menu slideshow system
 * Status: ACTIVE
 */

import React from 'react';
import PropTypes from 'prop-types';
import './MenuSlideshow.css';

/**
 * MenuSlide - Represents a single slide in the menu slideshow
 * Supports three types: title, content, services
 */
const MenuSlide = ({
  type,
  theme = 'dark',
  active = false,
  children,
  className = ''
}) => {
  // Build class names following BEM convention
  const classNames = [
    'menu-slide',
    `menu-slide--${type}`,
    `menu-slide--${theme}`,
    active && 'menu-slide--active',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <div className="menu-slide__content">
        {children}
      </div>
    </div>
  );
};

MenuSlide.propTypes = {
  type: PropTypes.oneOf(['title', 'content', 'services']).isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

/**
 * TitleSlide - Specialized slide for category titles
 */
export const TitleSlide = ({ title, active }) => (
  <MenuSlide type="title" theme="dark" active={active}>
    <div className="animated-background">
      {/* Animated diagonal stripes */}
      <div className="animated-background__stripe"></div>
      <div className="animated-background__stripe"></div>
      <div className="animated-background__stripe"></div>
      <div className="animated-background__stripe"></div>
    </div>
    <h1 className="menu-slide__title">{title}</h1>
  </MenuSlide>
);

TitleSlide.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool
};

/**
 * ContentSlide - Specialized slide for descriptions
 */
export const ContentSlide = ({ description, active }) => (
  <MenuSlide type="content" theme="dark" active={active}>
    <div className="geometric-background">
      {/* Static geometric patterns */}
      <div className="geometric-background__shape geometric-background__shape--circle"></div>
      <div className="geometric-background__shape geometric-background__shape--triangle"></div>
      <div className="geometric-background__shape geometric-background__shape--line"></div>
      <div className="geometric-background__shape geometric-background__shape--circle"></div>
    </div>
    <div className="menu-slide__description">
      <p>{description}</p>
    </div>
  </MenuSlide>
);

ContentSlide.propTypes = {
  description: PropTypes.string.isRequired,
  active: PropTypes.bool
};

/**
 * ServiceItem - Individual service entry component
 */
export const ServiceItem = ({ id, name, description, features, cta }) => (
  <div className="service-item">
    <div className="service-item__header">
      <span className="service-item__number">{id}</span>
      <h3 className="service-item__name">{name}</h3>
    </div>
    <p className="service-item__description">{description}</p>
    {features && features.length > 0 && (
      <ul className="service-item__features">
        {features.map((feature, index) => (
          <li key={index} className="service-item__feature">{feature}</li>
        ))}
      </ul>
    )}
    {cta && (
      <a
        href={cta.url}
        className={`service-item__cta service-item__cta--${cta.type}`}
      >
        {cta.label}
      </a>
    )}
  </div>
);

ServiceItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  cta: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary'])
  })
};

/**
 * ServicesSlide - Specialized slide for services list
 */
export const ServicesSlide = ({ services, active }) => (
  <MenuSlide type="services" theme="light" active={active}>
    <div className="menu-slide__services menu-slide__services--scrollable">
      {services.map((service, index) => (
        <ServiceItem
          key={service.id}
          {...service}
          style={{ animationDelay: `${index * 50}ms` }}
        />
      ))}
    </div>
  </MenuSlide>
);

ServicesSlide.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string),
      cta: PropTypes.object
    })
  ).isRequired,
  active: PropTypes.bool
};

export default MenuSlide;
