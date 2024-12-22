import React from "react";
import { FaUserAlt, FaChevronRight } from "react-icons/fa";
import './About.css';
import pimage  from '../assets/WhatsApp Image 2024-12-22 at 17.13.37_bd927a48.jpg'

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading"><FaUserAlt /> About <span>Me</span></h2>
      <div className="row">
        <div className="image">
          <img draggable="false" className="tilt" src={pimage} alt="Profile" />
        </div>
        <div className="content">
          <h3>I am Adharsh</h3>
          <span className="tag">Computer Science Student</span>
          <p>
            I am a Computer Science Student from VNRVJIET.
            I am very passionate about improving my coding skills and developing applications & websites.
          </p>
          <div className="box-container">
            <div className="box">
              <p><span>Email:</span> adharshsanda@gmail.com</p>
              <p><span>Place:</span> Hyderabad, India - 500085</p>
            </div>
          </div>
          <div className="resumebtn">
            <a href="https://drive.google.com/file/d/1lzxPT_l20eKnWSHUZakLAxWOD7gY8FDV/view?usp=sharing" target="_blank" rel="noreferrer" className="btn">
              <span>Resume</span>
              <FaChevronRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
