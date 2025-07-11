import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <span className="gradient-text">Abraham Ganske</span>
          </motion.h1>
          
          <motion.h3
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm a Junior @ UW-Madison majoring in <span className="gradient-text">COMPUTER SCIENCE</span> and <span className="gradient-text">DATA SCIENCE</span> with a minor in <span className="gradient-text">ASTRONOMY</span>
          </motion.h3>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="cta-button secondary">
              <FaDownload /> Download Resume
            </button>
          </motion.div>
          
          
            
        </motion.div>
        
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="code-animation">
            <div className="code-line">
              <span className="code-keyword">const</span>{' '}
              <span className="code-variable">developer</span>{' '}
              <span className="code-operator">=</span>{' '}
              <span className="code-string">"Abraham Ganske"</span>
            </div>
            <div className="code-line">
              <span className="code-keyword">let</span>{' '}
              <span className="code-variable">skills</span>{' '}
              <span className="code-operator">=</span>{' '}
              <span className="code-array">["React", "TypeScript", "Node.js"]</span>
            </div>
            <div className="code-line">
              <span className="code-variable">developer</span>
              <span className="code-operator">.</span>
              <span className="code-method">createAmazingThings</span>
              <span className="code-parentheses">()</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => scrollToSection('about')}
      >
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;