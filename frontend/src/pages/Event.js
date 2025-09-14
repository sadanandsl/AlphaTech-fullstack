import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    
    fetch('http://127.0.0.1:8000/api/events/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        return response.json();
      })
      .then(data => {
        setEvents(data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div className='containerS'>
      {events.map(event => (
        <Card key={event.id} style={{ width: '18rem', height: '100%', marginBottom: '20px' }}>
          <Card.Img variant="top" src={event.image} />
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text style={{ height: '100px', overflow: 'hidden', marginBottom: '10px' }}>
              {event.description}
            </Card.Text>
            <Link to={event.link}>
              <Button variant="primary">
                Start
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Event;
