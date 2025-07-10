import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaTrophy } from 'react-icons/fa';
import './Education.css';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      location: 'City, State',
      period: '2022 - 2026 (Expected)',
      gpa: '3.8/4.0',
      description: 'Focused on software engineering, algorithms, and data structures. Active member of the Computer Science Student Association.',
      coursework: [
        'Data Structures & Algorithms',
        'Software Engineering',
        'Database Systems',
        'Computer Networks',
        'Machine Learning',
        'Web Development'
      ],
      achievements: [
        'Dean\'s List (4 semesters)',
        'Computer Science Excellence Award',
        'Hackathon Winner (2024)'
      ]
    }
  ];

  const certifications = [
    {
      name: 'React Developer Certification',
      issuer: 'React Training',
      date: 'March 2024',
      credentialId: 'RT-2024-0892'
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'January 2024',
      credentialId: 'AWS-CP-2024-1234'
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'November 2023',
      credentialId: 'FCC-JS-2023-5678'
    }
  ];

  const extracurriculars = [
    {
      role: 'President',
      organization: 'Computer Science Student Association',
      period: '2023 - Present',
      description: 'Leading a team of 50+ students, organizing tech talks, hackathons, and networking events.'
    },
    {
      role: 'Team Member',
      organization: 'Competitive Programming Club',
      period: '2022 - Present',
      description: 'Participating in ACM ICPC and other competitive programming contests.'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Education & Certifications</h2>
          <p>My academic background and continuous learning journey</p>
        </motion.div>

        <div className="education-content">
          {/* Academic Education */}
          <motion.div
            className="education-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3><FaGraduationCap /> Academic Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="education-header">
                  <h4>{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>
                  <div className="education-meta">
                    <span><FaCalendarAlt /> {edu.period}</span>
                    <span><FaMapMarkerAlt /> {edu.location}</span>
                    <span className="gpa">GPA: {edu.gpa}</span>
                  </div>
                </div>
                
                <p className="education-description">{edu.description}</p>
                
                <div className="coursework">
                  <h5>Relevant Coursework</h5>
                  <div className="coursework-list">
                    {edu.coursework.map((course) => (
                      <span key={course} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
                
                <div className="achievements">
                  <h5><FaTrophy /> Achievements</h5>
                  <ul>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="certifications-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3><FaAward /> Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="cert-icon">
                    <FaAward />
                  </div>
                  <h4>{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  <p className="cert-id">ID: {cert.credentialId}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Extracurricular Activities */}
          <motion.div
            className="extracurriculars-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Extracurricular Activities</h3>
            <div className="extracurriculars-list">
              {extracurriculars.map((activity, index) => (
                <motion.div
                  key={index}
                  className="activity-card"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4>{activity.role}</h4>
                  <p className="organization">{activity.organization}</p>
                  <p className="period">{activity.period}</p>
                  <p className="description">{activity.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;