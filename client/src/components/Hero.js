import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaDownload, FaEnvelope, FaCode } from 'react-icons/fa';

const Hero = () => {
  const marqueeItems = [
    'SOFTWARE ENGINEERING',
    'BACKEND SYSTEMS & APIs',
    'AI/ML & RAG PIPELINES',
    'AI AGENTS (COPILOT · CODEX · OPENCODE)',
    'ALWAYS READY TO LEARN',
    'COMPETITIVE PROGRAMMING (1000+ DSA)',
    'PYTHON · C++ · FASTAPI',
    'RAPID ADAPTABILITY',
    'HIGH OWNERSHIP',
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <div className="hero__left">
          <motion.div
            className="hero__status"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="hero__status-dot" />
            AVAILABLE FOR SOFTWARE &amp; AI ROLES
          </motion.div>

          <motion.h1
            className="hero__heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Building software
            <br />
            &amp; ML systems that
            <br />
            scale.
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            I'm Vijay — CS Undergrad at IIIT Kota. I engineer scalable backend systems, 
            RESTful APIs, and end-to-end Machine Learning / RAG architectures in Python and C++, 
            leveraging modern AI coding agents (Copilot, Codex, OpenCode) to build with speed and precision.
          </motion.p>

          <motion.div
            className="hero__buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <a
              href="https://drive.google.com/file/d/YOUR_RESUME_LINK/view"
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              <FaDownload /> Download resume
            </a>
            <Link to="contact" smooth duration={500} offset={-70}>
              <button className="btn btn--outline">
                <FaEnvelope /> Get in touch
              </button>
            </Link>
            <Link to="projects" smooth duration={500} offset={-70}>
              <button className="btn btn--ghost">
                <FaCode /> View projects
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="hero__right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="hero__visual">
            <div className="hero__visual-inner">
              <div className="hero__visual-code">
                {'{'} <br />
                &nbsp;&nbsp;"name": "Vijay Meena", <br />
                &nbsp;&nbsp;"role": "Software & AI Engineer", <br />
                &nbsp;&nbsp;"stack": ["Python", "C++", "FastAPI"], <br />
                &nbsp;&nbsp;"ai_agents": ["Copilot", "Codex", "OpenCode"], <br />
                &nbsp;&nbsp;"traits": ["Quick Learner", "High Ownership"] <br />
                {'}'}
              </div>
            </div>
            <div className="hero__visual-badge">
              <div className="hero__visual-badge-label">PRIMARY STACK</div>
              <div className="hero__visual-badge-text">Software Eng · AI/ML · Python · FastAPI</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <motion.div
        className="marquee"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="marquee__track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee__item">{item}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
