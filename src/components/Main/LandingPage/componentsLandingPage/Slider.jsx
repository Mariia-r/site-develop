import React from "react";
import {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel id="testimonials" activeIndex={index} direction={direction} onSelect={handleSelect} interval="3000" controls={false} fade={true}>
        <Carousel.Item>
          <div className="d-block w-100"/>
          <Carousel.Caption>
            <p>"Work hard to get what you like, otherwise you'll be forced to just like what you get."</p>
            <text>Bernard Shoy</text>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-block w-100"/>
          <Carousel.Caption>
            <p>"When you do something noble and beautiful and nobody noticed, do not be sad. 
               For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps."
            </p>
            <text>John Lennon</text>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-block w-100"/>
          <Carousel.Caption>
            <p>"Success is the ability to go from failure to failure without losing your enthusiasm."</p>
            <text>Winston Churchil</text>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

 export default ControlledCarousel;