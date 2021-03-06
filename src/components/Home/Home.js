import React ,{useEffect}from 'react'
import './Home.css'
import pp from '../../Image/pp.jpeg'
import home from '../../Image/home.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'
function Home() {

    useEffect(() =>{
        Aos.init({duration:10000});
    }, []);
    return (
        <div className="home" id="home" >
            <div /*data-aos="fade-down"*/ className="para">
         <h1>Hi<span>!</span> I am <span>Tanya Rajpal</span></h1>
            
         <p  ></p>
        </div>
    {/* <img  className="homeimage" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80" 
    alt="img"/> */}
        </div>
    )
}

export default Home
