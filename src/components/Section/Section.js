import React from "react";
import styled, { css } from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Button from "../Button/Button";
import * as variable from "../../assets/styles/Variables";

const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 600px;
  margin-top: ${variable.SECTION_CONTAINER_VERTICAL_MARGIN};
`;

const TextContainer = styled.div`
  flex: 1 0;
  order: ${(props) => (props.reverse ? 2 : 1)};
  margin: auto 0;
  min-width: 400px;
  @media (max-width: 839px) {
    order: 2;
  }
  @media (max-width: 525px) {
    min-width: 300px;
  }
`;

const TextWrapper = styled.div`
  width: 70%;
  ${(props) =>
    props.reverse
      ? css`
          margin-left: auto;
        `
      : css`
          margin-right: auto;
        `}

  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 839px) {
    margin-right: auto;
    margin-left: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: ${variable.FONTSIZE_XL};
  font-weight: ${variable.FONTWEIGHT_BOLD};
`;

const SectionParagraph = styled.p`
  font-size: ${variable.FONTSIZE_M};
  color: ${variable.textColor};
  line-height: ${variable.FONTSIZE_XL};
  margin: ${variable.SECTION_PARAGRAPH_VERTICAL_MARGIN} 0;
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1 1;
  text-align: ${(props) => (props.reverse ? "left" : "right")};
  order: ${(props) => (props.reverse ? 1 : 2)};
  min-width: 400px;

  @media (max-width: 839px) {
    max-width: 500px;
    min-height: 500px;
    margin: 0 auto;
    text-align: left;
    ${(props) =>
      !props.additionalimage &&
      css`
        text-align: center;
      `}
    order: 1;
  }
  @media (max-width: 525px) {
    min-width: 300px;
    min-height: 400px;
  }
`;

const Image = styled(GatsbyImage)`
  min-height: 400px;
  width: ${(props) => (props.additionalimage ? "60%" : "70%")};
  height: ${(props) => (props.additionalimage ? "80%" : "90%")};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1024px) {
    width: ${(props) => (props.additionalimage ? "70%" : "80%")};
  }
  @media (max-width: 900px) {
    width: ${(props) => (props.additionalimage ? "80%" : "80%")};
  }

  @media (max-width: 839px) {
    width: ${(props) => (props.additionalimage ? "60%" : "70%")};
    height: ${(props) => (props.additionalimage ? "60%" : "70%")};
  }
  @media (max-width: 525px) {
    min-height: 300px;
  }
`;

const SecondImage = styled(GatsbyImage)`
  position: absolute !important;
  bottom: 0%;
  right: ${(props) => (props.reverse ? "0%" : "40%")};
  width: 60%;
  height: 80%;
  min-height: 400px;

  @media (max-width: 1024px) {
    width: 70%;
    right: ${(props) => (props.reverse ? "0%" : "30%")};
  }
  @media (max-width: 900px) {
    width: 80%;
    right: ${(props) => (props.reverse ? "0%" : "20%")};
  }
  @media (max-width: 839px) {
    width: 60%;
    right: 0;
  }
  @media (max-width: 525px) {
    height: 60%;
    min-height: 300px;
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
        <TextWrapper reverse={reverse}>
          <SectionTitle>{title}</SectionTitle>
          <SectionParagraph>{paragraph}</SectionParagraph>
          {isSecondImage ? (
            <Button href={`/${sectionId}/gallery`} tag={"a"} text={"Galeria"} />
          ) : null}
        </TextWrapper>
      </TextContainer>

      <ImageContainer reverse={reverse} additionalimage={additionalimage}>
        <Image
          image={sectionImage}
          alt="image"
          additionalimage={additionalimage}
        />
        {isSecondImage ? (
          <SecondImage
            image={isSecondImage}
            alt="second Image"
            reverse={reverse}
          />
        ) : null}
      </ImageContainer>
    </SectionContainer>
  );
};

export default Section;
