

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
const pricingdata =[
 {
   id:'1',
   plan:'BASIC',
   price:'$49',
   feature:['wirebforming','hosting','5 pages','support & assistance','technology'],
   link:'https://www.MAMDAD.com'
 },
  {
   id:'2',
   plan:'PREMIUM',
   price:'$55',
   feature:['cyber security','hosting','5 pages','support & assistance','technology'],
   link:'https://www.cev.com'
 },
  {
   id:'1',
   plan:'ULTIMATE',
   price:'$99',
   feature:['AI support','hosting','5 pages','support & assistance','technology'],
   link:'https://www.shoppyweb.com'
 },
]

const Pricing = () => {
  return (
    <section id='pricing' className='block pricing-block'>
 <Container fluid>
  <div className='title-holder'>
    <h2 style={{color:'gray'}}> Pricing & plans</h2>
    <div className='subtitle'>check our pricing & plans</div>
  </div>
      <Row>
        {
          pricingdata.map(price =>{
            return(
            <Col sm={4} key={price.id}>
        <div className='heading'>
          <h3>{price.plan}</h3>
          <span className='price'> {price.price}</span>
          </div> 
          <div className='content'>
            <ListGroup>
              {
                price.feature.map((feature,index) =>{
                  return(
                    <ListGroup.Item key={index}>{feature}</ListGroup.Item>
                  )
                })
              }
     
    </ListGroup>
            </div> 
            <div className='btn-holder'>
              <a href={price.link} className='btn btn-primary' > order now</a>
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