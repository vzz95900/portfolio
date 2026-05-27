import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'C++', 'Java', 'C'],
    color: '#d4d4d4',
  },
  {
    title: 'Machine Learning',
    skills: ['Regression', 'Classification', 'Clustering', 'Feature Engineering', 'Model Evaluation', 'NLP Fundamentals'],
    color: '#a3a3a3',
  },
  {
    title: 'Generative AI',
    skills: ['LLMs', 'RAG', 'LangChain', 'Prompt Engineering', 'Embeddings', 'Vector Databases', 'Fine-tuning', 'HuggingFace Transformers'],
    color: '#e5e5e5',
  },
  {
    title: 'Libraries / Frameworks',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'scikit-learn', 'PyTorch', 'spaCy', 'OpenCV', 'FastAPI', 'Streamlit', 'PaddleOCR'],
    color: '#c0c0c0',
  },
  {
    title: 'Databases',
    skills: ['SQL', 'FAISS', 'ChromaDB', 'BM25', 'Vector Search'],
    color: '#b0b0b0',
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'CI/CD', 'REST APIs', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'Kaggle', 'Linux'],
    color: '#d4d4d4',
  },
];

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="section skills" ref={ref}>
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
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="skills__grid">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              className="skills__category"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * ci, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="skills__category-title" style={{ borderColor: cat.color }}>
                {cat.title}
              </h3>
              <div className="skills__tags">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={si}
                    className="skills__tag"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.15 * ci + 0.06 * si, duration: 0.35 }}
                    whileHover={{
                      scale: 1.12,
                      backgroundColor: cat.color,
                      color: '#fff',
                    }}
                    style={{ '--tag-color': cat.color }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
