import React, { useEffect} from 'react'
import "./Componentscss/Contact.css"
import Aos from "aos";
import "aos/dist/aos.css";

function Contact(){

    useEffect(() => {
        Aos.init({duration:1000});
    }, [])
    
        return (
            <div id="contact">

                <div className="styleone">
                <div className="style container"> 
                    <div className="row justify-content-center">
                        <div className="col-3 column1">
                            <div className="row justify-content-center value"><img src="https://image.flaticon.com/icons/svg/684/684809.svg" width="40px" height="40px" alt=""></img></div>
                            <div className="row justify-content-center key" data-aos = "fade-in"> Mukherjee Nagar, Delhi</div>
                        </div>
                        <div className="col-3 column2">
                            <div className="row justify-content-center value"><img src="https://image.flaticon.com/icons/svg/3014/3014499.svg" width="40px" height="40px" alt=""></img></div>
                            <div className="row justify-content-center key" data-aos = "fade-in">+91 1234567890</div>
                        </div>
                        <div className="col-3 column3">
                            <div className="row justify-content-center value"><img src="https://image.flaticon.com/icons/svg/561/561127.svg" width="40px" height="40px" alt=""></img></div>
                            <div className="row justify-content-center key" data-aos = "fade-in">foreveryours@mail.com</div>
                        </div>
                    </div>
                </div>

                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13996.669453905455!2d77.1993791827263!3d28.71454392379271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfde500000001%3A0x4efa0269c5466780!2sSunshine%20Marraige%20%26%20Party%20Hall!5e0!3m2!1sen!2sin!4v1594871808699!5m2!1sen!2sin" height="450" frameBorder="0"   aria-hidden="false" tabIndex="0" ></iframe>
                </div>
            </div>
        )
    
}

export default Contact
