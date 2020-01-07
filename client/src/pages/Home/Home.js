import React, { Component } from "react";
import "@brainhubeu/react-carousel/lib/style.css";
import CarouselWithDots from "../../components/CarouselWithDots";
import ImageSlide from "../../components/ImageSlide";
import ImageSlideProps from "../../lib/ImageSlideProps.json";
import SimpleCard from "../../components/SimpleCard";
import ReadingCard from "../../components/ReadingCard";

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
          <ReadingCard title={infoCardTitle} />
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
        </div>
      </div>
    );
  }
}

export default HomePage;
