
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import Pagination from 'react-bootstrap/Pagination';
 const workdata=[
      {
        id:1,
        link:'http://www.google.com',
        image:require('../src/img1.jpg'),
        title:'lonely path',
        subtitle:'web design'
      },
       {
        id:2,
        link:'http://www.google.com',
        image:require('../src/img2.jpg'),
        title:'photographer ',
        subtitle:'branding'
      },
       {
        id:3,
        link:'http://www.google.com',
        image:require('../src/img3.jpg'),
        title:'new technology',
        subtitle:'new programs'
      },
       {
        id:4,
        link:'http://www.google.com',
        image:require('../src/img4.jpg'),
        title:'nature patterns',
        subtitle:'graphical'
      },
       {
        id:5,
        link:'http://www.google.com',
        image:require('../src/img5.jpg'),
        title:'the defference',
        subtitle:'phptography'
      },
       {
        id:6,
        link:'http://www.google.com',
        image:require('../src/img6.jpg'),
        alt:'project image',
        title:'wintare sonata',
        subtitle:'web design'
      },
       {
        id:7,
        link:'http://www.google.com',
        image:require('../src/img7.jpg'),
        alt:'project image',
        title:'advance staff',
        subtitle:'any development'
      },
       {
        id:8,
        link:'http://www.google.com',
        image:require('../src/img8.jpg'),
        alt:'project image',
        title:'appreciation',
        subtitle:'photography'
      },
       {
        id:9,
        link:'http://www.google.com',
        image:require('../src/img9.jpg'),
        alt:'project image',
        title:'good planning',
        subtitle:'for anu development'
      }
    ]
    
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const Works = () => {
  return (
      <section id="works" className='block works-block'>
    <Container fluid>
        <div className='title-holder'>
            <h2>our works</h2>
            <div className='subtitle'> our awesome works</div>
        </div>
        
      <Row className='portfoliolist'>
         {
  workdata.map(work => {
  return(

    <Col sm={4}  key={work.id}>
        <div className='portfolio-wrapper'>
            <a href={work.link}>
                <img src={work.image} alt={work.alt}/>
                <div className='label text-center'>
      <h3>{work.title}</h3>
      <p>{work.subtitle}</p></div></a></div>
    </Col>
)})
}       
      </Row>
      <Pagination>{items}</Pagination>
    </Container></section>
  )
}

export default Works