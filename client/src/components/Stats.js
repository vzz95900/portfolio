import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaServer, FaCode, FaCertificate } from 'react-icons/fa';

const stats = [
  {
    icon: <FaBriefcase />,
    value: '4+',
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

// Helper to parse numeric values, decimals, prefixes, and suffixes
const parseStat = (stat) => {
  if (typeof stat.target === 'number') {
    return {
      target: stat.target,
      prefix: stat.prefix || '',
      suffix: stat.suffix || '',
      decimals: stat.decimals ?? (stat.target % 1 !== 0 ? 1 : 0),
      hasComma: Boolean(stat.hasComma),
    };
  }

  const raw = String(stat.value || '');
  const hasComma = raw.includes(',');
  const cleaned = raw.replace(/,/g, '');
  const match = cleaned.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);

  if (match) {
    const prefix = match[1] || '';
    const numStr = match[2];
    const suffix = match[3] || '';
    const target = parseFloat(numStr);
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
    return { target, prefix, suffix, decimals, hasComma };
  }

  return { target: 0, prefix: '', suffix: raw, decimals: 0, hasComma: false };
};

// Animated Counter component
const Counter = ({ stat, inView, delay = 0, duration = 1600 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const { target, prefix, suffix, decimals, hasComma } = parseStat(stat);

  useEffect(() => {
    if (!inView) {
      setDisplayValue(0);
      return;
    }

    let timeoutId;
    let animationFrameId;

    timeoutId = setTimeout(() => {
      let startTime = null;
      // Smooth ease-out cubic curve
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentVal = easeOutCubic(progress) * target;

        setDisplayValue(currentVal);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setDisplayValue(target);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [inView, target, duration, delay]);

  const formattedNumber =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : hasComma
      ? Math.round(displayValue).toLocaleString()
      : Math.round(displayValue).toString();

  return (
    <span>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};

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
              <div className="stats__card-value">
                <Counter
                  stat={stat}
                  inView={inView}
                  delay={200 + i * 100}
                  duration={1600}
                />
              </div>
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

