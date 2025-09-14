

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import testicon from '../assets/Images/test.jpg';
import testicon1 from '../assets/Images/apti3.jpg';
import testicon2 from '../assets/Images/apti2.jpeg';

function TestDesc({ onStartClick }) {
  const [scheduled, setScheduled] = useState([true, true, true]); 

  const handleStartClick = (index) => {
    setScheduled(scheduled.map((item, i) => (i === index ? false : item)));
    if (index === 0) {
      onStartClick(); // Call onStartClick function passed from parent only for the first card
    }
  };

  return (
    <div className='containerS'>
      <br />
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={testicon} />
        <Card.Body>
          <Card.Title>Aptitude</Card.Title>
          <Card.Text>
            Attend the aptitude test and gain the XP points.
            The test contains 60 questions and lasts for 50 minutes.
          </Card.Text>
          <Button variant="primary" onClick={() => handleStartClick(0)} disabled={!scheduled[0]}>
            {scheduled[0] ? 'Start' : 'Scheduled for March 6th'}
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={testicon1} />
        <Card.Body>
          <Card.Title>Aptitude</Card.Title>
          <Card.Text>
            Attend the aptitude test and gain the XP points.
            The test contains 60 questions and lasts for 50 minutes.
          </Card.Text>
          <Button variant="primary" onClick={() => handleStartClick(1)} disabled={!scheduled[1]}>
            {scheduled[1] ? 'Start' : 'Scheduled for March 6th'}
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={testicon2} />
        <Card.Body>
          <Card.Title>Aptitude</Card.Title>
          <Card.Text>
            Attend the aptitude test and gain the XP points.
            The test contains 60 questions and lasts for 50 minutes.
          </Card.Text>
          <Button variant="primary" onClick={() => handleStartClick(2)} disabled={!scheduled[2]}>
            {scheduled[2] ? 'Start' : 'Scheduled for March 6th'}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TestDesc;

