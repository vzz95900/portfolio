import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaMapMarkerAlt, FaRocket, FaBrain, FaCogs, FaUsers } from 'react-icons/fa';

const traits = [
  {
    icon: <FaRocket />,
    title: 'Ready to Learn & Adapt',
    desc: 'High learning velocity with zero tech dogma. Deeply enthusiastic about picking up new languages, frameworks, or domain tools to tackle ambitious challenges.',
  },
  {
    icon: <FaBrain />,
    title: 'Algorithmic Problem Solving',
    desc: '1,000+ DSA problems solved across LeetCode (500+), Codeforces (Specialist), and CodeChef (3★). Solid foundational logic and clean optimization in Python and C++.',
  },
  {
    icon: <FaCogs />,
    title: 'Production Engineering Mindset',
    desc: 'Beyond notebook prototypes. From 27 automated unit tests & async workers in WebProbe to CI/CD pipelines in SecureFlow AI—I build for stability and maintainability.',
  },
  {
    icon: <FaUsers />,
    title: 'High Ownership & Modern Workflow',
    desc: 'Proactive communicator and dependable team player. Fluently utilizes modern developer tooling and AI coding assistants (Copilot, Codex) as natural productivity multipliers.',
  },
];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="section__container">
        <div className="about__header">
          <motion.span
            className="section-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <FaRocket /> ABOUT &amp; ENGINEERING MINDSET
          </motion.span>
          <motion.h2
            className="section__title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Curious engineer.
            <br />
            Fast learner.
            <br />
            Built to ship.
          </motion.h2>
          <motion.p
            className="section__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a Computer Science undergraduate at <strong>IIIT Kota (2023–2027)</strong>. 
            I engineer scalable backend systems, REST APIs, and end-to-end ML/RAG pipelines in Python and C++ — 
            bringing relentless curiosity, algorithmic rigor, and disciplined engineering to every problem.
          </motion.p>
        </div>

        {/* Core Principles & Strengths */}
        <div className="about__traits-grid">
          {traits.map((trait, i) => (
            <motion.div
              key={i}
              className="about__trait-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + 0.1 * i, duration: 0.5 }}
            >
              <div className="about__trait-icon">{trait.icon}</div>
              <h3 className="about__trait-title">{trait.title}</h3>
              <p className="about__trait-desc">{trait.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Education & Location summary bar */}
        <motion.div
          className="about__footer-bar"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          <div className="about__footer-item">
            <FaGraduationCap className="about__footer-icon" />
            <div>
              <strong>IIIT Kota</strong> — B.Tech Computer Science and Engineering (2023–2027)
            </div>
          </div>
          <div className="about__footer-item">
            <FaMapMarkerAlt className="about__footer-icon" />
            <div>
              Jaipur / Kota, Rajasthan, India
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
