import React from "react";
import styled from "styled-components";
import * as variable from "../../assets/styles/Variables";

const SectionButton = styled.a`
  display: block;
  width: 40%;
  min-width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: ${variable.FONTSIZE_M};
  color: ${(props) => (props.send ? variable.white : variable.textColor)};
  background-color: ${(props) => (props.send ? variable.dark : variable.white)};
  text-decoration: none;
  border: 1px solid ${variable.dark};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.send ? variable.white : variable.dark};
    color: ${(props) => (props.send ? variable.textColor : variable.white)};
  }
`;

const Button = ({ tag, href, text, type, send }) => (
  <SectionButton href={href} as={tag} type={type} send={send}>
    {text}
  </SectionButton>
);

export default Button;
