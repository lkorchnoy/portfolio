import React, { useState } from 'react';

import './App.css';
import Routing from './Routing'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
/* import { Button, Nav, Navbar, Container, NavDropdown, Form, FormControl } from 'react-bootstrap'; */


import Home from './Home'
import Image from './Image'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Blogs from './Blogs'
import Contact from './Contact'

import { motion, AnimatePresence } from "framer-motion"



function App () {
  const containerVariants = {
    hidden: {
      opacity: 3,
      x: '50vw'
    }, 
    visible: {
      opacity: 8,
      x: 0,
      transition: {
        type: 'spring',
        mass: 0.6,
        damping: 8,
         when: "beforeChildren",
         staggerChildren: 0.6
      }
    }
  }
  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1
    }
  }
  const [showTitle, setShowTitle] = useState(true);
   setTimeout(() => {
     setShowTitle(false);
   }, 6000);
  return (
    <div className="Header">
     
     
        
  {/* <Navbar expand="lg" variant="light" bg="light"> 
    <Container> 
    <Navbar.Brand href="/home">Home</Navbar.Brand>
    <Navbar.Brand href="/about">About</Navbar.Brand>
    <Navbar.Brand href="/projects">Projects</Navbar.Brand>
    <Navbar.Brand href="/skills">Skills</Navbar.Brand>
    <Navbar.Brand href="/blogs">Blogs</Navbar.Brand>
    <Navbar.Brand href="/contact">Let's Chat</Navbar.Brand>
  </Container>  
    
</Navbar> */}
    <motion.div className="container order"
    variants={containerVariants}
    initial="hidden"
    animate="visible">
      <AnimatePresence>
      { showTitle && (
       <motion.h1>Hi, I'm Lucy!</motion.h1> 
      )}
      </AnimatePresence>
  <motion.p variants={childVariants}>

        Software Developer | Designer</motion.p>
        </motion.div>
        
            <Image/><br></br>
            <About/><br></br>
            <Projects/><br></br>
            <Skills/><br></br>
            <br></br>
            <Blogs/><br></br>
            <Contact/><br></br>
            
           </div>
             
       
    );
  }


export default App;
