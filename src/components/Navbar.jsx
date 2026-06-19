import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 65; // navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'education', 'projects', 'experience', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for spy

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <a href="#home" className="logo" onClick={(e) => handleLinkClick(e, 'home')}>
        <i className="fab fa-node-js"></i> Eswar
      </a>

      <div 
        id="menu" 
        className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} 
        onClick={toggleMenu}
      ></div>

      <nav className={`navbar ${isOpen ? 'nav-toggle' : ''}`}>
        <ul>
          <li>
            <a 
              className={activeSection === 'home' ? 'active' : ''} 
              href="#home" 
              onClick={(e) => handleLinkClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              className={activeSection === 'about' ? 'active' : ''} 
              href="#about" 
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              className={activeSection === 'skills' ? 'active' : ''} 
              href="#skills" 
              onClick={(e) => handleLinkClick(e, 'skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              className={activeSection === 'education' ? 'active' : ''} 
              href="#education" 
              onClick={(e) => handleLinkClick(e, 'education')}
            >
              Education
            </a>
          </li>
          <li>
            <a 
              className={activeSection === 'projects' ? 'active' : ''} 
              href="#projects" 
              onClick={(e) => handleLinkClick(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              className={activeSection === 'experience' ? 'active' : ''} 
              href="#experience" 
              onClick={(e) => handleLinkClick(e, 'experience')}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              className={activeSection === 'contact' ? 'active' : ''} 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
