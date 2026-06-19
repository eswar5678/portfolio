import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      name: "Java",
      icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/color/48/000000/python--v1.png"
    },
    {
      name: "C Programming",
      icon: "https://img.icons8.com/color/48/000000/c-programming.png"
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
      name: "HTML5",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
      name: "ReactJS",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
      name: "NodeJS",
      icon: "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
      name: "Socket.io",
      icon: "https://img.icons8.com/color/48/000000/socket-io.png"
    },
    {
      name: "Android Studio",
      icon: "https://img.icons8.com/fluency/48/000000/android-os.png"
    },
    {
      name: "Git",
      icon: "https://img.icons8.com/color/48/000000/git.png"
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
    },
    {
      name: "Arduino",
      icon: "https://img.icons8.com/color/48/000000/arduino.png"
    },
    {
      name: "Cadence (VLSI)",
      icon: "https://img.icons8.com/color/48/000000/circuit.png"
    },
    {
      name: "AI & Prompting",
      icon: "https://img.icons8.com/color/48/000000/artificial-intelligence.png"
    }
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
      </h2>
      <div className="container">
        <div className="row" id="skillsContainer">
          {skillsData.map((skill, index) => (
            <div className="bar" key={index}>
              <div className="info">
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
