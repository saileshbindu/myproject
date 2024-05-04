// CarouselComponent.js
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardComponent from "../cards/Cards";
import './Carousel.css'

const CarouselComponent = ({ items }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel responsive={responsive}>
      {items.map((item) => (
        <CardComponent key={item.id} card={item} />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
