'use client';

import './Navigation.css';

export default function Navigation({ activeSection, scrollToSection }) {
  const navItems = ['about', 'experience', 'projects', 'contact'];

  return (
    <nav className="navigation">
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