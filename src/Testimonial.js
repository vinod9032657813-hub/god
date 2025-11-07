
import React from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import './App.css'
var testimonialsdate =[
  {
    id:"1",
    name:"vinod kumar",
    description:"Working with Corporate was seamless. They understood our vision and exceeded expectations with their creativity and expertise. Our business has never looked better online.",
  designation:"founder"
  
  },
  {
    id:"1",
    name:"simhadri",
    description:"The support and guidance from Corporate have been outstanding. Their attention to detail and commitment to excellence made a real difference for our company.",
  designation:"partner"
  },
  {
    id:"1",
    name:"govindhu raju",
    description:"Corporate transformed our online presence with their innovative solutions. Their team is professional, responsive, and truly cares about delivering results. Highly recommended!",
    designation:"financial support" 
  }
]


const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="testimonials-block"
      style={{
        backgroundImage: "url('/src/img17.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "60px 0"
      }}
    >


      <Container fluid  className='ddd'>
        
      
        
        <div className='title-holder'>
          <h2 style={{ color: 'white' }}>Client Testimonial</h2>
          <div className='subtitle'>What clients say about us</div>
        </div>
        <Carousel controls={false}>
          {testimonialsdate.map(testi => (
            <Carousel.Item key={testi.id}>
              
              
              <blockquote>
                <p>{testi.description}</p>
                <cite>
                  <span className='name'>{testi.name}</span>
                  <span className='designastion'>{testi.designation}</span>
                </cite>
              </blockquote>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};




export default Testimonial