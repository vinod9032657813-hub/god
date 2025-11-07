
import React,{useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './App.css'; // add responsive styles here

const malli = [
  {
    id: '1',
    image: require('../src/high.jpg.jpg'),
    title: 'The perfect design for your website',
    description:
      'The perfect design for your website blends creativity, functionality, and user experience. It captures your brand’s identity, engages visitors, and guides them smoothly to your goals.',
    link: 'https://www.amazon.com',
  },
  {
    id: '2',
    image: require('../src/high2.jpg.jpg'),
    title: 'Start Your Future Financial Plan',
    description:
      'Start your future financial plan today by setting clear goals and taking control of your money. Planning early helps you prepare for challenges and achieve dreams with confidence.',
    link: 'https://www.facebook.com',
  },
  {
    id: '3',
    image: require('../src/high3.jpg.jpg'),
    title: 'Enjoy the Difference',
    description:
      'Enjoy the difference that true quality and care bring. From thoughtful details to lasting value, the right choice turns ordinary moments into extraordinary experiences.',
    link: 'https://www.linkedin.com',
  },
];

const Alampur = () => {
 useEffect(() => {
    alert('👋 Welcome to Our momdad.com!');
  }, [])
  return (
    <section id='home' className='hero-block'>
      <Carousel fade interval={4000} pause='hover'>
        {malli.map((vijay) => (
          <Carousel.Item key={vijay.id}>
            <img
              className='d-block w-100 carousel-image'
              src={vijay.image}
              alt={'Slide ' + vijay.id}
            />

            <Carousel.Caption className='carousel-caption-custom'>
              <h3>{vijay.title}</h3>
              <p>{vijay.description}</p>
              <a
                className='btn btn-primary'
                href={vijay.link}
                target='_blank'
                rel='noreferrer'
              >
                Learn More <i className='fas fa-chevron-right'></i>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    
      
    </section>
  );
};

export default Alampur;
