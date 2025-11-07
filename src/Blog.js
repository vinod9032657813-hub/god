

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
const pricingdata =[
 {
   id:'1',
   image:require('../src/img17.jpg'),
   time:'AUG 15 2020',
   title:'TEA LOVERS',
   description:'For coffee lovers, every sip is more than a drink—it’s an experience. Rich aromas, bold flavors, and perfect brews create moments of comfort, energy, and pure enjoyment every day.',
   link:'https://www.MAMDAD.com'
 },
 {
   id:'2',
   image:require('../src/img18.jpg'),
   time:'FEB 15 2020',
   title:'TIPS FOR UI DESIGN',
   description:'Effective UI design combines clarity, simplicity, and aesthetics. Focus on intuitive navigation, consistent visuals, responsive layouts, and user-friendly interactions.',
   link:'https://www.MAMDAD.com'
 },
 {
   id:'3',
   image:require('../src/img19.jpg'),
   time:'NOV 3 2019',
   title:'BEAUTIFULL DAY',
   description:'A beautiful day brings warmth, light, and positivity. It’s a chance to embrace joy, connect with nature, and appreciate life’s simple moments, leaving you refreshed and inspired.',
    link:'https://www.CEV.com'
 },
]

const Pricing = () => {
  return (
    <section id='blog' className='block blog-block'>
 <Container fluid>
  <div className='title-holder'>
    <h2 style={{color:'gray'}}> LATEST FROM BLOG</h2>
    <div className='subtitle'>get our latest news from blog</div>
  </div>
      <Row>
        {
          pricingdata.map(price =>{
            return(
            <Col sm={4} key={price.id}>
        <div className='holder'>
          <Card>
      <Card.Img variant="top" src={price.image} />
      <Card.Body>
        <time>{price.time}</time>
        <Card.Title>{price.title}</Card.Title>
        <Card.Text>
          {price.description}
        </Card.Text>
        <a href={price.link}  className='btn btn-primary'>read more <i className="fas fa-chevron-right"></i></a>
      </Card.Body>
    </Card>
            </div> 
                
        </Col>

            )
          })
        }
        
      </Row>
    </Container>
    </section>
  )
}

export default Pricing