import React, { useState } from 'react'
import  "./Projects.css";
import pdata from './ProjectData.js';
import {FaArrowRight,FaArrowLeft} from 'react-icons/fa';

function Projects() {

    const [current,setCurrent] = useState(0);
    const length = pdata.length;

    const nextSlide = ()=>{
        setCurrent(current === length-1 ? 0 : current+1);
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length-1 : current-1);
    }
    console.log(current);
    if(!Array.isArray(pdata) || pdata.length <=0) {
        return null;
    }

    return (
        <div className='project' id="project">
            <h1>PROJECTS</h1>
            <section className="slider">
           
            <FaArrowRight className="right" onClick={nextSlide}/>
                <FaArrowLeft className="left" onClick={prevSlide}/>
           
            
            {   pdata.map((data,index)=>{
                 return( 
                     <div key={index} className={index === current ? 'slide active' : 'slide' }>
                            {index  === current && (<div className="holder"><img src={data.image} alt='project' className='image' />{data.content}</div>)}
                            
                    </div>
                 );
            })}
            </section>
        </div>
    )
}

export default Projects
