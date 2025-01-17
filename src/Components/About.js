import React,  { useEffect }  from 'react'
import "./Componentscss/About.css"
import Aos from "aos";
import "aos/dist/aos.css";


function About (){


      useEffect(() => {
        Aos.init({duration:2000});
    }, [])

    
        return (
            <div className="aboutsec " id="about">
                
                        <div className=" abouttext" data-aos = "fade-up">
                            <h1>A few words about us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed iaculis nulla. Pellentesque volutpat nec diam at tincidunt. Ut efficitur urna laoreet neque rutrum accumsan. Maecenas ut tortor ante. Aliquam porttitor neque eget orci luctus congue. Quisque id mauris sit amet metus vehicula maximus et quis tortor. Duis eget lacus augue. Donec eget pharetra nunc, et aliquet est. Maecenas imperdiet vulputate lobortis. In lobortis pretium velit ut ultrices.
                            Fusce non lorem vitae dolor vulputate fringilla ut ac lacus. Ut et nisi tincidunt, egestas libero eu, auctor urna. Integer mollis gravida odio, at commodo velit commodo ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum a dolor et feugiat.  </p>
                        </div>
                        <div className=" aboutimg " data-aos = "zoom-in" >
                            <img src="https://images.unsplash.com/photo-1503525642560-ecca5e2e49e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" width="400px" height="100%" alt=""></img>
                        </div>
                        
            </div>
        )
    
}

export default About


