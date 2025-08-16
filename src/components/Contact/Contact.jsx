'use client';

import './Contact.css';

export default function Contact() {
  const contactMethods = [
    {
      icon: '◐',
      title: 'Email',
      subtitle: 'Drop me a line',
      contact: 'harvirr19@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=harvirr19@gmail.com&su=Hello&body=I%20wanna%20hire%20you'
    },
    {
      icon: '◑',
      title: 'LinkedIn',
      subtitle: 'Let\'s connect',
      contact: 'Connect with me',
      link: 'https://www.linkedin.com/in/harvir-singh-7579a021a'
    },
    {
      icon: '◒',
      title: 'GitHub',
      subtitle: 'View my code',
      contact: 'Follow my work',
      link: 'https://github.com/h-arvir'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header fade-in-section">
          <h2 className="contact-title">CONTACT</h2>
          <div className="contact-line"></div>
        </div>
        
        <div className="contact-intro fade-in-section">
          <p className="contact-main-text">
            Let's connect and discuss opportunities to learn and grow together.
          </p>
          <p className="contact-sub-text">
            Always open to new collaborations, learning opportunities, and meaningful conversations about technology.
          </p>
        </div>
        
        <div className="contact-methods">
          {contactMethods.map((contact, index) => (
            <div key={contact.title} className="contact-method fade-in-section">
              <div className="contact-method-inner group">
                <div className="contact-method-overlay" />
                <div className="contact-method-content">
                  <div className="contact-method-icon">
                    {contact.icon}
                  </div>
                  <h3 className="contact-method-title">
                    {contact.title}
                  </h3>
                  <p className="contact-method-subtitle">
                    {contact.subtitle}
                  </p>
                  <a 
                    href={contact.link}
                    className="contact-method-link"
                  >
                    {contact.contact}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-footer fade-in-section">
          <div className="contact-footer-content">
            <div className="contact-footer-left">
              <div className="contact-footer-brand">portfolio</div>
              {/* <div className="contact-footer-divider" />
              <div className="contact-footer-year">
                Portfolio 2025 
              </div> */}
            </div>
            <div className="contact-footer-right">
              <div className="geometric-dot contact-footer-dot" />
              <p className="contact-footer-copyright">
                © {new Date().getFullYear()} Harvir Singh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}