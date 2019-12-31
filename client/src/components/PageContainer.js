import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import MainNav from './Navigation/MainNav';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ImageSlide from './ImageSlide';
import SlideArrow from './SlideArrow';
import imageSlideProps from '../lib/ImageSlideProps.json';


class PageContainer extends Component {

  // Map over the ImageSlideProps array to populate the Carousel slides 
 render () {
   return (
    <Container maxWidth="lg" className="page-container">
      <MainNav />
      <div>
            <Carousel 
              autoPlay={3000}
              animationSpeed={1500}
              infinite
              arrowLeft={
                <SlideArrow
                  glyph="&#9664;"
                />
              }
              arrowRight={
                <SlideArrow
                  glyph="&#9654;"
                />
              }
              addArrowClickHandler        
            > 
            {imageSlideProps.map(slide => (
              <ImageSlide
                id = {slide.id} 
                key = {slide.id}
                linkTo = {slide.linkTo}
                imageText={slide.imageText}
                url = {slide.url}
                position= {slide.position}
                top= {slide.top}
                left={slide.left}
                opacity={slide.opacity}
                height= {slide.height}
                backgroundColor={slide.backgroundColor}
                color= {slide.color}
                width= {slide.width}
                 />
            ))}  
           </Carousel>
      </div>
    </Container>
  
    );
  }
}

export default PageContainer;