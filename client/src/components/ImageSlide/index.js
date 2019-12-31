import React, { Component } from 'react';

function ImageSlide(props) {
    return (
        // the height in the anchor tag determines the height of the image slide in the Carousel
        <a href={props.linkTo} style={{height:"300px", position:"static"}}>
          <h3 style={{
              position: props.position, 
              backgroundColor: props.backgroundColor, 
              height: props.height,
              top: props.top,
              left: props.left,
              color: props.color,
              width: props.width,
              opacity: props.opacity
              }} 
              >
                {props.imageText}
          </h3>
          <img style={{height:"100%", width:"100%", objectFit:"cover"}} 
            src= {props.url}/>
        </a>
    )

}

export default ImageSlide; 