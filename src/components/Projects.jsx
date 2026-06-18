import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Gamepad2, Cpu } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Multiplayer Housie (Tambola)",
      description: "A real-time multiplayer application with ticket generation, fluid gameplay flow, and instantaneous interaction features. Architected for robust game performance and seamless user experience.",
      techStack: ["Android Studio", "Java", "WebSockets"],
      icon: <Gamepad2 size={28} strokeWidth={1.5} />
    },
    {
      title: "Power-Efficient High-Speed Gate-Level Full Adder",
      description: "Engineered a high-speed, low-power full adder circuit optimized for portable electronics and advanced processors, focusing on minimal power draw and maximum efficiency.",
      techStack: ["Hardware Design", "VLSI"],
      icon: <Cpu size={28} strokeWidth={1.5} />
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Selected Works
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card bento-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <motion.a 
                  href="#" 
                  className="project-link" 
                  aria-label="View Project"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={24} />
                </motion.a>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
