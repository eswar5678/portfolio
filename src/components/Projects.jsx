import housieImg from '../assets/housie_project.png';
import vlsiImg from '../assets/vlsi_project.png';
import ticketGeneratorImg from '../assets/ticket_generator_project.png';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      name: "Multiplayer Housie (Tambola)",
      desc: "A real-time multiplayer Android application with automatic ticket generation, fluid gameplay flow, and instantaneous interaction features. Architected for robust performance and seamless user experience.",
      image: housieImg,
      links: {
        view: "https://play.google.com/apps/internaltest/4701518911648953538",
        code: "https://github.com/eswar5678/simple_housie"
      }
    },
    {
      name: "Power-Efficient High-Speed Full Adder",
      desc: "Engineered a high-speed, low-power gate-level full adder circuit optimized for portable electronics and advanced processors, focusing on minimal power draw and maximum efficiency.",
      image: vlsiImg,
      links: {
        view: "#",
        code: "https://github.com/eswar5678"
      }
    },
    {
      name: "Tambola Ticket Generator",
      desc: "A client-side web application designed to generate randomized and printable Tambola (Housie) tickets. Features quick grid creation, ticket customization, and seamless game card operations.",
      image: ticketGeneratorImg,
      links: {
        view: "https://eswar5678.github.io/tambola-ticket-generator.com/",
        code: "https://github.com/eswar5678/tambola-ticket-generator.com"
      }
    }
  ];

  return (
    <section className="work" id="projects">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
      </h2>

      <div className="box-container">
        {projectsData.map((project, index) => (
          <div className="box" key={index}>
            <img draggable="false" src={project.image} alt={project.name} />
            <div className="content">
              <div className="tag">
                <h3>{project.name}</h3>
              </div>
              <div className="desc">
                <p>{project.desc}</p>
                <div className="btns">
                  {project.links.view && project.links.view !== '#' && (
                    <a href={project.links.view} className="btn-link" target="_blank" rel="noreferrer">
                      <i className="fas fa-eye"></i> View
                    </a>
                  )}
                  {project.links.code && project.links.code !== '#' && (
                    <a href={project.links.code} className="btn-link" target="_blank" rel="noreferrer">
                      Code <i className="fas fa-code"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
