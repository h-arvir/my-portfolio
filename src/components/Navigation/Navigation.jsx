'use client';

import { useState, useEffect } from 'react';
import './Navigation.css';

export default function Navigation({ activeSection, scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = ['about', 'experience', 'projects', 'contact'];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavClick = (section) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we've scrolled past the hero section (roughly)
      setIsScrolled(currentScrollY > 100);
      
      // Hide/show navigation based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past hero
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`navigation ${isVisible ? 'navigation-visible' : 'navigation-hidden'}`}>
      <div className="navigation-container">
        <div className="navigation-content">
          <a href="/" className="navigation-logo">
            HARVIR
          </a>
          <div className="navigation-menu">
            {navItems.map((section, index) => (
              <div key={section} className="navigation-item">
                <button
                  onClick={() => scrollToSection(section)}
                  className={`navigation-link ${
                    activeSection === section ? 'navigation-link-active' : ''
                  }`}
                >
                  {section}
                </button>
              </div>
            ))}
          </div>
          <div className="navigation-mobile">
            <button 
              className="navigation-mobile-button"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              menu
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`navigation-mobile-menu ${isMobileMenuOpen ? 'navigation-mobile-menu-open' : ''}`}>
        {/* Close button inside mobile menu */}
        <button 
          className="navigation-mobile-close"
          onClick={toggleMobileMenu}
          aria-label="Close mobile menu"
        >
          close
        </button>
        
        <div className="navigation-mobile-menu-content">
          {navItems.map((section, index) => (
            <button
              key={section}
              onClick={() => handleMobileNavClick(section)}
              className={`navigation-mobile-link ${
                activeSection === section ? 'navigation-mobile-link-active' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}