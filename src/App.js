import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Navbar, Container, CardDeck } from 'react-bootstrap';
import Navigation from './Navigation'


import Image from './Image'
import About from './About';
import Projects from './Projects'
import Skills from './Skills'
import Blogs from './Blogs'
import Contact from './Contact'
import { motion } from 'framer-motion';



function App() {
  return (
   
    <Router>
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
    
            
        <h1>Hi, I'm Ludmila Korchnoy.</h1> 
        <h2>Software Developer | Innovator | Forever Learner</h2>
            <Image/>
            <About/>
            <Projects/>
            <Skills/>
            
            <Blogs/>
            <Contact/>
            
          </Router>
   
    )
}

export default App;
