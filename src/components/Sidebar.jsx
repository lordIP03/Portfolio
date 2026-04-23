import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Flame } from 'lucide-react';

const Sidebar = () => {
  return (
    <motion.aside 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="profile-card"
    >
      <div className="profile-image-container">
        <img src="assets/profile.jpeg" alt="Ishan Pathak" className="profile-image" />
      </div>

      <h1 className="profile-name">Ishan Pathak</h1>
      
      <div className="flame-icon">
        <Flame size={20} color="#fff" />
      </div>

      <p className="profile-bio">
        A Software Engineer who has built numerous high-impact systems, from AI product generators 
        to enterprise developer tooling.
      </p>

      <div className="profile-socials">
        <a href="https://github.com/lordIP03" target="_blank" rel="noreferrer" className="social-link">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/ishan-pathak-a741a3272/" target="_blank" rel="noreferrer" className="social-link">
          <Linkedin size={20} />
        </a>
        <a href="mailto:pathakishan003@gmail.com" className="social-link">
          <Mail size={20} />
        </a>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
