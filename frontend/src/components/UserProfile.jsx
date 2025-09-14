import React, { useState} from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import defaultAvatar from '../assets/Images/avatar-default-icon.png';
import { useNavigate } from 'react-router-dom'; 

function UserProfile() {
  const [show, setShow] = useState(true); // Set show to true initially to display the modal
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleClose = () => setShow(false);

  const handleSave = () => {
    // Handle saving user profile data
    console.log('Data saved successfully!');

    // You can optionally navigate to another page after saving the data
    // navigate('/');
  };

  const handleNavigateToHome = () => {
    // Navigate to the home page
    navigate('/');
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center">
            <Col xs={12} md={6} className="text-center">
              {/* Default Round Avatar */}
              <img src={defaultAvatar} alt="Avatar" className="avatar-img" /> {/* Use imported image */}
            </Col>
          </Row>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" readOnly value={localStorage.getItem('userName')} />
            </Form.Group>
            <Form.Group controlId="formBasicResume">
              <Form.Label>Resume</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="formBasicQualifications">
              <Form.Label>Qualifications</Form.Label>
              <Form.Control type="text" placeholder="Enter your qualifications" />
            </Form.Group>
            <Form.Group controlId="formBasicCollege">
              <Form.Label>College</Form.Label>
              <Form.Control type="text" placeholder="Enter your college details" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNavigateToHome}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserProfile;
