import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">&lt;VM /&gt;</div>

        <div className="footer__socials">
          <a href="https://github.com/vzz95900" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vijay-meena-a4b953292" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:vzz620201@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer__copy">
          Made with <FaHeart className="footer__heart" /> by Vijay Meena &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
