import React ,{useEffect}from 'react'
import './Home.css'

import Aos from 'aos';
import 'aos/dist/aos.css'
function Home() {

    useEffect(() =>{
        Aos.init({duration:10000});
    }, []);
    return (
        <div className="home" id="home" >
            <div data-aos="fade-down">
         <h1>Hi! I am Tanya Rajpal</h1>
            
         <p className="para" >ougfolugluglo8uglo8utgou7trydtdckjyfki</p>
        </div>
        </div>
    )
}

export default Home
