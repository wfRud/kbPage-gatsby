import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import * as varriable from "../../assets/styles/Varriables";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const NavBarLogoWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  max-width: 80px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const NavBarList = styled.ul`
  flex-grow: 2;
  list-style: none;
  display: flex;
  justify-content: space-between;
  max-width: 40%;
`;

const NavBarItem = styled.li`
  position: relative;
  text-align: right;
  overflow: hidden;
  transition: color 0.3s ease;
  &:hover {
    color: ${varriable.red};
  }

  a {
    letter-spacing: 0.1rem;
    text-decoration: none;
    color: inherit;
  }
`;

const Navigation = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsNavigation {
        sectionId
        logo {
          url
          alt
        }
        menuItem {
          id
          name
          href
        }
      }
    }
  `);

  const {
    datoCmsNavigation: { sectionId, logo, menuItem },
  } = data;

  return (
    <NavBar id={sectionId}>
      <NavBarLogoWrapper>
        <a href="/">
          <img src={logo.url} alt={logo.test} />
        </a>
      </NavBarLogoWrapper>

      <NavBarList>
        {menuItem.map((item, index) => (
          <NavBarItem key={index}>
            <a href={item.href}> {item.name.toUpperCase()}</a>
          </NavBarItem>
        ))}
      </NavBarList>
    </NavBar>
  );
};

export default Navigation;
