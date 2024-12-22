import React from "react";
import { NavLink } from "react-router-dom"; 
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"; 
import "./Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to my Portfolio !!</h1>
        <p>This is Adharsh</p>
        <NavLink to="/about" className="cta-button">
          About Me
        </NavLink>
      </div>

      <div className="contact-me">
        <h3>Contact Me</h3>
        <div className="social-icons">
          <a href="https://github.com/adharsh-04" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="www.linkedin.com/in/adharsh-sanda-a480b9295" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="adharsh@example.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={30} />
          </a>
          <a href="https://www.instagram.com/adharsh" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
