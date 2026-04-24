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
        style={{ color: 'var(--text-muted)', fontSize: '1.5rem', marginTop: '2rem', maxWidth: '800px', lineHeight: 1.6 }}
      >
        Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into scalable, beautifully crafted enterprise systems and robust full-stack applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{ marginTop: '3rem' }}
      >
        <a 
          href="assets/Resume.pdf" 
          download 
          className="btn-primary" 
          style={{ borderRadius: '50px', padding: '1rem 2.5rem', fontSize: '1.125rem' }}
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
