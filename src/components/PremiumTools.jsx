import React from 'react';
import { motion } from 'framer-motion';
import { Server, Wrench, Layout, BookOpen } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend & UI',
    icon: <Layout size={24} color="var(--color-accent-1)" />,
    skills: ['React', 'Next.js', 'SolidJS', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design']
  },
  {
    title: 'Backend & Data',
    icon: <Server size={24} color="var(--color-accent-1)" />,
    skills: ['Node.js', 'Express', 'SQL', 'NoSQL', 'Firebase', 'Java', 'REST APIs']
  },
  {
    title: 'DevOps & Tools',
    icon: <Wrench size={24} color="var(--color-accent-1)" />,
    skills: ['Docker', 'GitHub Actions', 'CI/CD Automation', 'Git', 'Figma', 'Power BI']
  },
  {
    title: 'CS Core Concepts',
    icon: <BookOpen size={24} color="var(--color-accent-1)" />,
    skills: ['Data Structures', 'Algorithms', 'OOPs', 'Computer Networks', 'DBMS', 'Operating Systems']
  }
];

const PremiumTools = () => {
  return (
    <section id="skills" style={{ marginTop: '5rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '3rem' }}
      >
        <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1 }}>SKILLS /</h2>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'rgba(255,255,255,0.1)', margin: 0, lineHeight: 1 }}>TOOLS</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="hover-card"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'rgba(255, 122, 61, 0.1)', padding: '0.75rem', borderRadius: '12px' }}>
                {category.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', margin: 0 }}>{category.title}</h3>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '0.5rem 1rem', 
                    borderRadius: '20px', 
                    fontSize: '0.875rem', 
                    color: 'var(--text-main)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 122, 61, 0.1)';
                    e.currentTarget.style.borderColor = 'var(--color-accent-1)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = 'var(--text-main)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PremiumTools;
