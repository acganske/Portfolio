import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaJs, 
  FaPython, 
  FaJava, 
  FaGitAlt, 
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiExpress,
  SiTailwindcss,
  SiRedux
} from 'react-icons/si';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: '',
              skills: [
        { name: 'React', icon: FaReact as React.ComponentType, level: 85 },
        { name: 'TypeScript', icon: SiTypescript as React.ComponentType, level: 80 },
        { name: 'JavaScript', icon: FaJs as React.ComponentType, level: 90 },
        { name: 'HTML5', icon: FaHtml5 as React.ComponentType, level: 95 },
        { name: 'CSS3', icon: FaCss3Alt as React.ComponentType, level: 90 },
        { name: 'Tailwind CSS', icon: SiTailwindcss as React.ComponentType, level: 75 },
        { name: 'Redux', icon: SiRedux as React.ComponentType, level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Technologies</h2>
        </motion.div>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-icon"><skill.icon /></div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                        
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;