import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 4000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'vijaybyadwal589@gmail.com', href: 'mailto:vijaybyadwal589@gmail.com' },
    { icon: <FaPhone />, label: '+91 7878118474', href: 'tel:+917878118474' },
    { icon: <FaMapMarkerAlt />, label: 'Jaipur, Rajasthan', href: null },
  ];

  return (
    <section id="contact" className="section contact" ref={ref}>
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
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="contact__wrapper">
          {/* Info column */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3>Let's work together</h3>
            <p>
              Have a project idea, want to collaborate, or just want to say hi? Feel free to reach out!
            </p>
            <div className="contact__info-items">
              {contactInfo.map((item, i) => (
                <div key={i} className="contact__info-item">
                  <span className="contact__info-icon">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form column */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="contact__form-row">
              <div className="contact__form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="contact__form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="btn btn--primary contact__submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <motion.p
                className="contact__status contact__status--success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully!
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                className="contact__status contact__status--error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
