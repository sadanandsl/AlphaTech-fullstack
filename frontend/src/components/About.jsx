import React from "react";
import "../assets/styles/About.css";
import Aboutpic from "../assets/Images/about.png";

const AboutSection = () => {
  return (
    <div className="about-section-container">
      <div className="about-content">
        <h2 className="aboutheading">About Us</h2>
        <p className="aboutdescp">
          Welcome to AlphaTech, your ultimate destination for comprehensive and
          effective placement preparation. We understand that excelling in
          placements requires a combination of aptitude, programming skills, and
          a deep understanding of the recruitment process.
          <br />
          <br />
          <b>What Sets Us Apart:</b>
          <ul>
            <li>
              <b>Aptitude Mastery:</b> Our platform offers a rich collection of aptitude resources designed to sharpen your problem-solving skills. Whether you're tackling mathematical challenges or logical reasoning, we have the tools to help you excel.
            </li>
            <li>
              <b>Programming Excellence:</b> Ace technical interviews with our extensive programming practice sessions. From coding challenges to algorithmic problem-solving, we cover a wide range of topics to ensure you're well-prepared for any technical interview.
            </li>
            <li>
              <b>Company-Specific Preparation:</b> Tailor your preparation to the specific requirements of top-notch companies. We provide detailed insights into the aptitude tests conducted by various organizations, giving you a competitive edge in the recruitment process.
            </li>
            <li>
              <b>Practice Tests:</b> Gauge your readiness with our realistic practice tests. Mimic real exam conditions and track your progress over time. Our adaptive testing system ensures a challenging yet personalized experience.
            </li>
          </ul>
        </p>
      </div>
      <div className="about-image">
        <img src={Aboutpic} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutSection;
