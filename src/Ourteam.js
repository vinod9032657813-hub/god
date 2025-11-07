

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './App.css';

const teamsdata = [
  {
    id: "1",
    image: require('../src/img10.jpg'),
    fblink: 'http://www.facebook.com',
    twitterlink: 'http://www.twitter.com',
    linkedlink: 'http://www.linkedin.com',
    name: 'm vinod kumar',
    designation: 'founder',
    description: 'he is an intelligent and craziest person. He started it in 2026 for producing (pellets, brights, power) through the cotton trees. Now he is one of the billionaires in India.'
  },
  {
    id: "2",
    image: require('../src/img11.jpg'),
    fblink: 'http://www.facebook.com',
    twitterlink: 'http://www.twitter.com',
    linkedlink: 'http://www.linkedin.com',
    name: 'm veeresh',
    designation: 'ceo',
    description: 'He is a good graphic designer and editor in social media. Now he is one of the billionaires in India.'
  },
  {
    id: "3",
    image: require('../src/img12.jpg'),
    fblink: 'http://www.facebook.com',
    twitterlink: 'http://www.twitter.com',
    linkedlink: 'http://www.linkedin.com',
    name: 'g damodar goud',
    designation: 'chief manager',
    description: 'He is a good mythologist who helps plan according to the Bhagavad Gita.'
  },
  {
    id: "4",
    image: require('../src/img13.jpg'),
    fblink: 'http://www.facebook.com',
    twitterlink: 'http://www.twitter.com',
    linkedlink: 'http://www.linkedin.com',
    name: 'm ashok kumar',
    designation: 'chief executive',
    description: 'He is a great communicator. Now he is one of the billionaires in India.'
  },
  {
    id: "5",
    image: require('../src/img16.jpg'),
    fblink: 'http://www.facebook.com',
    twitterlink: 'http://www.twitter.com',
    linkedlink: 'http://www.linkedin.com',
    name: 'givindhu raju',
    designation: 'chief employer',
    description: 'He can communicate well with people through emotional intelligence and empathy.'
  },
  {
    id: "6",
    image: require('../src/img20.jpg'),
    fblink: 'http://www.facebook.com',
    twitterlink: 'http://www.twitter.com',
    linkedlink: 'http://www.linkedin.com',
    name: 'daveedu',
    designation: 'chief raw material manager',
    description: 'He is a hardworking member who handles physical and production tasks efficiently.'
  },
];

const Ourteam = () => {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder text-center mb-4">
          <h2>OUR TEAMS</h2>
          <p className="subtitle">Some of our experts</p>
        </div>
        <Row className="g-4">
          {teamsdata.map(team => (
            <Col key={team.id} xs={12} sm={4} md={4} lg={4}>
              <div className="team-card">
                <div className="image">
                  <Image src={team.image} alt={team.name} fluid rounded />
                  <div className="overlay">
                    <div className="socials">
                      <ul>
                        <li><a href={team.fblink}><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href={team.twitterlink}><i className="fab fa-twitter"></i></a></li>
                        <li><a href={team.linkedlink}><i className="fab fa-linkedin-in"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="content">
                  <h3>{team.name}</h3>
                  <span className="designation">{team.designation}</span>
                  <p>{team.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Ourteam;
