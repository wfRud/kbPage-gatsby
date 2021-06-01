import React from "react";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderWrapper = styled.div`
  width: 100%;
  height: 600px;
`;

const Slider = ({ images, sectionId }) => (
  <SliderWrapper id={sectionId}>
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={3000}
      organicArrows={false}
      transitionDelay={500}
      bullets={false}
    >
      {images.map((image, index) => {
        const { src } = image.images.fallback;
        return <div data-src={src} key={index} />;
      })}
    </AutoplaySlider>
  </SliderWrapper>
);
export default Slider;
