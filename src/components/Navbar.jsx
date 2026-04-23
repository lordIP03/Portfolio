import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(26, 26, 26, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      }}
    >
      <nav className="container flex justify-between items-center" style={{ padding: '1rem 1.5rem' }}>
        <a href="#" className="text-2xl font-bold text-gradient">Ishan Pathak</a>
        
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>About</a>
          <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Projects</a>
          <a href="#experience" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Experience</a>
          <a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Contact</a>
          <a href="#contact" className="btn-primary" style={{ marginLeft: '1.5rem' }}>Hire Me</a>
        </div>
        
        <button className="md:hidden" style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass-panel"
          style={{ margin: '0 1.5rem 1rem 1.5rem', padding: '1rem', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        >
          <div className="flex-col space-y-4">
            <a href="#about" onClick={() => setIsOpen(false)} style={{ color: '#fff', textDecoration: 'none', display: 'block' }}>About</a>
            <a href="#projects" onClick={() => setIsOpen(false)} style={{ color: '#fff', textDecoration: 'none', display: 'block' }}>Projects</a>
            <a href="#experience" onClick={() => setIsOpen(false)} style={{ color: '#fff', textDecoration: 'none', display: 'block' }}>Experience</a>
            <a href="#contact" onClick={() => setIsOpen(false)} style={{ color: '#fff', textDecoration: 'none', display: 'block' }}>Contact</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary" style={{ width: '100%', textAlign: 'center', marginTop: '1rem' }}>Hire Me</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
