import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import icon from "../assets/Images/document1.png";

function CompaniesSubSection2() {
  const [subcategories, setSubcategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/categories/4/subcategories/`);
        if (!response.ok) {
          throw new Error('Failed to fetch subcategories');
        }
        const data = await response.json();
        setSubcategories(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching subcategories:', error);
      }
    };

    fetchSubcategories();
  }, []);

  return (
    <div className="container3" id="programming">
      <div className="companies-section2">
        <div className="company-box2">
          <div className="heading">Programming</div>
          <div className="company-list">
            {error && <div>Error: {error}</div>}
            {subcategories.map((subcategory) => (
              <div className="company-item2" key={subcategory.id}>
                {/* Use Link to navigate to questions page with subcategory id */}
                <Link to={`${subcategory.id}/questions`}>
                  <img className="company-icon" src={icon} alt=""/>
                </Link>
                <div className="prime-heading-job2">{subcategory.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-6 m-auto what_to_right_section">
        <p className="companies_p2">Programming/CS</p>
        <p className="comapnies_text2">
          Competitive Coding, Basic / Advanced Coding, Top Codes, of Languages like - C/C++/Java or CS Subjects Like OS, DBMS etc
        </p>
      </div>
    </div>
  );
};

export default CompaniesSubSection2;
