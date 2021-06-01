import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import GlobalStyles from "../assets/styles/GlobalStyles";
import styled from "styled-components";
import * as varriable from "../assets/styles/Varriables";

const Container = styled.div`
  position: relative;
  width: ${varriable.CONTAINER_WIDTH};
  margin: 0 auto;
`;

const MainLayout = ({ children }) => {
  const [showForm, setShowForm] = useState(true);

  const handleShowForm = (value) => setShowForm(value);

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showForm]);

  return (
    <>
      <Container>
        <GlobalStyles />
        <Navigation />
        {children}
      </Container>
      <Footer handleShowForm={handleShowForm} />
      {showForm && <Form handleShowForm={handleShowForm} />}
    </>
  );
};

export default MainLayout;
