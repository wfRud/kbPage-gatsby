import React from "react";
import styled, { keyframes } from "styled-components";
import ArrowUp from "../../assets/iCons/arrow-up.inline.svg";
import * as varriable from "../../assets/styles/Varriables";

const ScrollButtonAnimation = keyframes`
  from {
    opacity: 0
  }
  to {
    transform: 1
  }
`;

const ScrollButtonContainer = styled.div`
  position: fixed;
  right: 5%;
  bottom: 30vh;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${varriable.dark};
  transition: background-color 0.4s ease-in-out;
  animation: ${ScrollButtonAnimation} 0.3s ease-in-out;

  svg {
    transition: transform 0.4s ease-in-out, stroke 0.4s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    background-color: ${varriable.dark};
    svg {
      transform: translateY(-8px);
      stroke: #fff;
    }
  }
`;

const handleScrollTopButton = () => {
  window.scroll({ top: 0, behavior: "smooth" });
};

const ScrollButton = () => {
  return (
    <ScrollButtonContainer onClick={handleScrollTopButton}>
      <ArrowUp />
    </ScrollButtonContainer>
  );
};

export default ScrollButton;
