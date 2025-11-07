
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Responsive Design',
    description:
      'Responsive design ensures your website looks great and functions seamlessly on any device. It adapts to screens of all sizes, delivering accessibility, usability, and an engaging user experience.',
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Creative Design',
    description:
      'Creative design transforms ideas into visually striking experiences. It blends innovation, aesthetics, and strategy to capture attention, express identity, and deliver messages that inspire and connect effectively.',
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'SEO Optimized',
    description:
      'SEO optimized design boosts your website’s visibility, driving more traffic and engagement. It enhances search rankings, ensures faster performance, and helps your business reach the right audience effectively.',
  },
  {
    id: 4,
    icon: 'fas fa-desktop',
    title: 'Retina Ready',
    description:
      'Retina ready design delivers crisp, high-resolution visuals on modern devices. It enhances clarity, sharpness, and detail, ensuring your website looks stunning and professional on every screen.',
  },
  {
    id: 5,
    icon: 'fas fa-trophy',
    title: 'Browser Compatibility',
    description:
      'Browser compatibility ensures your website works seamlessly across all major browsers. It guarantees consistent performance, design, and functionality, providing every visitor with a smooth, reliable, and professional experience.',
  },
  {
    id: 6,
    icon: 'fas fa-life-ring',
    title: 'Customer Support',
    description:
      'Customer support provides timely, helpful assistance to ensure satisfaction and trust. Our dedicated team resolves issues, answers questions, and guides users, creating a positive, reliable experience.',
  },
];

const Services = () => {
  return (
    <section id="services" className="block services-block">
      <Container>
        <div className="text-center mb-5">
          <h2>Our Services</h2>
          <p className="subtitle">Services we provide</p>
        </div>

        <Row className="g-4">
          {servicesData.map((service) => (
            <Col key={service.id} xs={12} sm={6} md={4}>
              <div className="service-card text-center p-4 h-100">
                <div className="icon mb-3">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
