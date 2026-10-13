import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="cta-banner">
        <div className="cta-banner__inner">
          <div className="cta-banner__text">
            Have an ML or backend challenge? Let's build something extraordinary.
          </div>
          <Link to="contact" smooth duration={500} offset={-70} className="cta-banner__btn">
            Start a conversation <FaArrowRight />
          </Link>
        </div>
      </div>

      <footer className="footer">
        <div className="footer__container">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">&lt;/&gt;</span>
              <span className="footer__logo-text">
                Vijay<span>/Meena</span>
              </span>
            </div>
            <p className="footer__desc">
              Software &amp; AI/ML Engineer | CS Undergrad at IIIT Kota. Specializing in 
              scalable software architectures, full-stack systems, RAG pipelines, and algorithmic problem solving.
            </p>
          </div>

          <div className="footer__nav">
            <div>
              <h4 className="footer__nav-title">Navigation</h4>
              <div className="footer__nav-links">
                <Link to="about" smooth duration={500} offset={-70} className="footer__nav-link">About</Link>
                <Link to="skills" smooth duration={500} offset={-70} className="footer__nav-link">Skills</Link>
                <Link to="projects" smooth duration={500} offset={-70} className="footer__nav-link">Projects</Link>
                <Link to="competitive" smooth duration={500} offset={-70} className="footer__nav-link">Achievements</Link>
                <Link to="contact" smooth duration={500} offset={-70} className="footer__nav-link">Contact</Link>
              </div>
            </div>

            <div>
              <h4 className="footer__nav-title">Connect</h4>
              <div className="footer__nav-links">
                <a href="https://github.com/vzz95900" target="_blank" rel="noreferrer" className="footer__nav-link">
                  <FaGithub style={{ marginRight: 6 }} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/vijay-meena-a4b953292" target="_blank" rel="noreferrer" className="footer__nav-link">
                  <FaLinkedin style={{ marginRight: 6 }} /> LinkedIn
                </a>
                <a href="mailto:vijaybyadwal589@gmail.com" className="footer__nav-link">
                  <FaEnvelope style={{ marginRight: 6 }} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copy">
            &copy; {new Date().getFullYear()} Vijay Meena. Engineered with precision.
          </div>
          <div className="footer__location">
            Jaipur / Kota, Rajasthan, India
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
