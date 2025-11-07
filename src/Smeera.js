

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import vinod from './vinod.jpg';


const Smeera = () => {
  const HTML = 80;
  const java = 95;
  const mern = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder text-center mb-4">
          <h3>ABOUT US</h3>
          <div className="subtitle">Learn more about us</div>
        </div>

        <Row className="align-items-center">
          {/* LEFT: Image */}
          <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
            <Image src={vinod} alt="About us" fluid rounded className="about-image" />
          </Col>

          {/* RIGHT: Text + Progress Bars */}
          <Col xs={12} md={6}>
            <p>
              Welcome to <strong>Corporate</strong>, where professionalism meets innovation. 
              We are dedicated to helping businesses and individuals achieve their goals 
              with tailored solutions that inspire growth and success. Our team combines 
              trust, integrity, and long-term partnerships.
            
            
              Whether you’re looking to strengthen your brand, streamline operations, or 
              plan for the future, we are here to guide you every step of the way.
            </p>

            <div className="progress-section">
              <div className="progress-block">
                <h5>HTML / CSS / JavaScript</h5>
                <ProgressBar now={HTML} label={`${HTML}%`} animated />
              </div>

              <div className="progress-block">
                <h5>Responsive</h5>
                <ProgressBar now={java} label={`${java}%`} animated />
              </div>

              <div className="progress-block">
                <h5>Photoshop</h5>
                <ProgressBar now={mern} label={`${mern}%`} animated />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Smeera;
