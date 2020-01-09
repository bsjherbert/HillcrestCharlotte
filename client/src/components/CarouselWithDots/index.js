import React from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Box from '@material-ui/core/Box';

class CarouselWithDots extends React.Component {
    constructor() {
      super()
      this.state = {
        value: 0
        
      }
      this.onchange = this.onchange.bind(this);
    }

  
    onchange(value) {
      this.setState({ value });
    }
  
    render() {
      return (
      <div>
        <Carousel
          value={this.state.value}
          slides={this.props.children}
          onChange={this.onchange}
        />
        <Dots value={this.state.value} onChange={this.onchange} number={this.props.children.length} />
      </div>
      );
    }
  }

  export default CarouselWithDots;