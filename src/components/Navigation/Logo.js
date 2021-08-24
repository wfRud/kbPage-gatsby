import React from "react";
import styled, { css } from "styled-components";
import * as variable from "../../assets/styles/Variables";

const NavBarLogoWrapper = styled.div`
  position: relative;
  flex-grow: 2;
  height: 100%;
  padding: 10px 0;
  background-color: ${variable.white};
  z-index: 9998;
`;

const Link = styled.a`
  display: inline-block;
  max-width: 80px;
  height: 100%;
  transition: transform 0.8s 0.3s ease-in-out;
  ${(props) =>
    props.isSticky &&
    css`
      transform: scale(0.8);
    `};

  img {
    width: 100%;
    height: 100%;
  }
`;

const scrollToTop = () => window.scrollTo(0, 0);
const Logo = ({ logo, isSticky }) => {
  const path = window.location.pathname;
  const url = path === "/" ? "#" : "/";

  return (
    <NavBarLogoWrapper isSticky={isSticky}>
      <Link href={url} onClick={path === "/" ? scrollToTop : null}>
        <img src={logo.url} alt={logo.test} />
      </Link>
    </NavBarLogoWrapper>
  );
};

export default Logo;
