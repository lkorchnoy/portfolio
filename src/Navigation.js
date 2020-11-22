import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import Blogs from './Blogs';
import Skills from './Skills';
import Contact from './Contact';


function Navigation() {
    return (
        
           
    <BrowserRouter>
    <Switch>
    <div className="App">
      
      <Route exact path="/" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />
      
      <div className="navigation">
      {/* <img src={logo} className="logo" alt="Image"/> */}
       <div className="navigation-sub">
        
        <Link to="/about" className="item">About</Link>
        <Link to="/projects" className="item">Projects</Link>
        <Link to="/skills" className="item">Skills</Link>
        <Link to="/blogs" className="item">Blogs</Link>
        <Link to="/contact" className="item">Contact</Link>
        <Link to="/social" className="item">Social Media</Link>
        </div>
      </div>
      
    </div>
    </Switch>
    </BrowserRouter>
  );
} 

    
    


export default Navigation
