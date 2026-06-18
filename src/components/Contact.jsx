import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Initiate Contact
        </motion.h2>
        
        <motion.div 
          className="contact-content bento-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-info">
            <h3 className="contact-heading">Transmission Details</h3>
            <p className="contact-desc">
              I am actively seeking opportunities in software engineering, technical support, or backend development. 
              My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div className="info-text">
                  <span className="info-label">Email Network</span>
                  <a href="mailto:eswarmarri6285@gmail.com" className="info-value">eswarmarri6285@gmail.com</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div className="info-text">
                  <span className="info-label">Comm Channel</span>
                  <a href="tel:+916281450770" className="info-value">+91 6281450770</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div className="info-text">
                  <span className="info-label">Coordinates</span>
                  <span className="info-value">West Godavari, Andhra Pradesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <h3 className="contact-heading">Send a Data Packet</h3>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Identifier</label>
                <input type="text" id="name" placeholder="Your Name" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Return Address</label>
                <input type="email" id="email" placeholder="Your Email" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Payload</label>
                <textarea id="message" rows="4" placeholder="Your Message" className="form-input"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="btn btn-primary submit-btn"
              >
                Transmit
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
