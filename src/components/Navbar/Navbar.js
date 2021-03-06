import React, { useState } from 'react'
import './Navbar.css';
import {Link} from 'react-scroll';
//import { useEffect } from "react";
function Navbar() {

    const [active,setActive]=useState(false);

    const handleToggle = ()=>{
        setActive(!active);
    }
   
    return (
        <div className="Navbar">
             <Link  className="name" to="home" smooth={true} spy={true} offset={-70} duration={500}>Tanya Rajpal</Link>

                <div className="menu">
                
                
                <Link id="link"  to="home" smooth={true} spy={true} offset={-70} duration={500}>Home</Link>
                <Link id="link" to="skill"  smooth={true} spy={true} offset={-70} duration={500}>Skill</Link>
                <Link id="link" to="project"  smooth={true} spy={true} offset={-70} duration={500}>Project</Link>
                <Link id="link" to="contact"  smooth={true} spy={true} offset={-70} duration={500}>Contact</Link>
                <Link id="link" to="education"  smooth={true} spy={true} offset={-70} duration={500}>Education</Link>
                </div>
                <div className={active ? "activemenu open" : "activemenu"}>
                <Link onClick={handleToggle} to="home" smooth={true} spy={true} offset={-70} duration={500}>Home</Link>
                <Link  onClick={handleToggle} to="skill"  smooth={true} spy={true} offset={-70} duration={500}>Skill</Link>
                <Link  onClick={handleToggle} to="project"  smooth={true} spy={true} offset={-70} duration={500}>Project</Link>
                <Link  onClick={handleToggle} to="contact"  smooth={true} spy={true} offset={-70} duration={500}>Contact</Link>
                <Link  onClick={handleToggle} to="education"  smooth={true} spy={true} offset={-70} duration={500}>Education</Link>
                </div>
              <div className="bt" onClick={handleToggle}>
                  <>
                <div className={active? "line1 active":"line1 "}></div>
                <div className={active? "line2 active":"line2 "}></div>
                <div className={active? "line3 active":"line3"}></div>
                </>
              </div>
        </div>
    )
}

export default Navbar;
