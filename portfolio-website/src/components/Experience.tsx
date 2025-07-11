import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience: React.FC = () => {


  const experiences = [
    {
      title: 'Software Developer Intern (year-round)',
      company: 'Baird',
      location: 'Milwaukee, WI (HYBRID)',
      period: 'Map 2025 - Present',
      description: [
        '------',
        '------',
        '------',
        '------'
      ],
      technologies: ['C#', 'React', 'Agile','Services']
    },
    {
      title: 'IT Intern (year-round)',
      company: 'Kapco Metal Stamping',
      location: 'Grafton, WI (HYBRID)',
      period: 'May 2024 - May 2025',
      description: [
        '------',
        '------',
        '------',
        '------'
      ],
      technologies: ['C#', 'Visual Basic', 'SQL', 'CSS']
    }
    
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Work Experience</h2>
          <p>My professional journey and key achievements</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              
              <motion.div
                className="timeline-content"
                whileHover={{ scale: 1.02 }}
              >
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <div className="experience-meta">
                    <span className="period">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                    <span className="location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                </div>
                
                <div className="experience-description">
                  <ul>
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="experience-technologies">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;