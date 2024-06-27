import React, { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../Context/BasketContext";

const BasketModal = () => {
  const { showModal, closeModal, basketItems } = useContext(BasketContext);

  if (!showModal) {
    return null;
  }

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={closeModal}>Close</CloseButton>
        <h2>Shopping Basket</h2>
        <ul>
          {basketItems.length === 0 ? (
            <li>Your basket is empty</li>
          ) : (
            basketItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))
        )}
        </ul>
      </ModalContainer>
    </ModalBackground>
  );
};

export default BasketModal;

const ModalContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    position: relative;
    max-width: 500px;
    width: 100%;
    `;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  background-color: #8181ac;
  display: flex;
  justify-content: center;
  align-items: center
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
`;
