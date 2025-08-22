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
                - I'm a student <br /> 
                - In India <br />
                - Will passout in 2026 ( from university ) <br />
                - I like cloud and networking mostly ( and ai code completions ) <br />
                - Do freelancing <br />
                - Open to work <br />
              </p>
              <p className="about-paragraph">
                Currently focusing on building practical skills in frontend development, 
                exploring AWS cloud services, and understanding networking.
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
                      style={{ width: "100% "}}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-card-container fade-in-section">
            <div className="about-card">
              <div className="about-card-content">
                <div className="about-card-icon">h</div>
                <p className="about-card-title">How strange it is, to be anything at all</p>
                <div className="about-card-divider" />
                <p className="about-card-subtitle">
                  {/* i am removing this para for now */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}