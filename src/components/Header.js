import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; // Assuming the CSS file is named 'Header.css'

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header>
      <div className="navbar-container">
        <NavLink to="/" className="name">
          Adharsh
        </NavLink>
        <ul className={`navbar ${isMobile ? "show" : ""}`}>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeClassName="active">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/education" activeClassName="active">
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="fas fa-bars" onClick={toggleMenu}></div> {/* Menu icon for mobile */}
      </div>
    </header>
  );
};

export default Header;
