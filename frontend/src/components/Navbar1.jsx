import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button, Dropdown, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png';

function Navbar1() {
  const [userName, setUserName] = useState(() => localStorage.getItem('userName')); 

  useEffect(() => {
    // Update userName state when local storage changes
    const handleStorageChange = () => {
      setUserName(localStorage.getItem('userName'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); 
  const handleLogout = () => {
    localStorage.removeItem('userName');
    setUserName(null);
  };

  return (
    <Navbar expand="lg" className="bg-custom-color" variant="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/event">Events</Nav.Link>
            <Nav.Link as={Link} to="/test">Test</Nav.Link>
            <NavDropdown title="Practice" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Aptitude">Aptitude</NavDropdown.Item>
               <NavDropdown.Item href="#programming">Programming</NavDropdown.Item>
               <NavDropdown.Item href="#company">Companies</NavDropdown.Item>
               <NavDropdown.Item href="#Interview">Interview</NavDropdown.Item>
             </NavDropdown>
          </Nav>
          <Nav className="ml-auto">
            {userName ? (
              <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                  Welcome, {userName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link to="/login">
                <Button variant="outline-light">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbar1;

