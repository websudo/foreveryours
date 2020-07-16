import React, { Component } from 'react'
import "./Componentscss/Feature.css"

export class Feature extends Component {
    render() {
        return (
            <div className="styleone">
            <div className="style container"> 
                <div className="row justify-content-center">
                    <div className="col-3 column1">
                        <div className="row justify-content-center value">1500</div>
                        <div className="row justify-content-center key">Banquet Capacity</div>
                    </div>
                    <div className="col-3 column2">
                        <div className="row justify-content-center value">3000</div>
                        <div className="row justify-content-center key">Lawn Capacity</div>
                    </div>
                    <div className="col-3 column3">
                        <div className="row justify-content-center value">1000+</div>
                        <div className="row justify-content-center key">Happy Clients</div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Feature
