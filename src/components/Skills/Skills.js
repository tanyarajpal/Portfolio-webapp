import React ,{useEffect} from 'react'
import './Skills.css';
import {FaGithub} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import codechef from '../../Image/codechef.png'
import codeforces from '../../Image/codeforces.png'
import geeks from '../../Image/Geeks.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Skills() {

    useEffect(() =>{
        Aos.init({duration:2000});
    }, []);
    return (
        <div className="s" id="skill" >
            <div style={{fontSize:'50px'}}>Skills</div>
            <div className="skill">
                <div className="bar" data-aos="fade-down">
                    <ul>
                        
                    <li><div className="html">html</div>90%</li>
                    <li><div className="css">css</div>90%</li>
                    <li><div className="js">javascript</div>80%</li>
                    <li><div className="boot">bootstrap</div>80%</li>
                    <li><div className="fb">firebase</div>60%</li>
                    <li><div className="react">React</div>80%</li>
                    <li><div className="cp">cp</div>70%</li>
                  
                    </ul>
                    
                </div>
               
                
                <div className="links" data-aos="fade-down">
                <IconContext.Provider value={{size:'30px'}} >
                    <FaGithub />
                    </IconContext.Provider>
                    <img src={codechef} alt="codechef" width="30px" height="30px" style={{margin:'10px'}}/>
                    <img src={codeforces} alt="codechef" width="30px" height="30px" style={{margin:'10px'}}/>
                    <img src={geeks} alt="codechef" width="45px" height="45px" style={{margin:'10px'}}/>
               </div>
               </div>
        </div>
    )
}

export default Skills
