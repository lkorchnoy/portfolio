import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import Blogs from './Blogs';
import Skills from './Skills';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />

      <div className="navigation">
       <img src={logo} className="logo" alt="Image"/>
       <div className="navigation-sub">
        <Link to="/" className="item">Projects</Link>
        <Link to="/about" className="item">About</Link>
        <Link to="/blogs" className="item">Blogs</Link>
        <Link to="/skills" className="item">Skills</Link>
        <Link to="/contact" className="item">Contact</Link>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
