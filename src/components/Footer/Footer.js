import React from "react";
import styled from "styled-components";
import * as varriable from "../../assets/styles/Varriables";
import { useStaticQuery, graphql } from "gatsby";
// Icons
import MailIcon from "../../assets/iCons/mail.inline.svg";
import FacebookIcon from "../../assets/iCons/facebook.inline.svg";
import InstagramIcon from "../../assets/iCons/instagram.inline.svg";

const FooterContainer = styled.div`
  width: 100%;
  height: 30vh;
  background-color: ${varriable.dark};
  margin-top: ${varriable.SECTION_CONTAINER_VERTICAL_MARGIN};
`;
const InnerContainer = styled.div`
  display: flex;
  width: ${varriable.CONTAINER_WIDTH};
  margin: 0 auto;
  height: 100%;
`;

const TextContainer = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${varriable.white};
`;
const SectionTitle = styled.h2`
  font-size: ${varriable.FONTSIZE_XL};
  font-weight: ${varriable.FONTWEIGHT_BOLD};
  margin-bottom: ${varriable.FOOTER_TITLE_VERTICAL_MARGIN};
`;

const SectionParagraph = styled.p`
  font-size: ${varriable.FONTSIZE_M};
  color: ${varriable.grey};
  margin-bottom: ${varriable.FOOTER_PARAGRAPH_VERTICAL_MARGIN};

  &:last-child {
    margin-bottom: 0;
  }
`;

const IconContainer = styled.div`
  flex: 1 1 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 15%;
  color: #fff;
  padding-bottom: ${varriable.FOOTER_TITLE_VERTICAL_MARGIN};
  a {
    text-decoration: none;
    color: white;
  }
  svg {
    transition: transform 0.3s ease-in-out;
  }

  svg:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const Footer = ({ handleShowForm }) => {
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
    datoCmsContact: { title, city, street, phone, email, sectionId },
    datoCmsSite: {
      globalSeo: { facebookPageUrl },
    },
  } = ContactQuery;

  return (
    <FooterContainer id={sectionId}>
      <InnerContainer>
        <TextContainer>
          <SectionTitle>{title}</SectionTitle>
          <SectionParagraph>{city}</SectionParagraph>
          <SectionParagraph>ul. {street}</SectionParagraph>
          <SectionParagraph>tel: {phone}</SectionParagraph>
          <SectionParagraph>e-mail: {email}</SectionParagraph>
        </TextContainer>
        <IconContainer>
          <MailIcon onClick={() => handleShowForm(true)} />
          <a href={facebookPageUrl} target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
          <InstagramIcon />
        </IconContainer>
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;
