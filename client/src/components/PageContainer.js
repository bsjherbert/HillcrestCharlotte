import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import MainNav from './Navigation/MainNav';

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ImageSlide from './ImageSlide';
import SlideArrow from './SlideArrow';

class PageContainer extends Component {
 render () {
   return (
    <Container maxWidth="lg">
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
            <ImageSlide linkTo="#" imageText="Chris is here" url="./images/slides/slide1.jpg" />
            <ImageSlide linkTo="#" imageText="Cindy is here" url="./images/slides/slide2.jpg" />
            <ImageSlide linkTo="#" imageText="Brad is here" url="./images/slides/slide3.jpg" />
            <ImageSlide linkTo="#" imageText="Laurie is here" url="./images/slides/slide4.jpg" />
            <ImageSlide linkTo="#" imageText="Ozzie is here" url="./images/slides/slide5.jpg" />
  
           </Carousel>
      </div>
    </Container>
  
    );
  }
}

export default PageContainer;