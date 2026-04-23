import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    title: 'SDE Intern \u2013 Martech & GenAI',
    company: 'Bajaj Finserv',
    date: 'Feb 2026 - Present',
    desc: 'Engineered a 5-stage local CI pipeline mirroring GitHub Actions. Architected GitHub Copilot Spaces onboarding and dynamic LLD tooling. Drove measured frontend LCP improvements.'
  },
  {
    title: 'Technical Analyst Intern',
    company: 'Requin Solutions',
    date: 'Aug 2025 - Dec 2025',
    desc: 'Built ML workflows using KNIME and interactive Power BI dashboards to surface actionable business insights.'
  },
  {
    title: 'Web Design Intern',
    company: 'Dectify.in',
    date: 'Feb 2025 - Apr 2025',
    desc: 'Designed responsive client-facing web interfaces in collaboration with UI/UX teams.'
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ marginTop: '5rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '3rem' }}
      >
        <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'rgba(255,255,255,0.1)', margin: 0, lineHeight: 1 }}>EXPERIENCE</h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="hover-card"
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{exp.company}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5, maxWidth: '80%' }}>
              {exp.desc}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{exp.date}</p>

            <div className="card-arrow">
              <ArrowUpRight size={24} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
