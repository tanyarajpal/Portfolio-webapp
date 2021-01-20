import React from 'react'
import './Timeline.css';
const Timeline = ({props}) => {
    return (
      
        <div className="content-box">
          {props.title}
          {props.content}
             
        </div>
      
     
    )
}

export default Timeline
