import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Figma, Coffee, GitBranch, Layers } from 'lucide-react';

const skills = [
  { name: 'JavaScript, TypeScript, Java', icon: <Code size={20} /> },
  { name: 'React, Next.js, SolidJS', icon: <Layers size={20} /> },
  { name: 'Node.js, Express, SQL', icon: <Coffee size={20} /> },
  { name: 'CI/CD, GitHub Actions', icon: <GitBranch size={20} /> },
  { name: 'Docker, Power BI', icon: <Figma size={20} /> },
  { name: 'Responsive UI Design', icon: <Smartphone size={20} /> },
];

const About = () => {
  return (
    <section id="about" className="py-20" style={{ position: 'relative' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid-3 items-center" style={{ gap: '2rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-6 glass-panel-hover"
            style={{ gridColumn: 'span 2' }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-main)' }}>My Journey</h3>
            <p className="mb-4 text-lg text-muted" style={{ color: 'var(--text-muted)' }}>
              I'm a Software Engineering Intern at Bajaj Finserv, specializing in full-stack development, CI/CD automation, and developer tooling. 
              Currently pursuing my B.Tech in Information Technology at Manipal University Jaipur, I am passionate about building systems that improve team productivity, code quality, and end-user performance at scale.
            </p>
            <p className="text-lg text-muted" style={{ color: 'var(--text-muted)' }}>
              From architecting GitHub Copilot Spaces onboarding environments to delivering production-grade UI components in React and SolidJS, I focus on scalable, automated, and performant solutions. I continually expand my toolkit across the latest frontend and backend frameworks to create robust enterprise applications.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-6 glass-panel-hover"
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-main)' }}>Key Competencies</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center" style={{ gap: '1rem', color: 'var(--text-main)' }}>
                  <div style={{ color: 'var(--color-accent-3)', background: 'rgba(45, 212, 191, 0.1)', padding: '0.5rem', borderRadius: '8px' }}>
                    {skill.icon}
                  </div>
                  <span className="font-semibold">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
