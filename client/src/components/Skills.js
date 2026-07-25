import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'C++', 'SQL', 'Java', 'C'],
    color: '#d4d4d4',
  },
  {
    title: 'Core CS',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'System Design Fundamentals', 'Operating Systems', 'DBMS', 'Computer Networks'],
    color: '#c0c0c0',
  },
  {
    title: 'Machine Learning & AI',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'NLP', 'Feature Engineering', 'Model Evaluation', 'Hyperparameter Tuning'],
    color: '#a3a3a3',
  },
  {
    title: 'Generative AI & LLMs',
    skills: ['RAG', 'LangChain', 'LangGraph', 'Hugging Face Transformers', 'Text Embeddings', 'Fine-tuning', 'Prompt Engineering', 'Ollama'],
    color: '#e5e5e5',
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['scikit-learn', 'FastAPI', 'spaCy', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
    color: '#c0c0c0',
  },
  {
    title: 'Databases & Vector Stores',
    skills: ['MySQL', 'PostgreSQL', 'ChromaDB', 'FAISS'],
    color: '#b0b0b0',
  },
  {
    title: 'Search & Retrieval',
    skills: ['BM25', 'Vector Search', 'Hybrid Search', 'Cross-Encoder Reranking'],
    color: '#a3a3a3',
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Linux', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'Kaggle'],
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
