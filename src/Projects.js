import React from 'react'
import Thumbnail from './Thumbnail';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CardDeck, Card } from 'react-bootstrap';


import Image1 from './img1.jpg';
import Image2 from './img2.jpg';
import Image3 from './img3.jpg';


export default function Projects() {
   
    return (
        <CardDeck>
        <Card>
          <Card.Img variant="top" src={Image1} alt="Startups image" />
          <Card.Body>
            <Card.Title>Ordinary Startups</Card.Title>
            <Card.Text>
            App features disrupt startups with avant-garde concepts and high technology that provide easy solutions for everyday tasks.
            </Card.Text>
          </Card.Body>
          <Card.Body>
    <Card.Link href="https://github.com/lkorchnoy/ordinary-startups.git">Code</Card.Link>
    <Card.Link href="https://youtu.be/YbFmj_zaPo4">Demo</Card.Link>
    <Card.Link href="#">Live Site</Card.Link>

  </Card.Body>
          <Card.Footer>
            <small className="text-muted">Ruby on Rails | Material UI</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Perfect Plant</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Free Time</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      
    )
}
