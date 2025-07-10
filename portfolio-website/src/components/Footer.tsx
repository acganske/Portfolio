import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      url: 'https://github.com/abrahamganske',
      label: 'GitHub'
    },
    {
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/abrahamganske',
      label: 'LinkedIn'
    },
    {
      icon: FaTwitter,
      url: 'https://twitter.com/abrahamganske',
      label: 'Twitter'
    },
    {
      icon: FaEnvelope,
      url: 'mailto:abraham@ganske.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-main"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-section">
              <motion.h3
                className="footer-logo"
                whileHover={{ scale: 1.05 }}
              >
                Abraham Ganske
              </motion.h3>
              <p className="footer-description">
                Computer Science student passionate about creating innovative solutions 
                and building impactful software. Always excited to take on new challenges 
                and collaborate with like-minded individuals.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <nav className="footer-nav">
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={index}
                    className="footer-link"
                    onClick={() => scrollToSection(link.id)}
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
            </div>

            <div className="footer-section">
              <h4>Get In Touch</h4>
              <div className="footer-contact">
                <p>Ready to start a conversation?</p>
                <motion.button
                  className="cta-button primary"
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="footer-copyright">
              <p>
                © {new Date().getFullYear()} Abraham Ganske. Made with{' '}
                <motion.span
                  className="heart"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaHeart />
                </motion.span>{' '}
                using React & TypeScript
              </p>
            </div>
            
            <motion.button
              className="back-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <FaArrowUp />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;