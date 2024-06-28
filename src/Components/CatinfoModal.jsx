import React, { useContext } from "react";
import Modal from "react-modal";
import { CatInfoContext } from "../Context/CatInfoContext";
import styled from "styled-components";
import Logo from "../image/blackcat.png";

const customStyles = {
  content: {
    width: "70%",
    height: "70%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: 0, 
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const CatInfoModal = () => {
  const { modalIsOpen, closeModal, selectedCat } = useContext(CatInfoContext);

  
  if (!modalIsOpen || !selectedCat) {
    return null;
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <Header>
        <img src={Logo} alt="Logo" />
        <h1>More Information</h1>
        <button className="modalButton" onClick={closeModal}>
          Close
        </button>
      </Header>
      <Content>
        <ImgContent>
          <img
            src={selectedCat.catImage}
            alt="Cat"
          />
        </ImgContent>
        <TextContent>
          <h2>{selectedCat.name}</h2>
          <p>Breed: {selectedCat.breed}</p>
          <p>Price: ${selectedCat.price}</p>
          <p>Gender: {selectedCat.gender}</p>
          <p>
            {selectedCat.name} is a delightful {selectedCat.breed} with a
            charming personality. This {selectedCat.gender.toLowerCase()} is
            known for{" "}
            {selectedCat.breed === "Persian"
              ? "a luxurious coat and calm demeanor"
              : selectedCat.breed === "Maine Coon" 
              ? "an extroverted and playful temperment" 
              : selectedCat.breed === "Bengal Cat"
              ? "being a very active and athletic cat"
              : selectedCat.breed === "British Shorthair"
              ? "being easy going and placid"
              : selectedCat.breed === "Siamese"
              ? "an affectionate nature and vocal communication"
              : "a playful and friendly disposition"}
            . Perfect for families or individuals looking for a loving
            companion. Don't miss out on the chance to welcome{" "}
            {selectedCat.name} into your home!
          </p>
        </TextContent>
      </Content>
    </Modal>
  );
};


export default CatInfoModal;

const Header = styled.header`
  display: flex;
  background-color: #a9a9a9;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1 {
    font-weight: bold;
    font-style: underline;
  }

  button {
    margin: 5px;
    padding: 5px 10px;
    border: none;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    position: absolute;
    right: 2px;
    top: 2px;
  }

  img {
    height: 60px;
    width: 60px;
    position: absolute;
    left: 10px

  }
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  height: 75%;
  flex-direction: row;
`;

const ImgContent = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextContent = styled.div`
  flex: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 10px;
    padding: 15px;
  }

  p {
    margin: 5px 0;
    padding: 15px;
  }
`;