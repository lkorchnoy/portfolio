import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation'
import { Button, Navbar, Container, CardDeck } from 'react-bootstrap';

import About from './About';
import Projects from './Projects'


// import { motion } from "framer-motion"
function App() {
  return (
    
    <BrowserRouter>
    <Switch>
      
    <Navbar expand="lg" variant="light" bg="light">
  <Container>
  
    <Navbar.Brand href="/about">About</Navbar.Brand>
    <Navbar.Brand href="/projects">Projects</Navbar.Brand>
    <Navbar.Brand href="/skills">Skills</Navbar.Brand>
    <Navbar.Brand href="/blogs">Blogs</Navbar.Brand>
    <Navbar.Brand href="/contact">Contact</Navbar.Brand>
    <Navbar.Brand href="/social">Let's Chat</Navbar.Brand>
  </Container>
   </Navbar>
    </Switch>
             <About/>
            <Projects/>
     </BrowserRouter>
     


 



     )
}

export default App;
