import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const education = [
    {
      institution: "Sri Vasavi Engineering College",
      degree: "B.Tech in Electronics and Communication Engineering",
      duration: "2021 - 2025",
      score: "CGPA: 8.72",
      board: "",
      highlight: true
    },
    {
      institution: "Sri Chaitanya Jr College",
      degree: "Intermediate (MPC)",
      duration: "2019 - 2021",
      score: "Score: 935",
      board: "Board of Intermediate Education",
      highlight: false
    },
    {
      institution: "Akshra High School",
      degree: "Secondary School Education",
      duration: "2018 - 2019",
      score: "CGPA: 9.7",
      board: "Board of Secondary School Education",
      highlight: false
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Academic Pathway
        </motion.h2>
        
        <div className="edu-timeline-container">
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              className={`edu-step ${edu.highlight ? 'highlight-step' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="edu-step-indicator">
                <div className="edu-dot"></div>
                {index !== education.length - 1 && <div className="edu-line"></div>}
              </div>
              
              <div className="edu-step-content">
                <div className="edu-step-header">
                  <span className="edu-year">{edu.duration}</span>
                  <div className="edu-score-badge">{edu.score}</div>
                </div>
                <h3 className="edu-title">{edu.degree}</h3>
                <h4 className="edu-school">{edu.institution}</h4>
                {edu.board && <p className="edu-board-text">{edu.board}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
