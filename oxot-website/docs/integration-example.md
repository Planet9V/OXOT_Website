# Menu System Integration Example

**File:** /docs/integration-example.md
**Created:** 2025-11-13
**Version:** 1.0.0
**Purpose:** Step-by-step guide to integrate menu system with existing navigation
**Status:** ACTIVE

---

## Integration with Existing Navigation

This guide shows how to integrate the 3-slide menu system with your existing navigation component.

## Step 1: Update Navigation Component

```jsx
// src/components/Navigation.jsx
import React, { useState } from 'react';
import MenuOverlay from './MenuOverlay';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);

  const openMenu = (sectionId) => {
    setCurrentSection(sectionId);
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="main-navigation">
        <div className="nav-logo">NexBank</div>

        <ul className="nav-menu">
          <li>
            <button
              className="nav-link"
              onClick={() => openMenu('institutional')}
            >
              Institutional
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => openMenu('commercial')}
            >
              Commercial
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => openMenu('mortgage')}
            >
              Mortgage
            </button>
          </li>
        </ul>
      </nav>

      {/* Menu Overlay */}
      <MenuOverlay
        sectionId={currentSection}
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </>
  );
};

export default Navigation;
```

## Step 2: Add Navigation Styles

```css
/* src/components/Navigation.css */
.main-navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.nav-logo {
  font-size: 24px;
  font-weight: 700;
  color: #2a2a2a;
}

.nav-menu {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #2a2a2a;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(42, 42, 42, 0.05);
  color: #1a1a1a;
}

@media (max-width: 768px) {
  .main-navigation {
    padding: 0 20px;
  }

  .nav-menu {
    gap: 16px;
  }

  .nav-link {
    font-size: 14px;
    padding: 6px 12px;
  }
}
```

## Step 3: Update App.jsx

```jsx
// src/App.jsx
import React from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <HomePage />
    </div>
  );
}

export default App;
```

## Step 4: Test the Integration

1. **Click "Institutional"** → Menu opens with Institutional Banking data
2. **Navigate slides** → Auto-advance through 3 slides
3. **Click "Commercial"** → Menu switches to Commercial Banking
4. **Close menu** → Click × or ESC key
5. **Keyboard navigation** → Use ↑/↓ arrows

## Alternative: Dropdown Menu Integration

If you have a dropdown menu instead of direct buttons:

```jsx
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuClick = (sectionId) => {
    setDropdownOpen(false); // Close dropdown
    setCurrentSection(sectionId);
    setIsMenuOpen(true);
  };

  return (
    <>
      <nav className="main-navigation">
        <div className="nav-dropdown">
          <button onClick={() => setDropdownOpen(!dropdownOpen)}>
            Services ▾
          </button>

          {dropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={() => handleMenuClick('institutional')}>
                Institutional Banking
              </button>
              <button onClick={() => handleMenuClick('commercial')}>
                Commercial Banking
              </button>
              <button onClick={() => handleMenuClick('mortgage')}>
                Mortgage Services
              </button>
            </div>
          )}
        </div>
      </nav>

      <MenuOverlay
        sectionId={currentSection}
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </>
  );
};
```

## Alternative: Hero Section Integration

Integrate with hero/landing page buttons:

```jsx
// src/components/HeroSection.jsx
import React, { useState } from 'react';
import MenuOverlay from './MenuOverlay';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);

  const openMenu = (sectionId) => {
    setCurrentSection(sectionId);
    setIsMenuOpen(true);
  };

  return (
    <>
      <section className="hero">
        <h1>Welcome to NexBank</h1>
        <p>Comprehensive financial solutions for every need</p>

        <div className="hero-cta">
          <button
            className="hero-button hero-button--primary"
            onClick={() => openMenu('institutional')}
          >
            Institutional Solutions
          </button>
          <button
            className="hero-button hero-button--secondary"
            onClick={() => openMenu('commercial')}
          >
            Business Banking
          </button>
          <button
            className="hero-button hero-button--tertiary"
            onClick={() => openMenu('mortgage')}
          >
            Home Loans
          </button>
        </div>
      </section>

      <MenuOverlay
        sectionId={currentSection}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};
```

