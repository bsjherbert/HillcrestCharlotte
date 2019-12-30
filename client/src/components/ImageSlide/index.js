import React, { Component } from 'react';

function ImageSlide(props) {
    return (
        <a href={props.linkTo} style={{height:"300px", position:"relative"}}>
          <h3 style={{position:"absolute", backgroundColor:"lightblue", height:"25%" }} >{props.imageText}</h3>
          <img style={{height:"100%", width:"100%", objectFit:"cover"}} 
            src= {props.url}/>
        </a>
    )

}

export default ImageSlide; 