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
    count: '250+',
    detail: 'Specialist Rated',
    color: '#1f8acb',
    bg: 'rgba(31,138,203,0.1)',
  },
  {
    name: 'CodeChef',
    icon: <SiCodechef />,
    count: '250+',
    detail: '3-Star Rated',
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
          Competitive <span className="gradient-text">Programming</span>
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
      </motion.div>
    </section>
  );
};

export default Competitive;
