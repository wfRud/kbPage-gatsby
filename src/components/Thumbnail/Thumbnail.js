import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const ThumbnailWrapper = styled.div`
  position: relative;
  height: 260px;
  transition: transform 0.5s ease;
  z-index: 9999;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.5s ease;
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;

    &:before {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 840px) {
    z-index: 9996;

    &:hover {
      transform: scale(1);
      &:before {
        background-color: rgba(0, 0, 0, 0);
      }
    }
  }
`;

const StyledImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`;

const Thumbnail = ({ image, alt, handleOpen, index }) => {
  return (
    <ThumbnailWrapper onClick={() => handleOpen(index)}>
      <StyledImage image={image} alt={alt} />
    </ThumbnailWrapper>
  );
};

export default Thumbnail;
