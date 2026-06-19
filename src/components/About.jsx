import resumePdf from '../assets/resume.pdf';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        <i className="fas fa-user-alt"></i> About <span>Me</span>
      </h2>
      
      <div className="row">
        <div className="content">
          <h3>I'm Eswar Bharath</h3>
          <span className="tag">Software Support Engineer & Developer</span>
          
          <p>
            I am a recent Electronics and Communication Engineering graduate with a strong passion for software development.
            My background blends hardware fundamentals with software engineering, giving me a unique perspective on technology.
            Currently, I work as a Software Support Engineer at ASM Technologies, actively troubleshooting issues,
            improving support workflows, and collaborating with senior engineers to enhance system reliability.
            I thrive on building real-time applications and exploring AI-assisted workflows to accelerate delivery and improve debugging.
          </p>
          
          <div className="box-container">
            <div className="box">
              <p><span>Email : </span> eswarmarri6285@gmail.com</p>
              <p><span>Place : </span> Andhra Pradesh, India</p>
            </div>
          </div>
          
          <div className="resumebtn">
            <a 
              href={resumePdf} 
              target="_blank" 
              rel="noreferrer" 
              className="btn"
            >
              <span>Resume / Profile</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
