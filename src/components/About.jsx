import React from 'react';
import { motion } from 'framer-motion';
import { Code, BrainCircuit, HeartHandshake } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="bento-grid-about">
          <motion.div 
            className="bento-card main-about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="bento-title">Background</h3>
            <p>
              I am a recent Electronics and Communication Engineering graduate with a strong passion for software development. 
              My background blends hardware fundamentals with software engineering, giving me a unique perspective on technology.
            </p>
            <p>
              Currently, I work as a Software Support Engineer, actively troubleshooting issues, 
              improving support workflows, and collaborating with senior engineers to enhance system reliability. 
            </p>
            <p>
              I thrive on building real-time applications and exploring AI-assisted workflows to accelerate delivery 
              and improve debugging.
            </p>
          </motion.div>
          
          <motion.div 
            className="bento-card highlight-dev"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Code className="bento-icon" size={32} />
            <h3 className="bento-title">Development</h3>
            <p className="bento-desc">Full-stack web applications and robust Android mobile development.</p>
          </motion.div>

          <motion.div 
            className="bento-card highlight-support"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <HeartHandshake className="bento-icon" size={32} />
            <h3 className="bento-title">Support & Ops</h3>
            <p className="bento-desc">Advanced troubleshooting, workflow optimization, and operational support.</p>
          </motion.div>

          <motion.div 
            className="bento-card highlight-hw"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <BrainCircuit className="bento-icon" size={32} />
            <h3 className="bento-title">Hardware Insights</h3>
            <p className="bento-desc">Strong fundamentals in VLSI, Cadence, and embedded systems.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
