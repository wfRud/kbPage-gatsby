import React from "react";
import Slider from "../components/Slider/Slider";
import Section from "../components/Section/Section";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import * as variable from "../assets/styles/Variables";

import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

const Container = styled.div`
  position: relative;
  max-width: ${variable.CONTAINER_WIDTH};
  margin: 0 auto;
  height: auto;

  @media (max-width: 1260px) {
    padding: 0 20px;
  }
`;

const HomePage = ({ data }) => {
  const {
    datoCmsHome: { slider, about, graphic, drawing },
  } = data;

  const images = slider[0].slider.map((image) => getImage(image));

  return (
    <>
      <Container>
        <Slider images={images} sectionId={slider[0].sectionId} />

        <Section
          sectionId={about[0].sectionId}
          title={about[0].title}
          paragraph={about[0].paragraph}
          image={about[0].sectionImage}
        />
        <Section
          sectionId={graphic[0].sectionId}
          title={graphic[0].title}
          paragraph={graphic[0].paragraph}
          image={graphic[0].sectionImage}
          additionalimage={graphic[0].additionalImage}
          reverse={graphic[0].reverse ? 1 : 0}
        />
        <Section
          sectionId={drawing[0].sectionId}
          title={drawing[0].title}
          paragraph={drawing[0].paragraph}
          image={drawing[0].sectionImage}
          additionalimage={drawing[0].additionalImage}
          reverse={drawing[0].reverse ? 1 : 0}
        />
      </Container>
      <Footer />
    </>
  );
};

export const query = graphql`
  query HomePageQuery {
    datoCmsHome {
      slider {
        sectionId
        slider {
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            layout: CONSTRAINED
            imgixParams: { fit: "crop", w: "1200", h: "600" }
          )
        }
      }

      about {
        title
        paragraph
        sectionImage {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        sectionId
      }
      drawing {
        paragraph
        title
        sectionImage {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        additionalImage {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        sectionId
        reverse
      }
      graphic {
        title
        reverse
        sectionImage {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        additionalImage {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        sectionId
        paragraph
      }
    }
  }
`;

export default HomePage;
