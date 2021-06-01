import React from "react";
import styled from "styled-components";
import * as varriable from "../../assets/styles/Varriables";

const SectionButton = styled.a`
  display: block;
  width: 40%;
  min-width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: ${varriable.FONTSIZE_M};
  color: ${(props) => (props.send ? varriable.white : varriable.textColor)};
  background-color: ${(props) =>
    props.send ? varriable.dark : varriable.white};
  text-decoration: none;
  border: 1px solid ${varriable.dark};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.send ? varriable.white : varriable.dark};
    color: ${(props) => (props.send ? varriable.textColor : varriable.white)};
  }
`;

const Button = ({ tag, href, text, type, send }) => (
  <SectionButton href={href} as={tag} type={type} send={send}>
    {text}
  </SectionButton>
);

export default Button;
