import React, { useState, useEffect } from "react";
import NavItems from "./NavItems";
import { useStaticQuery, graphql } from "gatsby";

const Navigation = () => {
  const path = window.location.pathname;
  const data = useStaticQuery(graphql`
    {
      allDatoCmsNavigation {
        nodes {
          sectionId
          logo {
            alt
            url
          }
          menuItem {
            id
            name
            href
          }
        }
      }
    }
  `);
  const [isSticky, setSticky] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleBurgerButton = () => setIsActive(!isActive);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const {
    allDatoCmsNavigation: { nodes: navigations },
  } = data;

  const nav = navigations.find((nav) =>
    path === "/"
      ? nav.sectionId === "navigation"
      : nav.sectionId === "subpage_navigation"
  );

  return (
    <NavItems
      nav={nav}
      isSticky={isSticky}
      handleBurgerButton={handleBurgerButton}
      isActive={isActive}
    />
  );
};

export default Navigation;
