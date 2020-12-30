import React from 'react'


import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Container } from 'react-bootstrap';
import Projects from './Projects';
import About from './About';
import Blogs from './Blogs';
import Skills from './Skills';
import Contact from './Contact';

const Navbar = () => {
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
        </Router>
    )
}

export default Navbar;