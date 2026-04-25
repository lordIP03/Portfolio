import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';

const experiences = [
  {
    title: 'SDE Intern – Martech & GenAI',
    company: 'Bajaj Finserv',
    date: 'Feb 2026 - Present',
    highlight: true,
    desc: [
      'Engineered a 5-stage local CI pipeline mirroring GitHub Actions, reducing local testing time by 40%.',
      'Architected GitHub Copilot Spaces onboarding and dynamic LLD tooling, boosting developer workflow efficiency by 30%.',
      'Drove measured frontend LCP improvements of up to 45%, optimizing core web vitals and overall user experience.',
      'Collaborated directly with senior engineers to design robust microservices and scalable AI features for 10,000+ daily queries.'
    ]
  },
  {
    title: 'Technical Analyst Intern',
    company: 'Requin Solutions',
    date: 'Aug 2025 - Dec 2025',
    desc: [
      'Built ML workflows using KNIME and interactive Power BI dashboards to surface actionable business insights.',
      'Analyzed large datasets to identify trends, driving a 15% improvement in operational efficiency.'
    ]
  },
  {
    title: 'Web Design Intern',
    company: 'Dectify.in',
    date: 'Feb 2025 - Apr 2025',
    desc: [
      'Designed responsive client-facing web interfaces in collaboration with UI/UX teams.',
      'Ensured 100% cross-browser compatibility and increased user engagement metrics by 20%.'
    ]
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
            style={exp.highlight ? { 
              background: 'linear-gradient(145deg, rgba(255, 122, 61, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%)',
              borderColor: 'rgba(255, 122, 61, 0.3)',
              boxShadow: '0 4px 30px rgba(255, 122, 61, 0.1)'
            } : {}}
          >
            {exp.highlight && (
              <div style={{ position: 'absolute', top: '-12px', left: '2rem', background: 'var(--color-accent-1)', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px', boxShadow: '0 4px 10px rgba(255,122,61,0.5)' }}>
                <Star size={12} fill="#fff" />
                CURRENT / MOST RECENT
              </div>
            )}
            <div className="exp-header-layout" style={{ marginTop: exp.highlight ? '0.5rem' : '0' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: exp.highlight ? 'var(--color-accent-1)' : '#fff', marginBottom: '0.25rem' }}>{exp.company}</h3>
                <h4 style={{ fontSize: '1.125rem', color: '#fff', fontWeight: 600 }}>{exp.title}</h4>
              </div>
              <p className="exp-date-text" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{exp.date}</p>
            </div>
            
            {Array.isArray(exp.desc) ? (
              <ul style={{ color: 'var(--text-muted)', margin: '0 0 1.5rem 1.25rem', lineHeight: 1.6, maxWidth: '90%' }}>
                {exp.desc.map((bullet, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{bullet}</li>
                ))}
              </ul>
            ) : (
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5, maxWidth: '80%' }}>
                {exp.desc}
              </p>
            )}

            <div className="card-arrow">
              <ArrowUpRight size={24} color={exp.highlight ? 'var(--color-accent-1)' : undefined} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
