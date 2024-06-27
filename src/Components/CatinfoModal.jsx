import React, { useContext } from "react";
import Modal from "react-modal";
import { CatInfoContext } from "../Context/CatInfoContext";
import styled from "styled-components";
import { faker } from "@faker-js/faker";

const customStyles = {
  content: {
    width: "50%",
    height: "50%",
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

const CatInfoModal = ({cat}) => {
  const { modalIsOpen, closeModal } = useContext(CatInfoContext);

  // if (!modalIsOpen) {
  //   return null;
  // }
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
        <h1>More Information</h1>
        <button className="modalButton" onClick={closeModal}>
          Close
        </button>
      </Header>
      <Content>
        <h2>{selectedCat.name}</h2>
        <p>Breed: {selectedCat.breed}</p>
        <p>Price: ${selectedCat.price}</p>
        <p>Gender: {selectedCat.gender}</p>
        <img
          src={selectedCat.catImage}
          alt="Cat"
          style={{ maxWidth: "100px" }}
        />
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
`;

const Content = styled.div`
  padding: 20px;
`;