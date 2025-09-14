import React, { useState, useEffect } from 'react';
import icon from "../assets/Images/document1.png";
import { Link } from 'react-router-dom'; 

function Subcategoriesc() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/categories/3/subcategories/`);
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
    <div className="container4" id="company">
      <div className="companies-section3">
        <div className="company-box3">
          <div className="heading">Companies</div>
          <div className="company-list">
            {error && <div>Error: {error}</div>}
            {companies.map((company) => (
              <div className="company-item3" key={company.id}>
                <Link to={`${company.id}/questions`}>
                  <img className="company-icon" src={icon} alt=""/>
                </Link>
                <div className="prime-heading-job3">{company.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-6 m-auto what_to_right_section">
        <p className="companies_p3">Companies</p>
        <p className="companies_text3">
          Practice most frequently asked questions
        </p>
      </div>
    </div>
  );
}

export default Subcategoriesc;
