
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './App.css'; // keep styles here



const About = () => {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container>
        <div className="text-center mb-4">
          <h2>About Us</h2>
          <p className="subtitle">Learn more about us</p>
        </div>

        <Row className="align-items-center">
          {/* Left Side: Image */}
          <Col xs={12} md={6}  className="mb-4 mb-md-0">
           <h2><img src="vinod.jpg"/></h2>
          </Col>  
          {/* Right Side: Content */}
          <Col xs={12} md={6} >
            <div className="about-content">
              <p>
                Welcome to <strong>Corporate</strong>, where professionalism meets innovation.
                We are dedicated to helping businesses and individuals achieve their goals
                with tailored solutions that inspire growth and success. Our team combin
                a difference.
              </p>

              <p>
                At Corporate, we value trust, integrity, and long-term partnerships.
                Whether you’re looking to strengthen your brand, streamline operations,
                Corporate is more than a name — it’s your partner in progress.
              </p>

              <div className="progress-block">
                <h5>HTML / CSS / JavaScript</h5>
                <ProgressBar now={html} label={`${html}%`} />
              </div>

              <div className="progress-block">
                <h5>Responsive Design</h5>
                <ProgressBar now={responsive} label={`${responsive}%`} />
              </div>

              <div className="progress-block">
                <h5>Photoshop</h5>
                <ProgressBar now={photoshop} label={`${photoshop}%`} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
