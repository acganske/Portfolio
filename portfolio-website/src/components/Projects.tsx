import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiTailwindcss } from 'react-icons/si';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration. Features a modern UI with responsive design.',
      image: '/api/placeholder/400/250',
      technologies: [
        { name: 'React', icon: FaReact as React.ComponentType },
        { name: 'TypeScript', icon: SiTypescript as React.ComponentType },
        { name: 'Node.js', icon: FaNodeJs as React.ComponentType },
        { name: 'MongoDB', icon: SiMongodb as React.ComponentType }
      ],
      githubUrl: 'https://github.com/abrahamganske/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.abrahamganske.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.',
      image: '/api/placeholder/400/250',
      technologies: [
        { name: 'React', icon: FaReact as React.ComponentType },
        { name: 'Node.js', icon: FaNodeJs as React.ComponentType },
        { name: 'Tailwind', icon: SiTailwindcss as React.ComponentType }
      ],
      githubUrl: 'https://github.com/abrahamganske/task-manager',
      liveUrl: 'https://tasks.abrahamganske.com',
      featured: true
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <p>A collection of my recent work showcasing various technologies and skills</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                    {project.liveUrl && (
                                                                      <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaExternalLinkAlt />
                        </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech.name} className="tech-tag">
                      <tech.icon />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;