import React from "react";
import styled, { keyframes } from "styled-components";
import Input from "../Input/Input";
import Button from "../Button/Button";
import CloseIcon from "../../assets/iCons/close.inline.svg";
import * as varriable from "../../assets/styles/Varriables";

const animation = keyframes`
  from{
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const FormWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;

  animation: ${animation} 0.6s ease-in;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40vw;
  height: 60vh;
  border: 1px solid ${varriable.dark};
  background-color: ${varriable.white};
  opacity: 0;
  animation: ${animation} 0.6s 0.6s ease-in-out forwards;
`;

const FormInner = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  height: 60%;

  @media (max-width: 1240px) {
    width: 80%;
  }

  @media (max-width: 940px) {
    width: 100%;
  }

  button {
    align-self: flex-start;
  }
`;

const FormTitle = styled.h2`
  font-size: ${varriable.FONTSIZE_XL};
  font-weight: ${varriable.FONTWEIGHT_BOLD};
`;

const FormParagraph = styled.p`
  font-size: ${varriable.FONTSIZE_M};
  color: ${varriable.textColor};
  line-height: ${varriable.FONTSIZE_XL};
  margin: ${varriable.FORM_INPUT_VERTICAL_PADDING} 0;
`;

const CloseButton = styled.div`
  position: absolute;
  top: -10%;
  right: -10%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  svg {
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    svg {
      transform: rotate(360deg);
    }
  }
`;

const Form = ({ handleShowForm }) => {
  return (
    <FormWrapper>
      <FormContainer>
        <FormTitle>Get in touch </FormTitle>
        <FormParagraph>
          Do you have any question, do not hesistate to text me !
        </FormParagraph>

        <FormInner method="post" action="#">
          <Input name={"name"} dataTitle={"Put your name"} title={"Name"} />
          <Input name={"email"} dataTitle={"Put your email"} title={"Email"} />
          <Input
            tag={"textarea"}
            name={"name"}
            dataTitle={"Put your message"}
            title={"Message"}
          />
          <Button type="submit" text={"Send"} tag="button" send />
        </FormInner>

        <CloseButton onClick={() => handleShowForm(false)}>
          <CloseIcon />
        </CloseButton>
      </FormContainer>
    </FormWrapper>
  );
};

export default Form;
