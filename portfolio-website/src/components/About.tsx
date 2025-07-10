import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaLightbulb, FaUsers } from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {
  const highlights = [
    {
      icon: 'code',
      title: 'Problem Solver',
      description: 'I enjoy breaking down complex problems and finding elegant solutions through code.'
    },
    {
      icon: 'graduation',
      title: 'Continuous Learner',
      description: 'Always eager to learn new technologies and stay updated with industry trends.'
    },
    {
      icon: 'lightbulb',
      title: 'Creative Thinker',
      description: 'I bring innovative ideas to life through thoughtful design and implementation.'
    },
    {
      icon: 'users',
      title: 'Team Player',
      description: 'I believe in the power of collaboration and enjoy working in team environments.'
    }
  ];

  const getIcon = (iconType: string): React.ReactElement => {
    switch (iconType) {
      case 'code':
        return <FaCode />;
      case 'graduation':
        return <FaGraduationCap />;
      case 'lightbulb':
        return <FaLightbulb />;
      case 'users':
        return <FaUsers />;
      default:
        return <FaCode />;
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Get to know more about who I am and what drives me</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Hello! I'm Abraham Ganske</h3>
            <p>
              I'm a passionate Computer Science student with a deep love for technology and innovation. 
              My journey into programming began during my first year of college, and since then, I've been 
              captivated by the endless possibilities that code can unlock.
            </p>
            <p>
              I specialize in web development with a focus on creating user-friendly, responsive applications. 
              My experience spans across frontend technologies like React and TypeScript, as well as backend 
              development with Node.js and various databases.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or working on personal projects that challenge me to grow as a developer. I'm 
              always excited to take on new challenges and collaborate with like-minded individuals.
            </p>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="image-placeholder">
              <div className="profile-image">
                <span>AG</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="highlights-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="highlight-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="highlight-icon">{getIcon(highlight.icon)}</div>
              <h4>{highlight.title}</h4>
              <p>{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;