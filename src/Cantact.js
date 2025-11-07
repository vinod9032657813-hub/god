

import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './App.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: ''
  });

  // handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:4000/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      console.log('Server Response:', result);
      alert('✅ Data sent successfully!');
    } catch (err) {
      console.error('❌ Error sending data:', err);
    }
  };
  return (
    <section id='contact' className='block contact-block'>
      <Container fluid>
        <div className='title-holder text-center mb-4'>
          <h2>Contact Us</h2>
          <div className='subtitle'>Get connected with us</div>
        </div>
 
        {/* Contact Form */}
        <Form  onSubmit={handleSubmit}>
          <div className='contact-form'>
          <Row className='g-3'>
            <Col xs={12} md={4}>
              <Form.Control type='text' name='name'  id="name" value={formData.name} onChange={handleChange}  placeholder='Enter your full name' required />
            </Col>
            <Col xs={12} md={4}>
              <Form.Control type='email'  name='email' id='email'value={formData.email} onChange={handleChange}  placeholder='Enter your email' required />
            </Col>
            <Col xs={12} md={4}>
              <Form.Control type='tel' name='number'  id='number'value={formData.number} onChange={handleChange}  placeholder='Enter your contact number' required />
            </Col>
          </Row>

          <Row className='mt-3'>
            <Col xs={12}>
              <Form.Control as='textarea' rows={4} placeholder='Enter your message' />
            </Col>
          </Row>

          <div className='btn-holder text-center mt-3'>
            <Button type='submit' variant='primary'>
              Submit
            </Button>
          </div></div>
        </Form>
      </Container>

      {/* Google Map */}
      <div className='google-map mt-4'>
        <iframe
          title='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30740.70882199629!2d77.47365530281358!3d15.613614140091219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6433596c8b619%3A0xfc8ab62c56912fa7!2z4LCs4LCo4LC14LCo4LGB4LCw4LGNLCDgsIbgsILgsKfgsY3gsLAg4LCq4LGN4LCw4LCm4LGH4LC24LGNIDUxODM1MA!5e0!3m2!1ste!2sin!4v1760874362276!5m2!1ste!2sin'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          style={{
            border: 0,
            width: '100%',
            height: '350px',
            borderRadius: '10px',
          }}
        ></iframe>
      </div>

      {/* Contact Info */}
      <Container fluid className='mt-4'>
        <div className='contact-info text-center'>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li className='mb-2'>
              <i className='fas fa-envelope' style={{ marginRight: '10px' }}></i>
              hello@domain.com
            </li>
            <li className='mb-2'>
              <i className='fas fa-phone' style={{ marginRight: '10px' }}></i>
              9032657813
            </li>
            <li>
              <i className='fas fa-map-marker-alt' style={{ marginRight: '10px' }}></i>
              Banavanur, India
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
