import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import PageContainer from '../../components/PageContainer';
import MainNav from '../../components/Navigation/MainNav';
import ImageSlide from '../../components/ImageSlide';
import ImageSlideProps from '../../lib/ImageSlideProps.json';
import SimpleCard from '../../components/SimpleCard';
import InfoCard from '../../components/InfoCard';


class HomePage extends Component {

  render() {

   

    const classes = {
      cardContainer:{
        display:"flex",
        justifyContent:"space-between",
        position: "relative",
        top: "2vh"
      }
    }

    return (
      <PageContainer>
        <MainNav />
        {/* Map over the ImageSlideProps array to populate the Carousel slides */}
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
            {ImageSlideProps.map(slide => (
              <ImageSlide
                id={slide.id}
                key={slide.id}
                linkTo={slide.linkTo}
                imageText={slide.imageText}
                padding={slide.padding}
                margin={slide.margin}
                url={slide.url}
                alt={slide.alt}
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
        <div style={classes.cardContainer}>
          <InfoCard />
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
        </div>
      </PageContainer>
    );
  }
}

export default HomePage;
