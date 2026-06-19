import collegeImg from '../assets/college.jpg';
import intermediateImg from '../assets/intermediate.png';
import schoolImg from '../assets/school.png';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      institution: "Sri Vasavi Engineering College",
      degree: "B.Tech in Electronics and Communication Engineering",
      duration: "2021 - 2025",
      score: "CGPA: 8.72",
      image: collegeImg
    },
    {
      institution: "Sri Chaitanya Jr College",
      degree: "Intermediate (MPC)",
      duration: "2019 - 2021",
      score: "Score: 935 / 1000",
      image: intermediateImg
    },
    {
      institution: "Akshra High School",
      degree: "Secondary School Education",
      duration: "2018 - 2019",
      score: "CGPA: 9.7",
      image: schoolImg
    }
  ];

  return (
    <section className="education" id="education">
      <h2 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h2>
      <p className="quote">Education is not the learning of facts, but the training of the mind to think.</p>
      
      <div className="box-container">
        {educationData.map((edu, index) => (
          <div className="box" key={index}>
            <div className="image">
              <img draggable="false" src={edu.image} alt={edu.institution} />
            </div>
            <div className="content">
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <h4>{edu.duration} | {edu.score}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
