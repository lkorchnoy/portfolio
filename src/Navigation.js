import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import Blogs from './Blogs';
import Skills from './Skills';
import Contact from './Contact';


function Navigation() {
    return (
        
           
    
    <Switch>
    <div className="App">
      
      <Route exact path="/"> <Projects /> </Route>
      <Route path="/about" component={About} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} /> 
      
      {<div className="navigation">
      
       <div className="navigation-sub">
        
        {/* <Link to="/about" className="item">About</Link> */}
        <Route exact path="/about" src={About} />
        {/* <Link to="/projects" className="item">Projects</Link> */}
        <Route exact path="/projects" src={Projects} />
        <Link to="/skills" className="item">Skills</Link>
        <Link to="/blogs" className="item">Blogs</Link>
        <Link to="/contact" className="item">Contact</Link>
        <Link to="/social" className="item">Social Media</Link>
        </div>
      </div>}
      
    </div>
    </Switch>
    
  );
} 

    
    


export default Navigation
