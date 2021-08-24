import React from "react";
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css";

const SliderWrapper = styled.div`
  width: 100%;
  max-height: 600px;
`;

const SlideImage = styled(GatsbyImage)`
  width: 100%;
  min-height: 450px;
  height: 100%;
  object-fit: cover;
`;

const Slider = ({ images, sectionId }) => {
  return (
    <SliderWrapper id={sectionId}>
      <Carousel
        autoPlay
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        infiniteLoop
      >
        {images.map((image, index) => {
          const imageSlide = getImage(image);

          return (
            <SlideImage image={imageSlide} key={index} alt={`slide-${index}`} />
          );
        })}
      </Carousel>
    </SliderWrapper>
  );
};

export default Slider;
