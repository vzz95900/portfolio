import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLayerGroup, FaCogs, FaShieldAlt, FaSyncAlt, FaTerminal } from 'react-icons/fa';

const steps = [
  {
    icon: <FaLayerGroup />,
    number: '01 / RESEARCH',
    title: 'Understand constraints & design architecture.',
    desc: 'I start by understanding the problem, data shapes, API boundaries, and edge cases — planning clean system architecture before writing code.',
  },
  {
    icon: <FaCogs />,
    number: '02 / BUILD',
    title: 'Build the pipeline, API, and core architecture together.',
    desc: 'Backend APIs, async workers, database schemas, and data pipelines are engineered as one cohesive, maintainable system.',
  },
  {
    icon: <FaShieldAlt />,
    number: '03 / HARDEN',
    title: 'Test & optimize for production reliability.',
    desc: 'Unit testing, rate limiting, error boundaries, evaluation metrics, and CI/CD checks ensure solutions are dependable in real-world scenarios.',
  },
  {
    icon: <FaSyncAlt />,
    number: '04 / LEARN & ITERATE',
    title: 'Stay curious, learn rapidly & improve.',
    desc: 'Always ready to learn. I dive into emerging tooling, benchmark new libraries, study open-source patterns, and welcome feedback to continuously elevate system quality.',
  },
];

const Process = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="process" ref={ref}>
      <div className="process__container">
        <div className="process__left">
          <motion.span
            className="section-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <FaTerminal /> MY BUILD PROCESS
          </motion.span>

          <motion.h2
            className="section__title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From idea
            <br />
            to shipped
            <br />
            product.
          </motion.h2>

          <motion.p
            className="section__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether it's a concurrent backend server, high-throughput REST APIs, or an ML/RAG system — I bring 
            engineering discipline, algorithmic fundamentals, and a relentless appetite to learn into one practical workflow.
          </motion.p>
        </div>

        <div className="process__steps">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="process__step"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + 0.12 * i, duration: 0.5 }}
            >
              <div className="process__step-header">
                <div className="process__step-icon">{step.icon}</div>
                <span className="process__step-number">{step.number}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
