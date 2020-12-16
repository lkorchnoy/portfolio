import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CardDeck, Card } from 'react-bootstrap';
import { motion } from 'framer-motion'

function Blogs() {
    return (
      <div class="container">
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 2,
              opacity: 1,
              transition: {
                delay: .6
              }
            },
          }}>
              
              <h3 className="title">Blogs</h3><br></br>
        </motion.div>

        <CardDeck>
        <Card>
        
        <Card.Body>
          <Card.Title>State and Props</Card.Title>
          <Card.Text>
          In React-Redux application there is a local state and store state (state of the application).
          </Card.Text>
        </Card.Body>
        <Card.Body>
  <Card.Link href="https://ludmilakorchnoy.medium.com/state-and-props-46dd98e4cb56">Read on Medium</Card.Link>
  </Card.Body>
  </Card>

  <Card>
  <Card.Body>
          <Card.Title>Associations In Rails</Card.Title>
          <Card.Text>
          Associations happen in a Model class. Belongs_to association, which in my Startup class, must be singular 
          </Card.Text>
        </Card.Body>
        <Card.Body>
  <Card.Link href="https://ludmilakorchnoy.medium.com/associations-in-rails-534d8c78e7be">Read on Medium</Card.Link>
  </Card.Body>
  </Card>

  <Card>
  <Card.Body>
          <Card.Title>My Flatiron Journey</Card.Title>
          <Card.Text>
          My journey to flatiron started with my fascination with hi tech. I expressed it by writing a blog 
          </Card.Text>
        </Card.Body>
        <Card.Body>
  <Card.Link href="https://ludmilakorchnoy.medium.com/my-flatiron-journey-584fc2c988ab">Read on Medium</Card.Link>
  </Card.Body>
  </Card>

</CardDeck>
</div>

    )
}

export default Blogs
