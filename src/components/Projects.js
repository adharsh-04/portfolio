import React from "react";
import "./Projects.css"; 
import { FaGithub } from "react-icons/fa"; 

const Projects = () => {
 
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      TechStack: "HTML, CSS, React, Bootstrap",
      description: "A personal portfolio website to showcase my work, skills, and achievements.",
      FutureScope: "Implement a blog section and enhance animations.",
      githubLink: "https://github.com/adharsh-04/portfolio",
    },
    {
      id: 2,
      title: "Call with AI Project",
      TechStack: "MERN, pyttsx3, speech_recognition",
      description: "A user-friendly application that helps users build confidence while learning English.",
      FutureScope: "Implement features like transcript generation and grammar mistake tracking.",
      githubLink: "https://github.com/prashanth168/CALL-WITH-AI",
    },
    {
      id: 3,
      title: "PrintPay Project",
      TechStack: "MongoDB, Express, Node.js, React.js",
      description: "A project for B.Tech students to access scholarship information, events, and exam resources.",
      FutureScope: "Add direct PDF printing feature and real-time notifications.",
      githubLink: "https://github.com/adharsh-04/student",
    },
    {
      id: 4,
      title: "Blog Application",
      TechStack: "MongoDB, Express, Node.js, React.js",
      description: "A blog app that supports CRUD operations like creating, reading, updating, and soft deleting blogs.",
      FutureScope: "Implement a dashboard feature to manage posts more effectively.",
      githubLink: "https://github.com/adharsh-04/BLOGG",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
      </h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                <strong>Tech Stack:</strong> {project.TechStack}
              </div>
              <div className="future-scope">
                <strong>Future Scope:</strong> {project.FutureScope}
              </div>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
                <FaGithub /> View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
