import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" style={{ marginTop: '5rem', paddingBottom: '5rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '3rem' }}
      >
        <h2 className="hero-giant-text" style={{ fontSize: '4rem' }}>LET'S WORK</h2>
        <h2 className="hero-giant-text shadow" style={{ fontSize: '4rem' }}>TOGETHER</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <form action="https://formspree.io/f/xzzvvbll" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 calc(50% - 0.75rem)' }}>
              <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Name</label>
              <input type="text" name="name" placeholder="Your Name" required className="glass-input" style={{ background: 'rgba(255,255,255,0.05)', border: 'none' }} />
            </div>
            
            <div style={{ flex: '1 1 calc(50% - 0.75rem)' }}>
              <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Email</label>
              <input type="email" name="email" placeholder="Your@email.com" required className="glass-input" style={{ background: 'rgba(255,255,255,0.05)', border: 'none' }} />
            </div>
          </div>

          <div>
             <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Options</label>
             <select name="budget" className="glass-input" style={{ background: 'rgba(255,255,255,0.05)', border: 'none', appearance: 'none', color: '#fff' }}>
                <option value="Select..." style={{ color: '#000' }}>Select...</option>
                <option value="Hiring / Recruitment" style={{ color: '#000' }}>Hiring / Recruitment</option>
                <option value="Freelance Project" style={{ color: '#000' }}>Freelance Project</option>
                <option value="Other" style={{ color: '#000' }}>Other</option>
             </select>
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Message</label>
            <textarea name="message" placeholder="Message" rows="5" required className="glass-input" style={{ background: 'rgba(255,255,255,0.05)', border: 'none' }}></textarea>
          </div>
          
          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
            Submit
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
