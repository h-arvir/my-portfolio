'use client';

import './Hero.css';

export default function Hero({ isLoaded, scrollToSection }) {
  return (
    <section id="hero" className="hero-section">
      {/* Background geometric elements */}
      <div className="hero-background">
        <div className="geometric-dot animate-float hero-dot-1" style={{ animationDelay: '0s' }} />
        <div className="geometric-dot animate-float hero-dot-2" style={{ animationDelay: '1s' }} />
        <div className="geometric-dot animate-float hero-dot-3" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="hero-content">
        <div className={`hero-content-inner ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="hero-title">
            HARVIR
          </h1>
          
          <div className="hero-divider">
            <div className="hero-line"></div>
          </div>
          
          <p className="hero-subtitle">
            Student & Aspiring Developer
          </p>
          
          <p className="hero-description">
            Passionate about frontend development, cloud computing with AWS, and networking. 
            Currently learning and building projects to grow my skills.
          </p>
          
          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection('about')}
              className="hero-button-primary group"
            >
              <span className="hero-button-text">Explore Work</span>
              <span className="hero-button-arrow">↓</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hero-button-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-content">
          <div className="hero-scroll-line"></div>
          <div className="hero-scroll-text">Scroll</div>
        </div>
      </div>
    </section>
  );
}