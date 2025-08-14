'use client';

import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      title: 'Frontend Development',
      status: 'Learning Phase',
      description: 'Building responsive web applications using modern frameworks and libraries. Focus on clean, semantic HTML, efficient CSS, and interactive JavaScript.',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind'],
      icon: '◐'
    },
    {
      title: 'AWS Cloud Computing',
      status: 'Exploring',
      description: 'Learning cloud infrastructure, serverless computing, and deployment strategies. Understanding how to leverage AWS services for scalable applications.',
      skills: ['EC2', 'S3', 'Lambda', 'CloudFront', 'RDS'],
      icon: '◑'
    },
    {
      title: 'Networking',
      status: 'Fundamentals',
      description: 'Understanding network protocols, security principles, and infrastructure design. Building knowledge of how systems communicate and interact.',
      skills: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'Security', 'Routing'],
      icon: '◒'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header fade-in-section">
          <h2 className="experience-title">EXPERIENCE</h2>
          <div className="experience-divider">
            <div className="experience-line"></div>
            <div className="experience-square"></div>
          </div>
        </div>
        
        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <div key={experience.title} className="experience-card fade-in-section">
              <div className="experience-card-inner group">
                <div className="experience-card-overlay" />
                <div className="experience-card-content">
                  <div className="experience-card-header">
                    <div className="experience-icon">{experience.icon}</div>
                    <span className="experience-status">
                      {experience.status}
                    </span>
                  </div>
                  <h3 className="experience-card-title">
                    {experience.title}
                  </h3>
                  <p className="experience-description">
                    {experience.description}
                  </p>
                  <div className="experience-skills">
                    {experience.skills.map((skill) => (
                      <span key={skill} className="experience-skill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}