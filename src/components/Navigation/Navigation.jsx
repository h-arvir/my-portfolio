'use client';

import { useState, useEffect } from 'react';
import './Navigation.css';

export default function Navigation({ activeSection, scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const navItems = ['about', 'experience', 'projects', 'contact'];

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

  return (
    <nav className={`navigation ${isVisible ? 'navigation-visible' : 'navigation-hidden'}`}>
      <div className="navigation-container">
        <div className="navigation-content">
          <div className="navigation-logo">
            HARVIR
          </div>
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
            <button className="navigation-mobile-button">
              <div className="navigation-mobile-icon">
                <div className="navigation-mobile-line"></div>
                <div className="navigation-mobile-line"></div>
                <div className="navigation-mobile-line"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}