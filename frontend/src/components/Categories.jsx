import React from "react";
import icon from "../assets/Images/document1.png";

function CompaniesSection() {
  const handleScrollToProgramming = () => {
    const programmingSection = document.getElementById("Aptitude");
    programmingSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="containerCat">
      <div className="companies-section">
        <div className="company-box">
          <div className="heading">What do you want to do Today?</div>
          <div className="company-list">
            <div className="company-item">
              <a href="#Aptitude" onClick={handleScrollToProgramming}>
                <img className="company-icon" src={icon} alt="" />
              </a>
              <div className="prime-heading-job">Programming</div>
            </div>
            <div className="company-item">
              <a href="#Aptitude">
                <img className="company-icon" src={icon} alt="" />
              </a>
              <div className="prime-heading-job">Aptitude</div>
            </div>
            <div className="company-item">
              <a href="#Aptitude">
                <img className="company-icon" src={icon} alt="" />
              </a>
              <div className="prime-heading-job">Companies</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 m-auto what_to_right_section">
        <p className="companies_p">Choose what you want?</p>
        <p className="comapnies_text">
          Company wise previous papers/questions or you want to learn coding,
          aptitude or check interview experience just Choose from the left
        </p>
      </div>
    </div>
  );
}

export default CompaniesSection;