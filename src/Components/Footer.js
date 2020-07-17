import React, { Component } from 'react'
import "./Componentscss/Footer.css"

export class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <footer>
                <h1>Connect</h1> <br/>
                <div className="container">
                <div className="row">
                <div className="col-3">
                <a href="#navigationbar" target="_blank"><img src="https://image.flaticon.com/icons/svg/1384/1384021.svg" alt="..." width="40" height="40"/></a>
                </div>
                <div className="col-3">
                <a href="#navigationbar" target="_blank" ><img src="https://image.flaticon.com/icons/svg/1384/1384015.svg" alt="..." width="40" height="40"/></a>
                </div>
                <div className="col-3">
                <a href="#navigationbar" target="_blank" ><img src="https://image.flaticon.com/icons/svg/1384/1384017.svg" alt="...." width="40" height="40"/></a>
                </div>
                <div className="col-3">
                <a href="#navigationbar"><img src="https://image.flaticon.com/icons/svg/49/49440.svg"  alt="..." width="40" height="40"/></a> 
                </div>
                </div><br></br>
                <div className="row justify-content-center">
                <img id="license" src="https://image.flaticon.com/icons/svg/1294/1294391.svg" alt="..." width="20px" height="20px" />
                <p>2020 Foreveryours LLC All rights reserved.</p>
                </div>
                </div>
                </footer>
            </div>
        )
    }
}

export default Footer




// https://image.flaticon.com/icons/svg/1384/1384053.svg
// https://image.flaticon.com/icons/svg/1384/1384063.svg
// https://image.flaticon.com/icons/svg/1384/1384065.svg
// https://image.flaticon.com/icons/svg/733/733566.svg