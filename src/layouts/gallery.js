import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { getImage } from "gatsby-plugin-image";
import Thumbnail from "../components/Thumbnail/Thumbnail";
import Modal from "../components/Modal/Modal";
import * as variable from "../assets/styles/Variables";

export const query = graphql`
  query ($location: String!) {
    allDatoCmsGalleryImage(filter: { location: { eq: $location } }) {
      nodes {
        imageDescription
        imageTitle
        image {
          gatsbyImageData(layout: CONSTRAINED, imgixParams: { fit: "clip" })
        }
        price {
          amount
          currency
        }
        size {
          height
          width
        }
      }
    }
  }
`;

const Container = styled.div`
  position: relative;
  max-width: ${variable.CONTAINER_WIDTH};
  margin: 0 auto;
`;

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  width: 100%;
  height: auto;
  padding-bottom: 24px;
`;

const GalleryPage = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const {
    allDatoCmsGalleryImage: { nodes },
  } = data;

  const handleOpen = (i) => {
    setIsModalOpen(true);
    setSelectedImage(i);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleNextRequest = (length) => {
    selectedImage !== length - 1
      ? setSelectedImage(selectedImage + 1)
      : setSelectedImage(0);
  };

  const handlePrevRequest = (length) => {
    selectedImage !== 0
      ? setSelectedImage(selectedImage - 1)
      : setSelectedImage(length - 1);
  };

  useEffect(() => {
    isModalOpen && (document.body.style.overflow = "hidden");
    !isModalOpen && (document.body.style.overflow = "unset");
  }, [isModalOpen]);

  return (
    <Container>
      <GalleryWrapper>
        {nodes.map((item, i) => {
          const image = getImage(item.image);

          return (
            <Thumbnail
              image={image}
              key={i}
              alt={item.imageTitle}
              index={i}
              handleOpen={handleOpen}
            />
          );
        })}
      </GalleryWrapper>
      {isModalOpen && (
        <Modal
          images={nodes}
          handleClose={handleClose}
          handleNextRequest={handleNextRequest}
          handlePrevRequest={handlePrevRequest}
          selectedImage={selectedImage}
        />
      )}
    </Container>
  );
};

export default GalleryPage;
