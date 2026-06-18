import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "JavaScript"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "Node.js", "Socket.io", "React"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Android Studio", "Render", "Vite"]
    },
    {
      title: "Engineering & Others",
      skills: ["Cadence", "Mentor Graphics", "Arduino UNO", "Prompt Engineering", "AI-assisted Development"]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Core Arsenal
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="skill-category bento-card">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
