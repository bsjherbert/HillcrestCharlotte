import React from 'react';

function ImageSlide(props) {
  return (
    // the height in the anchor tag determines the height of the image slide in the Carousel
    <a href={props.linkTo} style={{ height: "50vh", position: "static" }}>
      {/* <h3 style={{
        position: props.position,
        backgroundColor: props.backgroundColor,
        height: props.height,
        top: props.top,
        left: props.left,
        color: props.color,
        textAlign: props.textAlign,
        width: props.width,
        padding: props.padding,
        margin: props.margin,
      }}
      >
        {props.imageText}
      </h3> */}
      <img style={{ height: "100%", width: "100%", objectFit: "cover" }}
        src={props.url} alt={props.alt} />
    </a>
  )

}

export default ImageSlide; 