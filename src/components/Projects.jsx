import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'StackPilot-AI',
    desc: 'AI product assistant wrapping Next.js and Vercel AI SDK to transform ideas into developer-ready blueprints.',
    imgUrl: 'assets/stackpilot.png',
    link: 'https://stack-pilot-ai.vercel.app/',
    tags: ['React', 'Next.js', 'AI']
  },
  {
    title: 'Shopify App Clone',
    desc: 'Full-stack replica with end-to-end auth, CRUD operations, and persistent cart state hosted on Firebase.',
    imgUrl: 'assets/Shopify.png',
    link: 'https://my-shopify-app-beige.vercel.app/',
    tags: ['React', 'Firebase']
  },
  {
    title: 'PeakPursuit',
    desc: 'Sophisticated platform for camping recommendations using advanced JS and data analytics.',
    imgUrl: 'assets/peak.png',
    link: 'https://peak-pursuit-five.vercel.app/',
    tags: ['JS', 'Analytics']
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ marginTop: '5rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '3rem' }}
      >
        <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1 }}>RECENT</h2>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'rgba(255,255,255,0.1)', margin: 0, lineHeight: 1 }}>PROJECTS</h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {projects.map((proj, idx) => (
          <motion.a
            href={proj.link}
            target="_blank"
            rel="noreferrer"
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="hover-card project-card-layout"
          >
            {/* Project Image block */}
            <div style={{ width: '150px', height: '150px', flexShrink: 0, borderRadius: '12px', overflow: 'hidden', background: '#0B0B0B' }}>
              <img src={proj.imgUrl} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Content block */}
            <div style={{ flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{proj.title}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>{proj.desc}</p>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {proj.tags.map(tag => (
                  <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', color: '#fff' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover arrow top right */}
            <div className="card-arrow">
              <ArrowUpRight size={24} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