## Alternative: Card Grid Integration

Integrate with clickable service cards:

```jsx
// src/components/ServiceCards.jsx
import React, { useState } from 'react';
import MenuOverlay from './MenuOverlay';

const ServiceCards = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);

  const services = [
    {
      id: 'institutional',
      title: 'Institutional Banking',
      icon: '🏛️',
      description: 'Solutions for large organizations'
    },
    {
      id: 'commercial',
      title: 'Commercial Banking',
      icon: '🏢',
      description: 'Tailored business solutions'
    },
    {
      id: 'mortgage',
      title: 'Mortgage Services',
      icon: '🏠',
      description: 'Making homeownership accessible'
    }
  ];

  return (
    <>
      <div className="service-grid">
        {services.map(service => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => {
              setCurrentSection(service.id);
              setIsMenuOpen(true);
            }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-cta">Explore →</span>
          </div>
        ))}
      </div>

      <MenuOverlay
        sectionId={currentSection}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};
```

## Common Integration Patterns

### Pattern 1: Single Menu Instance
✅ **Recommended:** One MenuOverlay component shared across app

```jsx
// App.jsx
function App() {
  const [menuState, setMenuState] = useState({
    isOpen: false,
    section: null
  });

  // Share this context across components
  const openMenu = (sectionId) => {
    setMenuState({ isOpen: true, section: sectionId });
  };

  return (
    <MenuContext.Provider value={{ openMenu }}>
      <Navigation />
      <HeroSection />
      <ServiceCards />

      <MenuOverlay
        sectionId={menuState.section}
        isOpen={menuState.isOpen}
        onClose={() => setMenuState({ isOpen: false, section: null })}
      />
    </MenuContext.Provider>
  );
}
```

### Pattern 2: Context API Integration
✅ **For larger apps:** Use React Context

```jsx
// src/context/MenuContext.jsx
import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);

  const openMenu = (sectionId) => {
    setCurrentSection(sectionId);
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, currentSection, openMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within MenuProvider');
  }
  return context;
};

// Usage in components:
import { useMenu } from '../context/MenuContext';

const Navigation = () => {
  const { openMenu } = useMenu();

  return (
    <button onClick={() => openMenu('institutional')}>
      Institutional
    </button>
  );
};
```

### Pattern 3: Route-Based Opening
✅ **For URL-driven menus:** Open menu from URL

```jsx
import { useSearchParams } from 'react-router-dom';

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const menuSection = searchParams.get('menu');

  const closeMenu = () => {
    searchParams.delete('menu');
    setSearchParams(searchParams);
  };

  return (
    <MenuOverlay
      sectionId={menuSection}
      isOpen={!!menuSection}
      onClose={closeMenu}
    />
  );
};

// Open via URL: /page?menu=institutional
```

## Best Practices

1. **Single Instance:** Use one MenuOverlay component per app
2. **State Management:** Lift menu state to appropriate level (App, Context)
3. **Cleanup:** Always clear section when closing menu
4. **Accessibility:** Maintain focus management when opening/closing
5. **Performance:** Lazy load MenuOverlay if not used immediately

## Troubleshooting

### Issue: Menu opens but shows no content
**Solution:** Verify sectionId matches menuData keys exactly:
```javascript
// Correct: 'institutional' (lowercase)
// Wrong: 'Institutional' (capitalized)
```

### Issue: Multiple menus interfere with each other
**Solution:** Use single MenuOverlay instance, not one per component

### Issue: Menu doesn't close on route change
**Solution:** Add route change listener:
```jsx
useEffect(() => {
  return () => setIsMenuOpen(false);
}, [location.pathname]);
```

---

**END OF INTEGRATION GUIDE**
