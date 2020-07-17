import React, { Component } from 'react'
import './Componentscss/Header.css';

class Header extends Component{

    componentDidMount(){   
    window.onscroll = function() {myFunction()};

        // Get the header
        var header = document.getElementsByTagName('nav')[0];

        // Get the offset position of the navbar
        var sticky = header.offsetTop;

        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
                console.log("Header")
            } 
            else{
                header.classList.remove("sticky");
            }
        }
    }

    
    render(){
        return (
                <div id="navigationbar">
                <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top" >
                <a className="navbar-brand" href="#navigationbar">
                <div className="brandtitle"><span className="brandfirst">F</span>oreveryours</div>
                <div className="brandstyle"></div>
                </a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#navigationbar">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        
                    </ul>
                </div>
                </nav>
                </div>
        )
    }
}
export default Header
