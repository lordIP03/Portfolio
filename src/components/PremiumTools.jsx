import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'React / Next.js', desc: 'Frontend Frameworks', icon: '⚛️' },
  { name: 'Node.js', desc: 'Backend Runtime', icon: '🟢' },
  { name: 'Docker', desc: 'Containerization', icon: '🐳' },
  { name: 'GitHub Actions', desc: 'CI/CD Automation', icon: '🐙' },
  { name: 'SQL / NoSQL', desc: 'Database Systems', icon: '🗄️' },
  { name: 'Tailwind / CSS', desc: 'Styling', icon: '🎨' }
];

const PremiumTools = () => {
  return (
    <section id="tools" style={{ marginTop: '5rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '3rem' }}
      >
        <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1 }}>PREMIUM</h2>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'rgba(255,255,255,0.1)', margin: 0, lineHeight: 1 }}>TOOLS</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.5rem' }}>
        {/* Responsive grid via inline CSS is tricky, so we rely on parent Flex/Grid or simply flex wrap */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ 
                flex: '1 1 calc(50% - 1.5rem)',
                minWidth: '250px',
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem' 
              }}
            >
              <div style={{ 
                width: '60px', height: '60px', 
                background: '#fff', borderRadius: '16px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                fontSize: '1.5rem' 
              }}>
                {tool.icon}
              </div>
              
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.125rem', fontWeight: 700, margin: 0 }}>{tool.name}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>{tool.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumTools;
