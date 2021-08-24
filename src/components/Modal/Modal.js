import React from "react";
import styled, { keyframes } from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrevInlineICon from "../../assets/iCons/arrow_back.inline.svg";
import NextInlineIcon from "../../assets/iCons/arrow_forward.inline.svg";
import CloseInlineIcon from "../../assets/iCons/close_black.inline.svg";
import * as variable from "../../assets/styles/Variables";

// Animations
const ModalAnimation = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const ContentAnimation = keyframes`
 0% {
   opacity: 0
  }
  
  100% {
    opacity: 1
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalPreview = styled.div`
  position: relative;
  width: 70vw;
  height: 75vh;
  background-color: ${variable.white};
  animation: ${ModalAnimation} 0.5s ease-in-out;

  @media (max-width: 1080px) {
    width: 80vw;
  }
  @media (max-width: 950px) {
    width: 90vw;
  }
  @media (max-width: 840px) {
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
  }
`;

const ModalContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5%;
  @media (max-width: 840px) {
    flex-flow: column-reverse nowrap;
    justify-content: flex-end;
    height: auto;
    min-height: 100vh;
    padding: 5% 5% calc(5% + 10vh) 5%;
    overflow-y: scroll;
  }
`;

const ImageWrapper = styled.div`
  flex: 1 1 0;
  position: relative;
  min-width: 400px;
  height: 100%;
  @media (max-width: 840px) {
    min-width: unset;
    max-width: 500px;
    max-height: 500px;
    align-self: center;
  }
`;

const TextWrapper = styled.div`
  flex: 1 1 0;
  min-width: 280px;
  padding-left: 50px;
  animation: ${ContentAnimation} 0.8s ease-in-out;
  @media (max-width: 840px) {
    padding-left: 0;
    flex: 0 1 auto;
    height: auto;
  }
`;

const TitleImage = styled.h2`
  font-size: ${variable.FONTSIZE_XL};
  font-weight: ${variable.FONTWEIGHT_BOLD};
`;

const ImageDescription = styled.p`
  font-size: ${variable.FONTSIZE_M};
  color: ${variable.textColor};
  line-height: ${variable.FONTSIZE_XL};
  margin-top: ${variable.MODAL_SECTION_PARAGRAPH_VERTICAL_MARGIN_TOP};
  margin-bottom: ${variable.MODAL_SECTION_PARAGRAPH_VERTICAL_MARGIN_BOTTOM};
`;

const Details = styled.p`
  font-size: ${variable.FONTSIZE_M};
  color: ${variable.textColor};
  line-height: ${variable.FONTSIZE_XL};
  &:last-child {
    margin-bottom: ${variable.MODAL_SECTION_PARAGRAPH_VERTICAL_MARGIN_BOTTOM};
  }
`;
const DetailsName = styled.span`
  font-weight: ${variable.FONTWEIGHT_BOLD};
`;

const ModalImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  animation: ${ContentAnimation} 0.8s ease-in-out forwards;
  @media (max-width: 840px) {
    position: unset;
    top: unset;
    transform: unset;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 10vh;
  background-color: transparent;
  @media (max-width: 840px) {
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: ${variable.white};
  }
`;

const PrevArrow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4%;
  height: 100%;
  transition: background-color 0.3s ease-in-out, fill 0.3s ease-in-out;
  z-index: 9999;

  svg {
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:hover svg {
    transform: scale(1.3);
    fill: #fff;
  }
  @media (max-width: 840px) {
    position: unset;
    flex: 1 0 25%;
  }
`;
const NextArrow = styled(PrevArrow)`
  top: 0;
  left: unset;
  right: 0;
`;

const Close = styled.div`
  position: absolute;
  top: -45px;
  right: -45px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  z-index: 9999;

  svg {
    transition: transform 1s ease, fill 1s ease;
  }

  &:hover svg {
    cursor: pointer;
    transform: scale(1.4) rotate(180deg);
    fill: ${variable.white};
  }

  @media (max-width: 840px) {
    position: unset;
    height: 100%;
    flex: 1 0 25%;
  }
`;

const isModalWrapper = (e) =>
  e.target.classList.contains(ModalWrapper.styledComponentId);

const Modal = ({
  images,
  handleClose,
  handlePrevRequest,
  handleNextRequest,
  selectedImage,
}) => {
  const image = getImage(images[selectedImage].image),
    title = images[selectedImage].imageTitle,
    description = images[selectedImage].imageDescription,
    {
      price: [{ amount, currency }],
      size: [{ width, height }],
    } = images[selectedImage];

  return (
    <ModalWrapper onClick={(e) => isModalWrapper(e) && handleClose()}>
      <ModalPreview>
        <ModalContent>
          <ImageWrapper>
            <ModalImage
              image={image}
              alt={title}
              imgStyle={{ objectFit: "contain" }}
            />
          </ImageWrapper>

          <TextWrapper>
            <TitleImage>{title}</TitleImage>
            <ImageDescription>{description}</ImageDescription>
            <Details>
              <DetailsName>Size:</DetailsName> {width}cm x {height}cm
            </Details>
            <Details>
              <DetailsName>Price:</DetailsName> {amount} {currency}
            </Details>
          </TextWrapper>
        </ModalContent>

        <IconWrapper>
          <PrevArrow onClick={() => handlePrevRequest(images.length)}>
            <PrevInlineICon />
          </PrevArrow>
          <NextArrow onClick={() => handleNextRequest(images.length)}>
            <NextInlineIcon />
          </NextArrow>
          <Close onClick={handleClose}>
            <CloseInlineIcon />
          </Close>
        </IconWrapper>
      </ModalPreview>
    </ModalWrapper>
  );
};

export default Modal;
