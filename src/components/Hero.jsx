import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-giant-text">SOFTWARE</h1>
        <h1 className="hero-giant-text shadow text-gradient">ENGINEER</h1>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginTop: '2rem', maxWidth: '600px', lineHeight: 1.6 }}
      >
        Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into scalable, beautifully crafted enterprise systems and robust full-stack applications.
      </motion.p>

      {/* Stats Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ display: 'flex', gap: '3rem', marginTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1 }}>+3</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>Years of<br/>Experience</p>
        </div>
        <div>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1 }}>+15</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>Projects<br/>Completed</p>
        </div>
        <div>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1 }}>+300</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>GitHub<br/>Commits</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
