import React, { Component } from "react";
import "@brainhubeu/react-carousel/lib/style.css";
import CarouselWithDots from "../../components/CarouselWithDots";
import ImageSlide from "../../components/ImageSlide";
import ImageSlideProps from "../../lib/ImageSlideProps.json";
import BookCard from "../../components/BookCard";
import SermonCard from "../../components/SermonCard";
import ReadingCard from "../../components/ReadingCard";
// import Grid from "@material-ui/core/grid"

class HomePage extends Component {
  render() {
    const infoCardTitle = "This is a test title for Info Card";

    const classes = {
      cardContainer: {
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        top: "2vh"
      }
    };

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
        <div style={classes.cardContainer}>
          {/* <Grid
          container 
          spacing={10}
          style={{padding: "50px"}}
          ><Grid
          item 
          xs={12} sm={6} md={4} lg={4} xl={3}> */}
         
          <ReadingCard title={infoCardTitle} />
          <SermonCard />
          <BookCard />
          {/* </Grid>
          </Grid> */}
        </div>
      </div>
    );
  }
}

export default HomePage;
