import React, { useState, useEffect } from "react";
import Slider from "../components/Slider/Slider";
import Section from "../components/Section/Section";
import ScrollButton from "../components/ScrollButton/ScrollButton";

import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

const HomePage = ({ data }) => {
  const [showBtn, setShowBtn] = useState(false);
  const {
    datoCmsHome: { slider, about, graphic, drawing },
  } = data;

  const images = slider[0].slider.map((image) => getImage(image));

  useEffect(() => {
    const navHeight = document.getElementById("navigation").clientHeight;
    const sliderHeight = document.getElementById("slider").clientHeight;

    window.addEventListener("scroll", () => {
      window.scrollY > navHeight + sliderHeight && setShowBtn(true);
      window.scrollY < navHeight && setShowBtn(false);
    });
  });

  return (
    <>
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
        $reverse={graphic[0].reverse}
      />
      <Section
        sectionId={drawing[0].sectionId}
        title={drawing[0].title}
        paragraph={drawing[0].paragraph}
        image={drawing[0].sectionImage}
        additionalimage={drawing[0].additionalImage}
        $reverse={drawing[0].reverse}
      />
      {showBtn && <ScrollButton />}
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
            imgixParams: { fit: "clip" }
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
