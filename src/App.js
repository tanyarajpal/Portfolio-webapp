import React from 'react';

import classes from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Skill from './components/Skills/Skills';
import Project from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
function App() {
  return (
    <div className={classes.App}>
    <Navbar/>
    
     <Home/>
     <Skill/>
     <Education/>
     <Project/>
    <Contact/>
    
    </div>
  );
}

export default App;
