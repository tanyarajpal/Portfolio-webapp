import React from 'react'
import TimelineData from '../data.js';
import Timeline from './Timeline.js';
import './Education.css';
function Education() {
    return (
        <div id="education">
       <div className="edu" >Education</div>
        <div className="education" >
        
            <div className="box">
                {TimelineData.map((data) => {
                    return(
                      
                        <Timeline key={data.id} props={data} />
                      
                        
                    )
                })}
            </div>
            <div className="line"></div>
           
        </div>
        
        </div>
    )
}

export default Education
