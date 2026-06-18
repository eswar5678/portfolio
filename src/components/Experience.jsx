import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Career Journey
        </motion.h2>
        
        <div className="timeline">
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="timeline-dot">
              <Briefcase size={20} />
            </div>
            <div className="timeline-content bento-card">
              <div className="timeline-header">
                <div>
                  <h3 className="role">Software Support Engineer</h3>
                  <h4 className="company">ASM Technologies</h4>
                </div>
                <span className="duration">Jan 2025 - Aug 2025</span>
              </div>
              <ul className="timeline-tasks">
                <li>Assisted in software troubleshooting and operational support activities.</li>
                <li>Managed reports, documentation, and issue tracking.</li>
                <li>Collaborated with senior engineers to improve support workflow.</li>
                <li>Worked with internal software tools and reduced manual effort.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
