import React from 'react';
import { Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--color-bg-2)', padding: '2rem 0', borderTop: '1px solid var(--color-glass-border)' }}>
      <div className="container text-center">
        <p style={{ color: 'var(--text-muted)' }}>&copy; {new Date().getFullYear()} Ishan Pathak. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/lordIP03?tab=repositories" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
            <Github size={24} />
          </a>
          <a href="mailto:pathakishan003@gmail.com" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
