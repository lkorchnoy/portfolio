import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Blogs from './Blogs';
import Contact from './Contact';

class Routing extends Component {
    render() {
return (
    <div className="wrapper">
    <Router>
    <Switch>
       <Route path='/about' component={About} />
       <Route path='/projects' component={Projects} />
       <Route path='/skills' component={Skills} />
       <Route path='/blogs' component={Blogs} />
       <Route path='/contact' component={Contact} />
   
   
   </Switch>
   </Router>
   </div>
   
    );
}
}

export default Routing; 