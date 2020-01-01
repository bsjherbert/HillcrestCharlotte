import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import MainNav from './Navigation/MainNav';
import ImageSlide from './ImageSlide';
import imageSlideProps from '../lib/ImageSlideProps.json';


class PageContainer extends Component {

  // Map over the ImageSlideProps array to populate the Carousel slides 
  render() {
    return (
      <Container maxWidth="lg" className="page-container">
        <MainNav />
        <div style={{zIndex: 5, marginTop: "6vh"}}>
          <Carousel
            autoPlay={3500}
            animationSpeed={1500}
            infinite
            centered="true"
            stopAutoPlayOnHover="true"
            arrowLeft={<IconButton aria-label="Slide Reverse"> <ChevronLeft color="secondary" /> </IconButton>}
            arrowRight={ <IconButton aria-label="Slide Forward"> <ChevronRight color="secondary" /> </IconButton>}
            addArrowClickHandler
          >
            {imageSlideProps.map(slide => (
              <ImageSlide
                id={slide.id}
                key={slide.id}
                linkTo={slide.linkTo}
                imageText={slide.imageText}
                padding={slide.padding}
                margin={slide.margin}
                url={slide.url}
                position={slide.position}
                top={slide.top}
                left={slide.left}
                textAlign={slide.textAlign}
                height={slide.height}
                backgroundColor={slide.backgroundColor}
                color={slide.color}
                width={slide.width}
              />
            ))}
          </Carousel>
        </div>
      </Container>
    );
  }
}

export default PageContainer;