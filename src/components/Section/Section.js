import React from "react";
import styled, { css } from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Button from "../Button/Button";

import * as varriable from "../../assets/styles/Varriables";

const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  margin-top: ${varriable.SECTION_CONTAINER_VERTICAL_MARGIN};
`;

const TextContainer = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.reverse ? "flex-end" : "flex-start")};
  text-align: ${(props) => (props.reverse ? "right" : "left")};
  padding: ${(props) =>
    props.reverse
      ? `0 0 0 ${varriable.SECTION_HORIZONTAL_PADDING}`
      : `0 ${varriable.SECTION_HORIZONTAL_PADDING} 0 0`};
  order: ${(props) => (props.reverse ? 2 : 1)};
`;

const SectionTitle = styled.h2`
  font-size: ${varriable.FONTSIZE_XL};
  font-weight: ${varriable.FONTWEIGHT_BOLD};
`;

const SectionParagraph = styled.p`
  font-size: ${varriable.FONTSIZE_M};
  color: ${varriable.textColor};
  line-height: ${varriable.FONTSIZE_XL};
  margin: ${varriable.SECTION_HORIZONTAL_PADDING} 0;
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1 1;
  text-align: ${(props) => (props.reverse ? "left" : "right")};
  order: ${(props) => (props.reverse ? 1 : 2)};
`;

const Image = styled(GatsbyImage)`
  width: ${(props) => (props.additionalimage ? "60%" : "70%")};
  height: ${(props) => (props.additionalimage ? "80%" : "90%")};
  transition: transform 0.3s ease-in-out;

  ${(props) =>
    props.additionalimage &&
    css`
      &:hover {
        transform: scale(1.1);
        z-index: 9999;
        cursor: pointer;
      }
    `}
`;

const SecondImage = styled(GatsbyImage)`
  position: absolute !important;
  bottom: 0%;
  right: ${(props) =>
    props.reverse
      ? "0%"
      : `calc(50% - ${varriable.SECTION_HORIZONTAL_PADDING})`};
  width: 60%;
  height: 80%;

  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Section = ({
  title,
  paragraph,
  sectionId,
  image,
  additionalimage,
  reverse,
}) => {
  const sectionImage = getImage(image);
  const isSecondImage = additionalimage ? getImage(additionalimage) : null;

  return (
    <SectionContainer id={sectionId}>
      <TextContainer reverse={reverse}>
        <SectionTitle>{title}</SectionTitle>
        <SectionParagraph>{paragraph}</SectionParagraph>
        {isSecondImage ? (
          <Button href={"#"} tag={"a"} text={"Gallery"} />
        ) : null}
      </TextContainer>

      <ImageContainer reverse={reverse}>
        <Image
          image={sectionImage}
          alt="image"
          additionalimage={additionalimage}
        />
        {isSecondImage ? (
          <SecondImage
            image={isSecondImage}
            alt="second IMage"
            reverse={reverse}
          />
        ) : null}
      </ImageContainer>
    </SectionContainer>
  );
};

export default Section;
