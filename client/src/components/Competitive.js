import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si';

const platforms = [
  {
    name: 'LeetCode',
    icon: <SiLeetcode />,
    count: '500+',
    detail: 'Problems Solved',
    color: '#ffa116',
    bg: 'rgba(255,161,22,0.1)',
  },
  {
    name: 'Codeforces',
    icon: <SiCodeforces />,
    count: 'Specialist',
    detail: 'Max Rating: 1421',
    color: '#1f8acb',
    bg: 'rgba(31,138,203,0.1)',
  },
  {
    name: 'CodeChef',
    icon: <SiCodechef />,
    count: '3-Star',
    detail: 'Max Rating: 1618',
    color: '#5b4638',
    bg: 'rgba(91,70,56,0.15)',
  },
];

const Competitive = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="competitive" className="section competitive" ref={ref}>
      <motion.div
        className="section__container"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Achievements & <span className="gradient-text">Certifications</span>
        </motion.h2>

        <motion.p
          className="competitive__intro"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Strong analytical thinking with solid grasp of data structures and algorithms.
        </motion.p>

        <div className="competitive__grid">
          {platforms.map((p, i) => (
            <motion.div
              key={i}
              className="competitive__card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + 0.15 * i, duration: 0.5, type: 'spring' }}
              whileHover={{ scale: 1.05, boxShadow: `0 8px 30px ${p.bg}` }}
              style={{ '--platform-color': p.color }}
            >
              <div className="competitive__card-icon" style={{ color: p.color, backgroundColor: p.bg }}>
                {p.icon}
              </div>
              <h3>{p.name}</h3>
              <motion.span
                className="competitive__count"
                style={{ color: p.color }}
              >
                {p.count}
              </motion.span>
              <p>{p.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="competitive__total"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <span className="competitive__total-number gradient-text">1000+</span>
          <span>Total Problems Solved</span>
        </motion.div>

        <motion.div
          className="competitive__certifications"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
          style={{ marginTop: '60px', textAlign: 'left', maxWidth: '800px', margin: '60px auto 0' }}
        >
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <li style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--accent-light)' }}>Deloitte Australia Data Analytics Job Simulation (Forage, 2025)</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>Completed the job simulation, gaining experience in data analysis, forensic technology, and dashboard reporting.</p>
              <a href="https://drive.google.com/file/d/1vE9YLeTngRKo3CffulevKbPThBFMw9yY/view?usp=sharing" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '12px', fontSize: '0.85rem', color: 'var(--accent-light)', textDecoration: 'underline' }}>View Certificate</a>
            </li>
            <li style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--accent-light)' }}>Supervised Machine Learning: Regression and Classification</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>Completed the course by DeepLearning.AI & Stanford University (Coursera, 2026).</p>
              <a href="https://drive.google.com/file/d/1CDRd69E831UaA_Zqe76I3hj3BkXSehPM/view?usp=sharing" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '12px', fontSize: '0.85rem', color: 'var(--accent-light)', textDecoration: 'underline' }}>View Certificate</a>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Competitive;
