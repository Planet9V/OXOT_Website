import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import PageTransition from './components/PageTransition';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import './global.css';

// Wrapper component to handle page transitions with routing
function AppContent() {
  const [isLoading, setIsLoading] = useState(false); // Disabled loading screen for immediate access
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');
  const location = useLocation();

  // Initial loading complete (disabled)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // Handle page changes
  useEffect(() => {
    // Update page name based on location
    const pageNames = {
      '/': 'Home',
      '/solutions': 'Solutions',
      '/services': 'Services',
      '/industries': 'Industries',
      '/about': 'About',
      '/contact': 'Contact'
    };

    const pageName = pageNames[location.pathname] || 'OXOT';
    setCurrentPage(pageName);

    // Page transitions disabled for immediate content access
    // setIsTransitioning(true);
    // const timer = setTimeout(() => {
    //   setIsTransitioning(false);
    // }, 1000);
    //
    // return () => clearTimeout(timer);
  }, [location]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
  };

  return (
    <>
      {/* Skip to content for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} onComplete={handleLoadingComplete} />

      {/* Page Transition Overlay */}
      <PageTransition
        isTransitioning={isTransitioning}
        pageName={currentPage}
        onComplete={handleTransitionComplete}
      />

      {/* Fixed Logo */}
      <Logo />

      {/* Navigation System */}
      <Navigation />

      {/* Main Content */}
      <main id="main-content" className="smooth-scroll-container js-scroll-container">
        <div className="smooth-scroll-content js-scroll-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/service/:serviceName" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/about" element={<SolutionsPage />} />
            <Route path="/contact" element={<IndustriesPage />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
