import React from "react";
import styled from "styled-components";
import * as variable from "../../assets/styles/Variables";
import { useStaticQuery, graphql } from "gatsby";
import ContactForm from "./Form/Form";
import ContactDetails from "./ContactDetails";

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  min-height: 916px;
  max-height: 1240px;
  background-color: ${variable.dark};
  margin-top: ${variable.SECTION_CONTAINER_VERTICAL_MARGIN};
`;
const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  max-width: ${variable.CONTAINER_WIDTH};
  height: 100%;

  @media (max-width: 1260px) {
    padding: 0 20px;
  }
  @media (max-width: 989px) {
    padding: 100px 20px 40px 20px;
  }
  @media (max-width: 320px) {
    padding: 100px 10px 40px 10px;
  }
`;

const Footer = () => {
  const ContactQuery = useStaticQuery(graphql`
    {
      datoCmsContact {
        title
        city
        street
        phone
        email
        sectionId
      }
      datoCmsSite {
        globalSeo {
          facebookPageUrl
        }
      }
    }
  `);

  const {
    datoCmsContact: contactDetails,
    datoCmsSite: {
      globalSeo: { facebookPageUrl },
    },
  } = ContactQuery;

  return (
    <FooterContainer id={contactDetails.sectionId}>
      <InnerContainer>
        <ContactForm />
        <ContactDetails
          contactDetails={contactDetails}
          facebookUrl={facebookPageUrl}
        />
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;
