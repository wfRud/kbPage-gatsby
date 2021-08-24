import React from "react";
import styled from "styled-components";
import * as variable from "../../../assets/styles/Variables";

const Fieldset = styled.div`
  border: none;
  width: 100%;
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  left: ${variable.FORM_INPUT_HORIZONTAL_PADDING};
  top: 13px;
  transition: transform 0.3s 0.2s, font-size 0.3s 0.2s;
  background-color: ${variable.white};
  width: 100%;

  &:before {
    content: attr(title);
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${variable.white};
    transition: transform 0.5s;
    display: block;
  }
`;

const InputField = styled.input`
  display: block;
  width: 100%;
  height: ${(props) => (props.as ? "80px" : "40px")};
  background: rgba(255, 255, 255, 0.7);
  padding-top: ${(props) =>
    props.as ? `${variable.FORM_INPUT_VERTICAL_PADDING}` : "0"};
  padding-left: ${variable.FORM_INPUT_HORIZONTAL_PADDING};
  font-size: ${variable.FONTSIZE_S};
  border: 1px solid ${variable.dark};
  resize: ${(props) => props.as && "unset"};
  outline: 0;
  appearance: none;

  &:focus {
    background-color: rgba(255, 255, 255, 0.7);
    outline: 0;
    transition: border 0.3s 0.3s;
  }

  &:valid {
    & + ${Label} {
      &:before {
        content: attr(data-title);
        transform: translate3d(-5px, -20px, 0);
        font-size: 12px;
      }
    }
  }
`;

const Input = ({ tag, name, dataTitle, title, field }) => (
  <Fieldset>
    <InputField
      as={tag}
      name={name}
      autoCorrect="off"
      autoCapitalize="off"
      {...field}
      required
    />

    <Label htmlFor="" data-title={dataTitle} title={title}></Label>
  </Fieldset>
);

export default Input;
