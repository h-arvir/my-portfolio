'use client';

import './Projects.css';

export default function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Qna Analysis',
      description: 'A webapp made for last night of a real engineering student\'s study by dumping the previous exam Ques Papers',
      status: 'Live',
      tech: ['Next.js', 'Tailwind', 'React', 'Vercel'],
      links: [
        { label: 'View', url: 'YOUR_WEBAPP_URL_HERE' },
        { label: 'Code', url: 'YOUR_GITHUB_REPO_URL_HERE' }
      ]
    },
    {
      number: '02',
      title: 'Cloud Dashboard',
      description: 'Currently working on exciting projects that combine frontend development with cloud technologies and real-time data.',
      status: 'In Progress',
      tech: ['React', 'AWS', 'Node.js', 'WebSocket'],
      links: ['In Progress']
    },
    {
      number: '03',
      title: 'Network Monitor',
      description: 'Planning to build applications that leverage AWS services and demonstrate networking concepts with visual interfaces.',
      status: 'Planning',
      tech: ['Python', 'AWS', 'D3.js', 'FastAPI'],
      links: ['Planning']
    }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Live':
        return 'project-status-live';
      case 'In Progress':
        return 'project-status-progress';
      case 'Planning':
        return 'project-status-planning';
      default:
        return 'project-status-default';
    }
  };

  const isLinkActive = (link) => {
    if (typeof link === 'string') {
      return link === 'View' || link === 'Code';
    }
    return link.url && link.url !== 'YOUR_WEBAPP_URL_HERE' && link.url !== 'YOUR_GITHUB_REPO_URL_HERE';
  };

  const handleLinkClick = (link) => {
    if (typeof link === 'object' && link.url) {
      window.open(link.url, '_blank');
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header fade-in-section">
          <h2 className="projects-title">PROJECTS</h2>
          <div className="projects-line"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.number} className="project-card fade-in-section">
              <div className="project-card-inner group">
                <div className="project-card-overlay" />
                <div className="project-card-content">
                  <div className="project-card-header">
                    <div className="project-number">
                      {project.number}
                    </div>
                    <span className={`project-status ${getStatusClass(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="project-tech-item">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.links.map((link, linkIndex) => (
                      <button 
                        key={typeof link === 'string' ? link : link.label}
                        className={`project-link ${isLinkActive(link) ? 'project-link-active' : 'project-link-inactive'}`}
                        disabled={!isLinkActive(link)}
                        onClick={() => handleLinkClick(link)}
                      >
                        {typeof link === 'string' ? link : link.label}
                      </button>
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