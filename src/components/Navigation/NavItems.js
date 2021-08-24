import React from "react";
import styled, { css } from "styled-components";
import Scrollspy from "react-scrollspy";
import Logo from "./Logo";
import BurgerButton from "./BurgerButton";
import * as variable from "../../assets/styles/Variables";

const NavBar = styled.nav`
  width: 100%;
  height: 120px;
  background-color: ${variable.white};
  transition: height 0.5s ease-in-out;

  ${(props) =>
    props.isSticky &&
    css`
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9999;
      height: 60px;
    `};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-width: ${variable.CONTAINER_WIDTH};
  height: 100%;
  margin: 0 auto;

  @media (max-width: 1260px) {
    padding: 0 20px;
  }
`;

const NavBarList = styled(Scrollspy)`
  flex-grow: 2;
  list-style: none;
  display: flex;
  justify-content: space-between;
  max-width: 40%;
  background-color: ${variable.white};
  z-index: 9997;

  @media (max-width: 789px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: ${(props) => (props.isSticky ? "60px" : "120px")};
    left: 0;
    width: 100%;
    max-width: unset;
    height: 200px;
    transform: ${(props) =>
      props.isActive ? "translateY(0)" : "translateY(-150%)"};
    transition: top 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
`;

const NavBarItem = styled.li`
  position: relative;
  text-align: right;
  overflow: hidden;
  transition: color 0.3s ease;

  &.active {
    color: red;
  }
  &:hover {
    color: ${variable.red};
  }
`;

const Link = styled.a`
  letter-spacing: 0.1rem;
  text-decoration: none;
  color: inherit;
`;

const Navigation = ({
  nav: { sectionId, logo, menuItem },
  isSticky,
  handleBurgerButton,
  isActive,
}) => {
  let navItemsNames = menuItem.map((item) => item.href.substring(1));

  return (
    <NavBar id={sectionId} isSticky={isSticky}>
      <Container>
        <Logo logo={logo} isSticky={isSticky} />

        <BurgerButton
          handleBurgerButton={handleBurgerButton}
          isActive={isActive}
        />

        <NavBarList
          items={navItemsNames}
          currentClassName="active"
          isSticky={isSticky}
          isActive={isActive}
        >
          {menuItem.map((item, index) => (
            <NavBarItem key={index}>
              <Link href={item.href}> {item.name.toLowerCase()}</Link>
            </NavBarItem>
          ))}
        </NavBarList>
      </Container>
    </NavBar>
  );
};

export default Navigation;
