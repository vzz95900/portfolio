import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBrain, FaServer, FaShieldAlt, FaCode } from 'react-icons/fa';

const highlights = [
  { icon: <FaBrain />, title: 'AI / ML', desc: 'End-to-end ML pipelines & NLP' },
  { icon: <FaServer />, title: 'RAG Systems', desc: 'Vector search & semantic retrieval' },
  { icon: <FaShieldAlt />, title: 'Privacy AI', desc: 'PII detection & redaction' },
  { icon: <FaCode />, title: '1000+ Problems', desc: 'LeetCode, Codeforces & CodeChef' },
];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="section about" ref={ref}>
      <motion.div
        className="section__container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section__title" variants={itemVariants}>
          <span className="gradient-text">About</span> Me
        </motion.h2>

        <motion.p className="about__text" variants={itemVariants}>
          I'm a CS undergraduate at <strong>IIIT Kota (2023–2027)</strong> with hands-on experience 
          building end-to-end AI/ML systems, LLM pipelines, Generative AI applications, and 
          <strong> Agentic AI</strong> workflows with autonomous reasoning and tool use. Proficient in Python, 
          PyTorch, LangChain, FastAPI, and NLP. Delivered production-grade projects spanning RAG architectures, 
          privacy-preserving ML, and hallucination mitigation.
        </motion.p>

        <motion.div className="about__highlights" variants={containerVariants}>
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              className="about__card"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 12px 40px rgba(255,255,255,0.05)' }}
            >
              <div className="about__card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
