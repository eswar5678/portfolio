import './Footer.css';

const Footer = () => {
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 65;
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

  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Eswar's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. 
            Connect with me over socials or drop an email for discussions. 
            <br /> <br /> Keep Rising 🚀.
          </p>
        </div>

        <div className="box">
          <h3>Quick Links</h3>
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>
            <i className="fas fa-chevron-circle-right"></i> home
          </a>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>
            <i className="fas fa-chevron-circle-right"></i> about
          </a>
          <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>
            <i className="fas fa-chevron-circle-right"></i> skills
          </a>
          <a href="#education" onClick={(e) => handleLinkClick(e, 'education')}>
            <i className="fas fa-chevron-circle-right"></i> education
          </a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>
            <i className="fas fa-chevron-circle-right"></i> projects
          </a>
          <a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')}>
            <i className="fas fa-chevron-circle-right"></i> experience
          </a>
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-phone"></i> +91 6281450770
          </p>
          <p>
            <i className="fas fa-envelope"></i> eswarmarri6285@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marked-alt"></i> Andhra Pradesh, India
          </p>
          <div className="share">
            <a 
              href="https://www.linkedin.com/in/eswar-marri-266a5a2b5/" 
              className="fab fa-linkedin" 
              aria-label="LinkedIn" 
              target="_blank" 
              rel="noreferrer"
            ></a>
            <a 
              href="https://github.com/eswar5678" 
              className="fab fa-github" 
              aria-label="GitHub" 
              target="_blank" 
              rel="noreferrer"
            ></a>
            <a 
              href="mailto:eswarmarri6285@gmail.com" 
              className="fas fa-envelope" 
              aria-label="Mail"
            ></a>
          </div>
        </div>
      </div>

      <h1 className="credit">
        Designed with <i className="fa fa-heart pulse"></i> by{' '}
        <a 
          href="https://www.linkedin.com/in/eswar-marri-266a5a2b5/" 
          target="_blank" 
          rel="noreferrer"
        >
          Eswar Bharath
        </a>
      </h1>
    </section>
  );
};

export default Footer;
