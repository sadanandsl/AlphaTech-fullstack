import React from 'react';
import { Carousel ,Container, Row, Col,} from 'react-bootstrap';
import testimg2 from "../assets/Images/testimg2.jpg";
import testimg4 from "../assets/Images/testimg4.jpg";
import testimg3 from "../assets/Images/corusal.jpg";

function Fslider() {
 
return (
    <Container>
      
      <Row className="mt-4">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img src={testimg4} className="d-block w-100" alt="Slide 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={testimg2} className="d-block w-100" alt="Slide 2" />
             
            </Carousel.Item>
            <Carousel.Item>
              <img src={testimg3} className="d-block w-100" alt="Slide 3" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Fslider;
