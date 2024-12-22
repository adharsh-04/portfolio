import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaDatabase, FaNodeJs, FaGitAlt, FaJava, FaJsSquare } from "react-icons/fa"; 
import { SiCplusplus, SiC } from "react-icons/si"; 
import './Skills.css'
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
      </h2>
      <div className="container">
        <div className="skill-card">
          <FaHtml5 className="skill-icon" />
          <h3>HTML</h3>
        </div>
        <div className="skill-card">
          <FaCss3Alt className="skill-icon" />
          <h3>CSS</h3>
        </div>
        <div className="skill-card">
          <FaBootstrap className="skill-icon" />
          <h3>Bootstrap</h3>
        </div>
        <div className="skill-card">
          <FaReact className="skill-icon" />
          <h3>React</h3>
        </div>
        <div className="skill-card">
          <FaDatabase className="skill-icon" />
          <h3>MongoDB</h3>
        </div>
        <div className="skill-card">
          <FaNodeJs className="skill-icon" />
          <h3>Node.js</h3>
        </div>
        <div className="skill-card">
          <FaGitAlt className="skill-icon" />
          <h3>Git</h3>
        </div>
        <div className="skill-card">
          <FaJava className="skill-icon" />
          <h3>Java</h3>
        </div>
        <div className="skill-card c">
          <SiC className="skill-icon c" />
          <h3>C</h3>
        </div>
        <div className="skill-card cpp">
          <SiCplusplus className="skill-icon cpp" />
          <h3>C++</h3>
        </div>
        {/* Added JavaScript skill */}
        <div className="skill-card js">
          <FaJsSquare className="skill-icon js" />
          <h3>JavaScript</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
