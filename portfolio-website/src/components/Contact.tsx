import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Try EmailJS first if configured
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_portfolio';
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_contact';
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
      
      // Template params for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'abeganske40@gmail.com',
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      };

      // Check if EmailJS is properly configured
      if (publicKey === 'YOUR_PUBLIC_KEY' || !publicKey || publicKey.length < 10) {
        // Fallback to mailto if EmailJS is not configured
        const mailtoSubject = encodeURIComponent(formData.subject);
        const mailtoBody = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:abeganske40@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        
        window.open(mailtoLink, '_blank');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Use EmailJS if properly configured
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Fallback to mailto on error
      try {
        const mailtoSubject = encodeURIComponent(formData.subject);
        const mailtoBody = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:abeganske40@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        
        window.open(mailtoLink, '_blank');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (mailtoError) {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'abraham@ganske.com',
      link: 'mailto:abeganske40@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+1 (262) 685-2741',
      link: 'tel:+2626852741'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Madison and Milwaukee, WI',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com/abrahamganske'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/abrahamganske'
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      url: 'https://twitter.com/abrahamganske'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p>Ready to start a conversation? I'd love to hear from you!</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon"><item.icon /></div>
                  <div className="contact-text">
                    <span className="contact-label">{item.label}</span>
                    {item.link ? (
                      <a href={item.link} className="contact-value">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Me a Message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=""
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=""
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder=""
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What's up ?"
                />
              </div>
              
              <motion.button
                type="submit"
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {submitStatus === 'success' && (
                <motion.div
                  className="submit-message success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! Your message has been prepared and will be sent to abeganske40@gmail.com.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  className="submit-message error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Sorry, there was an error sending your message. Please try again or email directly to abeganske40@gmail.com.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;