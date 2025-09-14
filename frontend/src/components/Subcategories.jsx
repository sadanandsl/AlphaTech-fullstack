import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import icon from "../assets/Images/document1.png";

function Subcategories() {
  const { category_id } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/categories/1/subcategories/`);
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
  }, [category_id]);

  return (
    <div className="container1" id='Aptitude'>
      <div className="companies-section1">
        <div className="company-box1">
          <div className="heading">Aptitude</div>
          <div className="company-list">
            {error && <div>Error: {error}</div>}
            {subcategories.map((subcategory) => (
              <div className="company-item1" key={subcategory.id}>
             
                <Link to={`${subcategory.id}/questions`}>
                  <img className="company-icon" src={icon} alt=""/>
                </Link>
                <div className="prime-heading-job1">{subcategory.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-6 m-auto what_to_right_section">
        <p className="companies_p1">From Novice to Pro</p>
        <p className="comapnies_text1">
        Aptitude mastery is crucial, with the top 20% advancing to interviews in companies like TCS and Amazon. Regular practice is key for standing out in a competitive job market and excelling professionally.        </p>
      </div>
    </div>
  );
}

export default Subcategories;
