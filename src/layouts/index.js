import React from "react";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Navigation from "../components/Navigation/Navigation";

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />

      <Navigation />

      {children}
    </>
  );
};

export default MainLayout;
