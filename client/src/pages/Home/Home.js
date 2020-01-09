import React, { Component } from "react";
import "@brainhubeu/react-carousel/lib/style.css";
import Grid from "@material-ui/core/Grid";

import CarouselWithDots from "../../components/CarouselWithDots";
import ImageSlide from "../../components/ImageSlide";
import ImageSlideProps from "../../lib/ImageSlideProps.json";
import BookCard from "../../components/BookCard";
import SermonCard from "../../components/SermonCard";
import ReadingCard from "../../components/ReadingCard";

class HomePage extends Component {
  render() {
    const infoCardTitle = "This is a test title for Info Card";

    return (
      // {/* Map over the ImageSlideProps array to populate the Carousel slides */}
      <div>
        <div style={{ zIndex: 5, marginTop: "6vh" }}>
          <CarouselWithDots
            autoPlay={3500}
            animationSpeed={1500}
            infinite
            centered="true"
            stopAutoPlayOnHover="true"
            dots
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
          </CarouselWithDots>
        </div>
        <div style={{ marginTop: "2vh" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <ReadingCard title={infoCardTitle} />
            </Grid>
            <Grid item xs={12} md={6}>
              <BookCard />
              <SermonCard />
            </Grid>
            {/* <Grid item xs={12} md={12}></Grid> */}
          </Grid>
        </div>
      </div>
    );
  }
}

export default HomePage;
