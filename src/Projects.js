import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CardDeck, Card } from 'react-bootstrap';
import { motion } from 'framer-motion'


import Image1 from './img1.jpg';
import Image2 from './img2.jpg';
import Image3 from './img3.jpg';


export default function Projects() {
   
    return (
      
       <div class="wrapper">
       <h3>Projects</h3>

        <CardDeck>
          <Card>
          <Card.Img variant="top" src={Image1} alt="Startups image" />
          <Card.Body>
            <Card.Title>Ordinary Startups</Card.Title>
            <Card.Text>
            App features startups with avant-garde concepts and high tech that provide easy solutions for everyday tasks.
            </Card.Text>
          </Card.Body>
          <Card.Body>
    <Card.Link href="https://github.com/lkorchnoy/ordinary-startups.git">GitHub</Card.Link>
    <Card.Link href="https://youtu.be/YbFmj_zaPo4">Demo</Card.Link>
    <Card.Link href="#">Live Site</Card.Link>

  </Card.Body>
          <Card.Footer>
            <small className="text-muted">Ruby on Rails | Material UI</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={Image2} alt="Perfect plant image" />
          <Card.Body>
            <Card.Title>Perfect Plant</Card.Title>
            <Card.Text>
            This app is based on a personality test which suggests the perfect indoor plant for every type of personality.
            </Card.Text>
          </Card.Body>
          <Card.Body>
    <Card.Link href="https://github.com/lkorchnoy/perfect_plant.git">GitHub</Card.Link>
    <Card.Link href="https://youtu.be/y7hLYzzihH4">Demo</Card.Link>
    <Card.Link href="#">Live Site</Card.Link>

  </Card.Body>
          <Card.Footer>
            <small className="text-muted">Javascript | Ruby on Rails | Bootstrap 4</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={Image3} alt="Free time image" />
          <Card.Body>
            <Card.Title>Free Time</Card.Title>
            <Card.Text>
            App for creating and sharing music videos. Create your own playlist or share your music video.
            </Card.Text>
          </Card.Body>
          <Card.Body>
    <Card.Link href="https://github.com/lkorchnoy/react_project.git">GitHub</Card.Link>
    <Card.Link href="https://youtu.be/2Y70BMHmHe8">Demo</Card.Link>
    <Card.Link href="#">Live Site</Card.Link>

  </Card.Body>
          <Card.Footer>
            <small className="text-muted">React | Redux | Ruby on Rails</small>
          </Card.Footer>
        </Card>
      </CardDeck>
     </div>
      
    )
}
