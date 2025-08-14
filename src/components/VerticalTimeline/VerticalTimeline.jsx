'use client';

import { useState, useEffect } from 'react';
import './VerticalTimeline.css';

export default function VerticalTimeline({ activeSection, scrollToSection }) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkSection, setIsDarkSection] = useState(false);

  const timelineItems = [
    { id: 'hero', label: 'Home', icon: '●' },
    { id: 'about', label: 'About', icon: '●' },
    { id: 'experience', label: 'Experience', icon: '●' },
    { id: 'projects', label: 'Projects', icon: '●' },
    { id: 'contact', label: 'Contact', icon: '●' }
  ];

  // Define which sections have dark backgrounds
  const darkSections = ['experience', 'contact']; // Add more section IDs here if they have dark backgrounds

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show timeline when scrolled past hero section
      setIsVisible(currentScrollY > 100);
      
      // Calculate scroll progress
      const progress = (currentScrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update dark section state when active section changes
  useEffect(() => {
    setIsDarkSection(darkSections.includes(activeSection));
  }, [activeSection]);

  return (
    <div className={`vertical-timeline ${isVisible ? 'vertical-timeline-visible' : 'vertical-timeline-hidden'} ${isDarkSection ? 'vertical-timeline-dark' : 'vertical-timeline-light'}`}>
      <div className="vertical-timeline-container">
        {/* Progress line */}
        <div className="vertical-timeline-line">
          <div 
            className="vertical-timeline-progress"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
        
        {/* Timeline items */}
        <div className="vertical-timeline-items">
          {timelineItems.map((item, index) => (
            <div key={item.id} className="vertical-timeline-item">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`vertical-timeline-button ${
                  activeSection === item.id ? 'vertical-timeline-button-active' : ''
                }`}
                title={item.label}
              >
                <span className="vertical-timeline-icon">{item.icon}</span>
                <span className="vertical-timeline-label">{item.label}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}