import React, { useEffect } from 'react'
import "./Componentscss/Feature.css"
import Aos from "aos";
import "aos/dist/aos.css";

function Feature(){
    
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])


        return (
            <div className="styleone">
            <div className="style container"> 
                <div className="row justify-content-center">
                    <div className="col-3 column1">
                        <div className="row justify-content-center value" data-aos = "fade-in">1500</div>
                        <div className="row justify-content-center key">Banquet Capacity</div>
                    </div>
                    <div className="col-3 column2">
                        <div className="row justify-content-center value" data-aos = "fade-in">3000</div>
                        <div className="row justify-content-center key">Lawn Capacity</div>
                    </div>
                    <div className="col-3 column3">
                        <div className="row justify-content-center value" data-aos = "fade-in">1000+</div>
                        <div className="row justify-content-center key">Happy Clients</div>
                    </div>
                </div>
            </div>
            </div>
        )
    
}

export default Feature
