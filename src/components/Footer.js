import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa"; // Importing React icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
    
        <div className="footer-card">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" activeClassName="active">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" activeClassName="active">
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

      
        <div className="footer-card">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <FaPhone className="footer-icon" /> +91 8978651870
            </li>
            <li>
              <FaEnvelope className="footer-icon" /> adharshsanda@gmail.com
            </li>
            <li>
              <FaMapMarkedAlt className="footer-icon" /> Hyderabad, India
            </li>
          </ul>
        </div>

        <div className="footer-card">
          <h3>Follow Me</h3>
          <ul>
            <li>
              <a href="www.linkedin.com/in/adharsh-sanda-a480b9295" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="footer-icon" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/adharsh-04" target="_blank" rel="noopener noreferrer">
                <FaGithub className="footer-icon" /> GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="footer-icon" /> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

  
      <div className="footer-credit">
        <p>Designed with 💙 by Adharsh</p>
      </div>
    </footer>
  );
};

export default Footer;
