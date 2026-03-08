import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBookOpen } from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const courses = [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Database Management Systems',
    'Computer Networks',
    'Software Engineering',
    'Object-Oriented System Design',
  ];

  return (
    <section id="education" className="section education" ref={ref}>
      <motion.div
        className="section__container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section__title" variants={itemVariants}>
          <span className="gradient-text">Education</span>
        </motion.h2>

        <motion.div className="education__card" variants={itemVariants}>
          <div className="education__icon">
            <FaGraduationCap />
          </div>
          <div className="education__info">
            <h3>Bachelor of Technology in Computer Science and Engineering</h3>
            <p className="education__school">Indian Institute of Information Technology Kota</p>
            <span className="education__year">2023 — 2027</span>
          </div>
        </motion.div>

        <motion.div className="education__courses" variants={itemVariants}>
          <h3 className="education__courses-title">
            <FaBookOpen style={{ marginRight: 8 }} /> Relevant Coursework
          </h3>
          <div className="education__course-grid">
            {courses.map((course, i) => (
              <motion.span
                key={i}
                className="education__course-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.08, backgroundColor: 'rgba(99,102,241,0.2)' }}
              >
                {course}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
