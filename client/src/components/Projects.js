import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    number: 'PROJECT 01 — 2026',
    title: 'Context-Aware AI ChatBot (RAG)',
    subtitle: 'ADAPTIVE RAG SYSTEM WITH NEURAL WEIGHT PREDICTOR & HYBRID RETRIEVAL.',
    desc: 'Engineered a FastAPI backend with a modular, plug-and-play architecture supporting multiple LLM providers (Gemini, Groq, Ollama) and persistent chat memory across sessions. Formulated retrieval as a multi-objective subset-selection problem optimizing relevance, coverage, and inter-document support using an adaptive neural weight predictor (MLP) with ChromaDB and BM25.',
    metrics: [
      { label: 'REDUNDANCY CUT', value: '75.1%' },
      { label: 'RETRIEVAL GAIN', value: '3.1%' },
      { label: 'BASELINES COMPARED', value: '7' },
    ],
    tags: ['PYTHON', 'FASTAPI', 'CHROMADB', 'BM25', 'GEMINI', 'GROQ', 'OLLAMA'],
    github: 'https://github.com/vzz95900/ContextRag.git',
    liveDemo: 'https://vizz17-context-aware-rag.hf.space',
    mockupUrl: 'vizz17-context-aware-rag.hf.space',
  },
  {
    number: 'PROJECT 02 — 2026',
    title: 'WebProbe',
    subtitle: 'CONCURRENT WEB CRAWLER & WEBSITE HEALTH ANALYZER.',
    desc: 'Designed and built a full-stack concurrent web crawler with async Python workers, performing simultaneous multi-page crawling with per-domain rate limiting and robots.txt compliance. Developed 14 REST API endpoints in FastAPI with an interactive React + TypeScript dashboard featuring link graph visualization (React Flow), latency histograms, and 27 automated unit tests.',
    metrics: [
      { label: 'REST ENDPOINTS', value: '14' },
      { label: 'UNIT TESTS', value: '27' },
      { label: 'ARCHITECTURE', value: 'ASYNC' },
    ],
    tags: ['PYTHON', 'FASTAPI', 'ASYNCIO', 'REACT', 'TYPESCRIPT', 'SQLITE', 'REACT FLOW'],
    github: 'https://github.com/vzz95900/WebProbe',
    liveDemo: 'https://webprobe.vercel.app',
    mockupUrl: 'webprobe.vercel.app',
  },
  {
    number: 'PROJECT 03 — 2025',
    title: 'SecureFlow AI',
    subtitle: 'PRIVACY-PRESERVING LLM CHROME EXTENSION WITH PII REDACTION.',
    desc: 'A full-stack Chrome extension with a modular multi-stage pipeline detecting and redacting PII, PHI, and financial information before LLM API requests. Combines spaCy NER, 21 regex patterns, and fine-tuned BERT classifier with OCR-based redaction (Tesseract, PaddleOCR) and an automatic token-restoration system.',
    metrics: [
      { label: 'PRECISION', value: '99.4%' },
      { label: 'RECALL', value: '96.9%' },
      { label: 'ENTITY TYPES', value: '15' },
    ],
    tags: ['PYTHON', 'SPACY', 'BERT', 'DEEP LEARNING', 'TESSERACT OCR', 'PADDLEOCR', 'CHROME APIs', 'CI/CD'],
    github: 'https://github.com/vzz95900/SecureFlow-AI-Extension.git',
    mockupUrl: 'github.com / SecureFlow-AI',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="section__container">
        <div className="projects__header">
          <div>
            <motion.span
              className="section-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <FaGithub /> FEATURED WORK
            </motion.span>
            <motion.h2
              className="section__title"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Projects built
              <br />
              with purpose.
            </motion.h2>
          </div>
          <motion.p
            className="section__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Engineering discipline across full-stack software development,
            distributed async systems, and machine learning architectures.
          </motion.p>
        </div>

        <div className="projects__grid">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + 0.15 * idx, duration: 0.6 }}
            >
              <div className="project-card__info">
                <span className="project-card__number">{project.number}</span>
                <h3>{project.title}</h3>
                <span className="project-card__subtitle">{project.subtitle}</span>
                <p className="project-card__desc">{project.desc}</p>

                <div className="project-card__metrics">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="project-card__metric">
                      <div className="project-card__metric-label">{m.label}</div>
                      <div className="project-card__metric-value">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="project-card__tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-card__tag">{tag}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__link project-card__link--primary"
                    >
                      Live demo <FaExternalLinkAlt />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link project-card__link--outline"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>

              <div className="project-card__visual">
                <div className="project-card__visual-mockup">
                  <div className="project-card__visual-topbar">
                    <span className="project-card__visual-dot" />
                    <span className="project-card__visual-dot" />
                    <span className="project-card__visual-dot" />
                    <span className="project-card__visual-url">{project.mockupUrl}</span>
                  </div>
                  <div className="project-card__visual-content">
                    {project.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
