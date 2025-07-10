import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience: React.FC = () => {


  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'TechStart Solutions',
      location: 'Remote',
      period: 'June 2024 - Present',
      description: [
        'Developed responsive web applications using React and TypeScript',
        'Collaborated with design team to implement pixel-perfect UI components',
        'Optimized application performance resulting in 30% faster load times',
        'Participated in code reviews and agile development processes'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git']
    },
    {
      title: 'Computer Science Tutor',
      company: 'University Learning Center',
      location: 'Campus',
      period: 'September 2023 - Present',
      description: [
        'Tutored undergraduate students in programming fundamentals and data structures',
        'Helped students with assignments in Java, Python, and C++',
        'Conducted group study sessions for exam preparation',
        'Maintained a 95% student satisfaction rating'
      ],
      technologies: ['Java', 'Python', 'C++', 'Data Structures']
    },
    {
      title: 'Web Development Volunteer',
      company: 'Local Non-Profit Organization',
      location: 'City',
      period: 'January 2023 - May 2023',
      description: [
        'Built and maintained the organization\'s website using modern web technologies',
        'Implemented donation system and event management features',
        'Trained staff on content management and website updates',
        'Increased online donations by 40% through improved UX design'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress']
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