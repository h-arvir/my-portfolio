'use client';

import './About.css';

export default function About() {
  const skills = [
    { title: 'Frontend Development', icon: '◐' },
    { title: 'AWS Cloud Computing', icon: '◑' },
    { title: 'Networking', icon: '◒' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-content fade-in-section">
            <div className="about-header">
              <h2 className="about-title">ABOUT</h2>
              <div className="about-line"></div>
            </div>
            
            <div className="about-text">
              <p className="about-paragraph">
                I'm a student with a passion for technology and continuous learning. 
                My journey in tech spans across multiple domains, from creating engaging 
                user interfaces to understanding cloud infrastructure.
              </p>
              <p className="about-paragraph">
                Currently focusing on building practical skills in frontend development, 
                exploring AWS cloud services, and understanding networking fundamentals.
              </p>
            </div>
            
            <div className="about-skills">
              {skills.map((skill, index) => (
                <div key={skill.title} className="skill-item group">
                  <div className="skill-header">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-title">
                      {skill.title}
                    </span>
                  </div>
                  <div className="skill-progress">
                    <div 
                      className="skill-progress-bar"
                      style={{ width: `${(index + 1) * 20 + 20}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-card-container fade-in-section">
            <div className="about-card">
              <div className="about-card-content">
                <div className="about-card-icon">∞</div>
                <p className="about-card-title">Always Learning</p>
                <div className="about-card-divider" />
                <p className="about-card-subtitle">
                  Embracing the infinite journey of knowledge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}