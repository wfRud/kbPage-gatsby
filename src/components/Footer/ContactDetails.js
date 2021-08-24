import React from "react";
import styled from "styled-components";
import * as variable from "../../assets/styles/Variables";
import FacebookIcon from "../../assets/iCons/facebook.inline.svg";
import InstagramIcon from "../../assets/iCons/instagram.inline.svg";

const TextContainer = styled.div`
  flex: 1 1 0;
  min-width: 400px;
  margin: auto 0;
  color: ${variable.white};

  @media (max-width: 989px) {
    min-width: 550px;
    max-width: 620px;
    margin: auto;
    padding-top: 20px;
  }
  @media (max-width: 580px) {
    min-width: 300px;
  }
  @media (max-width: 525px) {
    min-width: 300px;
  }
`;

const TextWrapper = styled.div`
  width: 70%;
  margin-left: auto;

  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 989px) {
    margin-left: 0;
  }
`;
const SectionTitle = styled.h2`
  font-size: ${variable.FONTSIZE_XL};
  font-weight: ${variable.FONTWEIGHT_BOLD};
  margin-bottom: ${variable.FOOTER_VERTICAL_MARGIN};
`;

const SectionParagraph = styled.p`
  font-size: ${variable.FONTSIZE_M};
  color: ${variable.grey};
  margin-bottom: ${variable.FOOTER_PARAGRAPH_VERTICAL_MARGIN};

  &:last-child {
    margin-bottom: 0;
  }
`;

const IconContainer = styled.div`
  flex: 1 1 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: ${variable.FOOTER_VERTICAL_MARGIN};
  color: #fff;

  a {
    text-decoration: none;
    color: white;
    height: 32px;
    margin-left: 32px;
  }
  svg {
    transition: transform 0.3s ease-in-out;
  }

  svg:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const ContactDetails = ({
  contactDetails: { title, city, street, phone, email },
  facebookUrl,
}) => (
  <TextContainer>
    <TextWrapper>
      <SectionTitle>{title}</SectionTitle>
      <SectionParagraph>{city}</SectionParagraph>
      <SectionParagraph>ul. {street}</SectionParagraph>
      <SectionParagraph>tel: {phone}</SectionParagraph>
      <SectionParagraph>e-mail: {email}</SectionParagraph>
      <IconContainer>
        <InstagramIcon />
        <a href={facebookUrl} target="_blank" rel="noreferrer">
          <FacebookIcon />
        </a>
      </IconContainer>
    </TextWrapper>
  </TextContainer>
);

export default ContactDetails;
