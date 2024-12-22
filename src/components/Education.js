import React from "react";
import './Education.css'
const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading"><i className="fas fa-graduation-cap"></i> My <span>Education</span></h1>
      <p className="quote">Education is not the learning of facts, but the training of the mind to think.</p>
      <div className="box-container">
        {/* BTech Education */}
        <div className="box">
          <div className="image">
            <img draggable="false" src="https://edu.ieee.org/in-vnrvjiet/wp-content/uploads/sites/764/vnr-1024x448.jpg" alt="VNR Vignana Jyothi Institute" />
          </div>
          <div className="content">
            <h3>Bachelor of Technology (BTech) in Computer Science</h3>
            <p>VNR Vignana Jyothi Institute of Engineering and Technology</p>
            <h4>2022 - Present | CGPA: 9.46</h4>
          </div>
        </div>

        {/* Intermediate Education */}
        <div className="box">
          <div className="image">
            <img draggable="false" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyXo5SCbmzdkMFrPpq1jSAVpM7rubJ9HtCg&s" alt="Sri Chaitanya Junior College" />
          </div>
          <div className="content">
            <h3>Intermediate (12th Grade)</h3>
            <p>Sri Chaitanya Junior College</p>
            <h4>Year: 2020 - 2022 | Percentage: 98.4%</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img draggable="false" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoOzaFCv26djdKQPpBLnryDO_zdRjt_zwDA&s" alt="VNR Vignana Jyothi Institute" />
          </div>
          <div className="content">
            <h3>SSC</h3>
            <p>Vishwashanthi High School</p>
            <h4>2020 | CGPA: 10</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
