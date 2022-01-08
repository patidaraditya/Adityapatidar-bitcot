import React from "react";
import { Carousel } from "react-bootstrap";

import bg2 from "../assets/bg-2.mp4";
import bg3 from "../assets/bg-3.mp4";
import bg1 from "../assets/bg-1.mp4";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={8000}>
        <video
          className="d-block w-100"
          src={bg2}
          type="video/mp4"
          autoPlay
          loop
          muted
        />
      </Carousel.Item>
      <Carousel.Item>
        <video
          className="d-block w-100"
          src={bg1}
          type="video/mp4"
          autoPlay
          loop
          muted
        />
      </Carousel.Item>
      <Carousel.Item>
        <video
          className="d-block w-100"
          src={bg3}
          type="video/mp4"
          autoPlay
          loop
          muted
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
