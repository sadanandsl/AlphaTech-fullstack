import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/Images/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container2">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="logo"><img src={logo} alt="logo"/></h2>
           
            <div className="contact">
              <span>Email: AlphaTech@gmail.com</span>
              <span>Phone: +91 7899272068</span>
            </div>
          </div>

          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/About">About Us</a></li>
            </ul>
          </div>

          <div className="footer-section social">
            <h2>Follow Us</h2>
            <div className="social-links">
              <a href="https://www.instagram.com/_.nikkkhill" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://www.instagram.com/_.nikkkhill" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.linkedin.com/in/sadanand-lalagi-227565229" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.linkedin.com/in/sadanand-lalagi-227565229" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Developed By Sadanand & NIkhil All rights reserved.</p>
      </div>
    </footer>  
  );
}

export default Footer;
