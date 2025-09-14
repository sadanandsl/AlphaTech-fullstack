import React, { useState, useEffect } from 'react';
import icon from "../assets/Images/document1.png";

function CompaniesSubSection4() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/categories/5/subcategories/`);
        if (!response.ok) {
          throw new Error('Failed to fetch companies');
        }
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className="container5" id="Interview">
      <div className="companies-section4">
        <div className="company-box4">
          <div className="heading">Interview</div>
          <div className="company-list">
            {error && <div>Error: {error}</div>}
            {companies.map((company) => (
              <div className="company-item4" key={company.id}>
                <a href="https://www.instagram.com/_.nikkkhill">
                  <img className="company-icon" src={icon} alt=""/>
                </a>
                <div className="prime-heading-job4">{company.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-6 m-auto what_to_right_section">
        <p className="companies_p4">Interview</p>
        <p className="comapnies_text4">
          An interview is a structured dialogue between an interviewer and interviewee(s), often used in research, journalism, or employment contexts, aiming to gather information, insights, or assess qualifications through a series of questions and responses.<br/>
Non-Technical:
An interview is a conversation where one person asks another person questions to learn more about them or their experiences. It's commonly used in job interviews, media interviews, or when conducting research to gather information.
        </p>
      </div>
    </div>
  );
};

export default CompaniesSubSection4;
