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
        <div className="hero-content-inner">
          <h1 className={`hero-title ${isLoaded ? 'animate-hero-entrance' : ''} cursor-target`}>
            harvir
          </h1>
          
          <div className={`hero-divider ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.3s' }}>
            <div className="hero-line"></div>
          </div>
          
          <p className={`hero-subtitle ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>
            Student & Aspiring Developer
          </p>
          
          <p className={`hero-description ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.7s' }}>
            Decent and exploring further in frontend development, cloud computing with AWS, and networking. <br />
            Pronouns are he/harcoded.
          </p>
          
          {/* <div className="hero-buttons">
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
          </div> */}
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