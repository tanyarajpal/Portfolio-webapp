import React from 'react';
import './Contact.css';
import {FaTwitter,FaInstagram,FaLinkedin, FaEnvelope} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
const Contact = () =>{
    return(
        <div className="contact" id="contact">
            <h4>Feel free to contact me</h4>
            <div className="icons">
            <IconContext.Provider 
           value={{
              
               size:'25px',
               zIndex:'0px'
               
           }}
           >
            <a href="/"><FaTwitter id="icon" style={{color:'blue',margin:'10px'}}/></a>
            <a href="https:/"> <FaInstagram id="icon" style={{margin:'10px',color:'pink'}}/></a>
             <a href="https://"><FaLinkedin id="icon" style={{fill:'blue',margin:'10px'}}/></a>
            <a href="/"> <FaEnvelope id="icon" style={{fill:'brown',margin:'10px'}}/></a>
             </IconContext.Provider >
          </div>
        </div>
    );
};

export default Contact;