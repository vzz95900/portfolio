import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: 'SecureFlow AI',
    subtitle: 'Privacy-Preserving LLM Chrome Extension',
    link: 'https://github.com/vzz95900/SecureFlow-AI-Extension.git',
    linkText: 'Source Code',
    tags: ['Python', 'spaCy', 'BERT', 'Deep Learning', 'Tesseract OCR', 'PaddleOCR', 'Chrome APIs', 'CI/CD'],
    points: [
      'Built a Chrome extension that automatically detects and redacts PII, PHI, and financial information before LLM API requests; achieved 99.4% precision and 96.9% recall on a labeled evaluation set spanning 15 India-specific entity types.',
      'Designed a multi-stage NLP pipeline combining spaCy NER, 21 regex patterns, and a fine-tuned BERT classifier to perform entity detection and risk classification (High / Medium / Low).',
      'Integrated OCR-based redaction for scanned PDFs and images using Tesseract OCR and PaddleOCR, with automatic token restoration and CI/CD-based benchmarking for regression testing.',
    ],
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
  },
  {
    title: 'Context-Aware AI ChatBot',
    subtitle: 'RAG System with Adaptive Neural Weight Predictor',
    link: 'https://github.com/vzz95900/ContextRag.git',
    liveDemo: 'https://vizz17-context-aware-rag.hf.space',
    linkText: 'Source Code',
    tags: ['Python', 'FastAPI', 'ChromaDB', 'BM25', 'Adaptive Weight Predictor', 'Gemini', 'Groq'],
    points: [
      'Engineered a FastAPI backend with a modular, plug-and-play architecture supporting multiple LLM providers (Gemini, Groq, Ollama) and persistent chat memory across sessions.',
      'Formulated retrieval as a multi-objective subset-selection problem optimising relevance, coverage, and inter-document support; introduced an adaptive neural weight predictor (MLP) with hybrid dense–sparse retrieval (ChromaDB + BM25).',
      'Benchmarked against 7 baseline architectures (CRAG, Self-RAG, RAPTOR, GraphRAG) across 5 datasets, reducing context redundancy by 75.1% over Top-K while improving retrieval support by 3.1% over MMR.',
    ],
    gradient: 'linear-gradient(135deg, #1f1f1f 0%, #333333 100%)',
  },
  {
    title: 'Customer Churn Prediction Model',
    subtitle: 'End-to-end Machine Learning Pipeline',
    link: 'https://www.kaggle.com/code/vizzzop/churnpred',
    linkText: 'View on Kaggle',
    tags: ['Python', 'scikit-learn', 'Gradient Boosting', 'SMOTE', 'Pandas', 'Seaborn', 'Statistical Analysis'],
    points: [
      'Developed an end-to-end machine learning pipeline with modular, reusable Python components covering data preprocessing, feature engineering, model training, and evaluation.',
      'Compared four model architectures (Logistic Regression, Decision Tree, Random Forest, Gradient Boosting) using 5-fold stratified cross-validation on a 7,043-customer dataset; the selected Gradient Boosting model achieved AUC-ROC 0.83 and 71.7% churn recall.',
      'Applied SMOTE, threshold tuning, and feature-selection techniques (Mutual Information, RFE) to handle class imbalance and optimize model performance.',
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
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-card__link">
                    {project.link.includes('github.com') ? <FaGithub /> : <FaExternalLinkAlt />} {project.linkText}
                  </a>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noreferrer" className="project-card__link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
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
