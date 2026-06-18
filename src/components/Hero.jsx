import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero-greeting">
            <span className="typing-effect">Hello World, I'm</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="hero-name text-gradient">
            Eswar Bharath
          </motion.h1>
          <motion.h2 variants={itemVariants} className="hero-title">
            Software Engineer & ECE Specialist
          </motion.h2>
          <motion.p variants={itemVariants} className="hero-description">
            Bridging the gap between robust hardware fundamentals and modern software architectures. 
            I build highly interactive, high-performance web applications and resolve complex operational challenges.
          </motion.p>
          <motion.div variants={itemVariants} className="hero-cta">
            <a href="#contact" className="btn btn-primary cta-btn">
              Let's Collaborate <ArrowRight size={18} />
            </a>
            <div className="social-links">
              <a href="mailto:eswarmarri6285@gmail.com" className="social-icon"><Mail size={22} /></a>
              <a href="https://github.com/eswar5678" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub size={22} /></a>
              <a href="https://www.linkedin.com/in/eswar-marri-266a5a2b5/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin size={22} /></a>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
        >
          <div className="image-glow"></div>
          <img src="/profile.jpg" alt="Eswar Bharath Marri" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
