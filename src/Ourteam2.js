

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './App.css';
const teamsdata =[
    {
     id:"1",
     image:require('../src/img10.jpg'),
     fblink:'http://www.facebook.com',
      twitterlink:'http://www.twitter.com',
       linkedlink:'http://www.linkedin.com',
       name:'m vinod kumar',
       designation:'founder',
       description:' he is a intellegent and craziest person.he started it in 2026 for producing (pellets,brights,power)throught the cotton trees now he is one of the billianear in india'
    },
    {
     id:"2",
     image:require('../src/img11.jpg'),
     fblink:'http://www.facebook.com',
      twitterlink:'http://www.twitter.com',
       linkedlink:'http://www.linkedin.com',
       name:'m veeresh',
       designation:'ceo',
       description:'  he is good graphical designer in socail media in edinting macking it beautifull. now he is one of the billianear in india'
    },
    {
     id:"3",
     image:require('../src/img12.jpg'),
     fblink:'http://www.facebook.com',
      twitterlink:'http://www.twitter.com',
       linkedlink:'http://www.linkedin.com',
       name:'g damodar goud',
       designation:'chief manager',
       description:'he is a good mythologist helps that to plean accordingly bagavathgeethaa '
    },
    {
     id:"4",
     image:require('../src/img13.jpg'),
     fblink:'http://www.facebook.com',
      twitterlink:'http://www.twitter.com',
       linkedlink:'http://www.linkedin.com',
       name:'m ashok kumar',
       designation:'chief executive',
       description:'he is the biggest one of the person who can talk well with people. now he is one of the billianear in india'
    },
    {
     id:"5",
     image:require('../src/img16.jpg'),
     fblink:'http://www.facebook.com',
      twitterlink:'http://www.twitter.com',
       linkedlink:'http://www.linkedin.com',
       name:'givindhu  raju',
       designation:'chief employer',
         description:'he can communicate well with people thoght emotionally good way of talking '
    },  
    {
     id:"6",
     image:require('../src/img20.jpg'),
     fblink:'http://www.facebook.com',
      twitterlink:'http://www.twitter.com',
       linkedlink:'http://www.linkedin.com',
       name:'daveedu',
       designation:'chief raw material manager',
       description:' he is the hardworker in our team to do big works which are related to physically now he is one of the billianear in india'
    },
]


const Ourteam = () => {
  return (
    <section id="teams" className='block teams-block' >
      
         <Container fluid >
            <div className='title-holder'>
                <h2>OUR TEAMS</h2>
                <p className='subtitle'>some of our experts</p>
            </div>
      <Row>{
        teamsdata.map(team =>{
            return(
 <Col sm={4} key={team.id}>
        <div className='image'>
          
            <img src={team.image} alt="image"  />
            <div className='overlay'>
                <div className='socials'>
                    <ul>
                        <li><a href={team.fblink}><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href={team.twitterlink}><i className="fab fa-twitter"></i></a></li>
                        <li><a href={team.linkedlink}><i className='fab fa-linkedin-in'></i></a></li>
                    </ul>
                </div>
            </div>

        </div>
        <div className='content'  >
          
<h3>{team.name}</h3>
<span className='designation'>{team.designation}</span>
<p>{ team.description } </p>
        </div>
        </Col>

            )
        } )}
       
      </Row>
    </Container>
    </section>
  )
}

export default Ourteam