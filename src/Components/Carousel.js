import React, { Component } from 'react'
import "./Componentscss/Carousel.css"



export class Carousel extends Component {

    render() {
        return (
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="d-block w-100 mx-auto" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <p className=" animate__animated animate__fadeInRight animate__delay-1s">“To love or have loved, that is enough. Ask nothing more.”—Victor Hugo</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="d-block w-100 mx-auto" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <p className=" animate__animated animate__fadeInRight animate__delay-1s">“In dreams and in love there are no impossibilities.”—János Arany</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="d-block w-100 mx-auto" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <p className="animate__animated animate__fadeInRight animate__delay-1s">“Its better to have loved and lost, Than never to have loved at all.”—Alfred Lord Tennyson</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1556918108-baaafd6a2010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="d-block w-100 mx-auto" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <p className="animate__animated animate__fadeInRight animate__delay-1s">“Love is life. And if you miss love, you miss life.”—Leo Buscaglia</p>
                </div>
                </div>
                <div className="carousel-item" id="last">
                <img src="https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="d-block w-100 mx-auto" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <p className="animate__animated animate__fadeInRight animate__delay-1s">“A happy marriage is a long conversation which always seems too short.”—Andre Maurois</p>
                </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        )
    }
}

export default Carousel
