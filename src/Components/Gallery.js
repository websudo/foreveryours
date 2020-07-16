import React, { Component } from 'react';
import "./Componentscss/Gallery.css";
export class Gallery extends Component {



    handleClick = (e) => {

        let newdiv = document.createElement("div");
        let newimg = document.createElement('img');
        let webbody = document.body;
        newdiv.classList.add("image-class");
        webbody.appendChild(newdiv);
        newimg.setAttribute('src',e.target.src);
        newdiv.appendChild(newimg);
        
    }

    componentDidMount(){
        window.addEventListener("click", function(event) {
            console.log(event.target.className)
            if(event.target.className == 'image-class'){
                event.target.classList.add('popdisplay');
                console.log(event.target);
            }
            else if(event.target.parentElement.className == 'image-class'){
                event.target.parentElement.classList.add('popdisplay');
                console.log(event.target.parentElement);
            }
        });
    }


    


    render() {
        return (
            <div id="gallery">
                <div class="container-fluid gallerydiv">
                <h1>Gallery</h1>

                
                    
                    <div class=" galimg ">
                        <img onClick={this.handleClick} src="https://images.unsplash.com/photo-1571984129095-1bb1b3ccc5be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />
                    </div>
                    <div class="galimg ">
                        <img onClick={this.handleClick} src="https://images.unsplash.com/photo-1541129347538-7bcce5e95fc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />
                    </div>
                    <div class="galimg ">
                        <img onClick={this.handleClick} src="https://images.unsplash.com/photo-1571984129381-41d698ebca6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />
                    </div>
                    
                    
                    <div class="galimg ">
                        <img onClick={this.handleClick} src="https://images.unsplash.com/photo-1568759606327-11ef3e3d180d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />
                    </div>
                
                    <div class="galimg ">
                        <img onClick={this.handleClick} src="https://images.unsplash.com/photo-1580824456266-c578703e13da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />
                    </div>
                    <div class="galimg ">
                        <img onClick={this.handleClick} src="https://images.unsplash.com/photo-1562859137-3a98fe2a9475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />
                    
                    </div>
  	 

  </div>
            </div>
        )
    }
}

export default Gallery
