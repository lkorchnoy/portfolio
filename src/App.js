import React, { useState } from 'react';
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
// import { motion } from 'framer-motion';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from "framer-motion"



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
    <motion.div className="container order"
    variants={containerVariants}
    initial="hidden"
    animate="visible">
      <AnimatePresence>
      { showTitle && (
       <motion.h1>Hi, I'm Ludmila Korchnoy!</motion.h1> 
      )}
      </AnimatePresence>
  <motion.p variants={childVariants}>

        Software Developer | Designer</motion.p>
        </motion.div>
            <Image/><br></br>
            <About/><br></br>
            <Projects/><br></br>
            <Skills/><br></br>
            <Blogs/><br></br>
            <Contact/><br></br>
           
            
            </Router>
       
    );
  }


export default App;
