import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: 'SecureFlow AI',
    subtitle: 'Privacy-Preserving LLM Chrome Extension',
    github: 'https://github.com/vzz95900/SecureFlow-AI-Extension.git',
    tags: ['spaCy', 'BERT', 'Tesseract', 'PaddleOCR', 'Chrome Extension', 'NLP'],
    points: [
      'Developed a Chrome extension that detects and sanitizes PII, PHI, and financial data in real time before LLM API calls.',
      'Designed a multi-layer NLP pipeline using spaCy NER, regex heuristics, and fine-tuned BERT for entity-level risk scoring (High/Medium/Low).',
      'Integrated OCR-based redaction for scanned PDFs and images using Tesseract and PaddleOCR with automatic response token restoration.',
      'Achieved ~92% reduction in privacy leakage risk on evaluation datasets with automated CI/CD benchmarking.',
    ],
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
  },
  {
    title: 'Context-Aware RAG Engine',
    subtitle: 'Multi-Objective Semantic Document Q&A',
    github: 'https://github.com/vzz95900/ContextRag.git',
    tags: ['FastAPI', 'ChromaDB', 'BM25', 'Cross-Encoder', 'Multi-Objective Optimization', 'Gemini', 'Groq', 'HuggingFace'],
    points: [
      'Formulated retrieval as a multi-objective subset-selection problem optimising relevance, evidence coverage, and inter-document support via greedy selection, achieving 82.1% faithfulness (+13.6% over Top-K baseline).',
      'Engineered a rigorous evaluation framework with 4 baseline comparisons (Top-K, Hybrid/RRF, MMR), weight sensitivity ablation studies, and LLM-as-judge faithfulness scoring.',
      'Deployed a production-ready FastAPI backend with Glassmorphism SPA frontend, persistent chat history, Vision-based OCR fallback, and a unified plug-in interface supporting 5 LLM providers.',
    ],
    gradient: 'linear-gradient(135deg, #1f1f1f 0%, #333333 100%)',
  },
  {
    title: 'CodeCrak AI',
    subtitle: 'Intelligent Code Review & Bug Detection Agent',
    github: 'https://github.com/vzz95900/CodeCrak.git',
    tags: ['FastAPI', 'Tree-sitter', 'Pygments', 'Gemini', 'OpenAI', 'Groq', 'SSE Streaming', 'SQLite'],
    points: [
      'Built an AST-aware static analysis engine using Tree-sitter to detect security vulnerabilities, anti-patterns, and code smells across 5 languages (Python, JS/TS, Java, C++) with deterministic pattern matching.',
      'Designed a layered review pipeline combining local AST analysis with LLM semantic review (Gemini/OpenAI/Groq auto-fallback), classifying issues into 5 categories × 4 severity levels.',
      'Deployed a FastAPI backend with SSE real-time streaming, GitHub PR integration, Pygments syntax highlighting, report export, and a premium Glassmorphism SPA with Chart.js dashboards.',
    ],
    gradient: 'linear-gradient(135deg, #171717 0%, #262626 100%)',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="section projects" ref={ref}>
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
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="projects__grid">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * idx, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-card__header" style={{ background: project.gradient }}>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>

              <div className="project-card__body">
                <div className="project-card__tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-card__tag">{tag}</span>
                  ))}
                </div>

                <ul className="project-card__points">
                  {project.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + 0.1 * i, duration: 0.4 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>

                <div className="project-card__links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link">
                    <FaGithub /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
