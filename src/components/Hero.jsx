import { useState, useEffect } from 'react';
import profilePic from '../assets/profile.jpg';
import './Hero.css';

const toRotate = [
  "Software Support Engineering",
  "Full-Stack Development",
  "Technical Operations",
  "Problem Solving"
];
const period = 2000;

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting 
        ? fullText.substring(0, typedText.length - 1) 
        : fullText.substring(0, typedText.length + 1);

      setTypedText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 1.5);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(150);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [typedText, delta, isDeleting, loopNum]);

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const element = document.getElementById('about');
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
    <section className="home" id="home">
      <div className="content">
        <h2>
          Hi There,<br /> I'm Eswar <span>Bharath</span>
        </h2>
        <p>
          I am into <span className="typing-text">{typedText}</span>
        </p>
        <a href="#about" className="btn" onClick={handleScrollToAbout}>
          <span>About Me</span>
          <i className="fas fa-arrow-circle-down"></i>
        </a>
        <div className="socials">
          <ul className="social-icons">
            <li>
              <a 
                className="linkedin" 
                aria-label="LinkedIn" 
                href="https://www.linkedin.com/in/eswar-marri-266a5a2b5/" 
                target="_blank" 
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a 
                className="github" 
                aria-label="GitHub" 
                href="https://github.com/eswar5678" 
                target="_blank" 
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a 
                className="twitter" 
                aria-label="Email" 
                href="mailto:eswarmarri6285@gmail.com"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="image">
        <img 
          draggable="false" 
          className="tilt" 
          src={profilePic} 
          alt="Eswar Bharath profile" 
        />
      </div>
    </section>
  );
};

export default Hero;
