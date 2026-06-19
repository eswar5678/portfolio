import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Software Support Engineer",
      company: "ASM Technologies",
      duration: "Jan 2025 - Aug 2025",
      tasks: [
        "Assisted in software troubleshooting and operational support activities.",
        "Managed reports, documentation, and issue tracking.",
        "Collaborated with senior engineers to improve support workflow.",
        "Worked with internal software tools and reduced manual effort."
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        <i className="fas fa-briefcase"></i> Experience
      </h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`timeline-container ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="content">
              <div className="tag">
                <h2>{exp.company}</h2>
              </div>
              <div className="desc">
                <h3>{exp.role}</h3>
                <p className="duration">{exp.duration}</p>
                <ul className="tasks">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
