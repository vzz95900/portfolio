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
    tags: ['Python', 'spaCy', 'BERT', 'Tesseract OCR', 'PaddleOCR', 'Chrome APIs', 'CI/CD'],
    points: [
      'Built a Chrome extension that automatically detects and redacts PII, PHI, and financial information before LLM API requests; achieved 99.4% precision and 96.9% recall on a labeled evaluation set spanning 15 India-specific entity types.',
      'Designed a multi-stage NLP pipeline combining spaCy NER, 21 regex patterns, and a fine-tuned BERT classifier to perform entity detection and risk classification (High / Medium / Low).',
      'Integrated OCR-based redaction for scanned PDFs and images using Tesseract OCR and PaddleOCR, with automatic token restoration and CI/CD-based benchmarking for regression testing.',
    ],
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
  },
  {
    title: 'Context-Aware AI ChatBot',
    subtitle: 'RAG System with Cross-Encoder Reranking',
    link: 'https://github.com/vzz95900/ContextRag.git',
    linkText: 'Source Code',
    tags: ['Python', 'FastAPI', 'ChromaDB', 'Cross-Encoder Reranking', 'Gemini', 'Groq', 'Ollama'],
    points: [
      'Developed a Retrieval-Augmented Generation (RAG) system using ChromaDB and cross-encoder reranking to retrieve relevant, non-redundant context and reduce hallucinated responses.',
      'Improved answer faithfulness by 13.6% over a baseline vector-search pipeline using document cross-validation, reranking, and redundancy-aware retrieval.',
      'Built a FastAPI backend with persistent chat memory, OCR-based document processing, and plug-and-play support for multiple LLM providers including Gemini, Groq, and Ollama.',
    ],
    gradient: 'linear-gradient(135deg, #1f1f1f 0%, #333333 100%)',
  },
  {
    title: 'Customer Churn Prediction Model',
    subtitle: 'End-to-end Machine Learning Pipeline',
    link: 'https://www.kaggle.com/code/vizzzop/churnpred',
    linkText: 'View on Kaggle',
    tags: ['Python', 'scikit-learn', 'Gradient Boosting', 'SMOTE', 'Pandas', 'Seaborn'],
    points: [
      'Compared Logistic Regression, Decision Tree, Random Forest, and Gradient Boosting models using 5-fold stratified cross-validation on the Blastchar Telco dataset (7,043 customers); Gradient Boosting achieved AUC-ROC 0.83 and 71.7% churn recall.',
      'Engineered six domain-specific features including Customer Lifetime Value (CLV) and Charge-Per-Tenure; applied SMOTE, threshold tuning, Mutual Information, and Recursive Feature Elimination (RFE) for feature selection.',
      'Built an end-to-end machine learning pipeline covering data preprocessing, feature engineering, model selection, hyperparameter tuning, and performance evaluation.',
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
