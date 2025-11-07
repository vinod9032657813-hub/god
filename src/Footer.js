
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';

const Footer = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <section id='footer' className='block footer-block'>
      <Container fluid>
        <div className='footer-content'>
          <div className='copyright'>
            © 2025 MOMDAD.com. All Rights Reserved.
          </div>

          <div className='socials'>
            <ul>
              <li>
                <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
                  <i className='fab fa-facebook-f'></i>
                </a>
              </li>
              <li>
                <a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {showGoTop && (
          <div className='go-top' onClick={goTop} title='Go to top'>
            <i className='fas fa-arrow-up'></i>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Footer;
