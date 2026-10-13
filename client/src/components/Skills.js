import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLaptopCode, FaServer, FaBrain, FaRobot, FaDatabase, FaSearch, FaCode, FaTools } from 'react-icons/fa';

const skillCategories = [
  {
    icon: <FaLaptopCode />,
    number: '/01',
    title: 'Software Engineering & Core CS',
    desc: 'Fundamental computer science principles and software system design.',
    skills: ['DATA STRUCTURES & ALGORITHMS', 'OOP', 'SYSTEM DESIGN', 'OPERATING SYSTEMS', 'DBMS', 'COMPUTER NETWORKS'],
  },
  {
    icon: <FaServer />,
    number: '/02',
    title: 'Backend & Full-Stack Systems',
    desc: 'High-concurrency servers, async workflows, and modern web interfaces.',
    skills: ['FASTAPI', 'REACT', 'TYPESCRIPT', 'ASYNCIO', 'REST APIs', 'REACT FLOW', 'SQLITE'],
  },
  {
    icon: <FaRobot />,
    number: '/03',
    title: 'Generative AI & LLMs',
    desc: 'RAG architectures, agentic pipelines, and LLM integrations.',
    skills: ['RAG', 'LANGCHAIN', 'LANGGRAPH', 'HUGGING FACE', 'EMBEDDINGS', 'PROMPT ENGINEERING', 'OLLAMA'],
  },
  {
    icon: <FaBrain />,
    number: '/04',
    title: 'Machine Learning & Data Science',
    desc: 'Supervised & unsupervised learning, NLP, and model evaluation.',
    skills: ['SUPERVISED LEARNING', 'NLP', 'FEATURE ENGINEERING', 'MODEL EVALUATION', 'BERT', 'SCIKIT-LEARN'],
  },
  {
    icon: <FaDatabase />,
    number: '/05',
    title: 'Databases & Vector Stores',
    desc: 'Relational databases, indexing, and vector similarity search.',
    skills: ['POSTGRESQL', 'MYSQL', 'CHROMADB', 'FAISS', 'SQLITE'],
  },
  {
    icon: <FaSearch />,
    number: '/06',
    title: 'Search & Information Retrieval',
    desc: 'Dense-sparse hybrid search, ranking algorithms, and BM25.',
    skills: ['BM25', 'VECTOR SEARCH', 'HYBRID SEARCH', 'CROSS-ENCODER RERANKING', 'SUBSET SELECTION'],
  },
  {
    icon: <FaCode />,
    number: '/07',
    title: 'Programming Languages',
    desc: 'Strong fluency in statically typed and scripting languages.',
    skills: ['PYTHON', 'C++', 'SQL', 'JAVA', 'C', 'TYPESCRIPT', 'JAVASCRIPT'],
  },
  {
    icon: <FaTools />,
    number: '/08',
    title: 'Tools & Platforms',
    desc: 'Version control, Linux environments, and CI/CD testing pipelines.',
    skills: ['GIT', 'GITHUB', 'LINUX', 'VS CODE', 'CI/CD', 'JUPYTER', 'KAGGLE'],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="section__container">
        <div className="skills__header">
          <div>
            <motion.span
              className="section-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <FaLaptopCode /> SKILL ARCHITECTURE
            </motion.span>
            <motion.h2
              className="section__title"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Software engineering
              <br />
              &amp; AI depth.
            </motion.h2>
          </div>
          <motion.p
            className="section__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From high-throughput backend APIs and full-stack React dashboards to ML model training
            and RAG optimization — built on hands-on project experience.
          </motion.p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              className="skills__category"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * ci, duration: 0.5 }}
            >
              <div className="skills__category-header">
                <div className="skills__category-icon">{cat.icon}</div>
                <span className="skills__category-number">{cat.number}</span>
              </div>
              <h3 className="skills__category-title">{cat.title}</h3>
              <p className="skills__category-desc">{cat.desc}</p>
              <div className="skills__tags">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={si}
                    className="skills__tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.15 * ci + 0.05 * si, duration: 0.3 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
