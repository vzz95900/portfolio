import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaServer, FaCode, FaCertificate } from 'react-icons/fa';

const stats = [
  {
    icon: <FaBriefcase />,
    value: '4',
    label: 'PROJECTS SHIPPED',
    desc: 'production software & ML builds',
    number: '01',
  },
  {
    icon: <FaServer />,
    value: '14+',
    label: 'REST ENDPOINTS',
    desc: 'FastAPI & async architectures',
    number: '02',
  },
  {
    icon: <FaCode />,
    value: '1000+',
    label: 'DSA PROBLEMS',
    desc: 'LeetCode, CodeChef & Codeforces',
    number: '03',
  },
  {
    icon: <FaCertificate />,
    value: 'Top 2.2%',
    label: 'AMAZON ML SCHOOL',
    desc: 'selected nationwide (3k / 134k+)',
    number: '04',
  },
];

const Stats = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="stats" ref={ref}>
      <div className="stats__inner">
        <div className="stats__header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">
              <FaCertificate /> PROOF IN NUMBERS
            </span>
          </motion.div>

          <motion.h2
            className="section__title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Signals recruiters
            <br />
            can scan fast.
          </motion.h2>
        </div>

        <div className="stats__grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stats__card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + 0.1 * i, duration: 0.5 }}
            >
              <div className="stats__card-top">
                <span className="stats__card-icon">{stat.icon}</span>
                <span className="stats__card-number-label">{stat.number}</span>
              </div>
              <div className="stats__card-value">{stat.value}</div>
              <div className="stats__card-label">{stat.label}</div>
              <div className="stats__card-desc">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
