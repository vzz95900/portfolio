import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <motion.div
          className="hero__greeting"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="hero__wave">👋</span> Hello, I'm
        </motion.div>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Vijay <span className="gradient-text">Meena</span>
        </motion.h1>

        <motion.div
          className="hero__typing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              'AI/ML Enthusiast',
              2000,
              'Agentic AI Developer',
              2000,
              'Competitive Programmer',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="hero__typed"
          />
        </motion.div>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          CS Undergrad at IIIT Kota &bull; Building Agentic AI workflows & production-grade ML systems
        </motion.p>

        <motion.div
          className="hero__socials"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a href="https://github.com/vzz95900" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vijay-meena-a4b953292" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:vijaybyadwal589@gmail.com" className="hero__social-link" aria-label="Email">
            <FaEnvelope />
          </a>
        </motion.div>

        <motion.div
          className="hero__buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <Link to="projects" smooth duration={500} offset={-70}>
            <button className="btn btn--primary">View Projects</button>
          </Link>
          <a href="https://drive.google.com/file/d/1oXrOliAIAr93gWW62QOHpiEnV3cV5hlE/view?usp=sharing" target="_blank" rel="noreferrer">
            <button className="btn btn--outline"><FaFileDownload /> Resume</button>
          </a>
          <Link to="contact" smooth duration={500} offset={-70}>
            <button className="btn btn--outline">Get In Touch</button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <Link to="about" smooth duration={500} offset={-70}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <FaChevronDown className="hero__scroll-icon" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
