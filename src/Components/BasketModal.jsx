import React, { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../Context/BasketContext";

const BasketModal = () => {
  const { showModal, closeModal, basketItems, removeItemFromBasket } = useContext(BasketContext);

  if (!showModal) {
    return null;
  }

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={closeModal}>Close</CloseButton>
        <h2>Basket</h2>
        <ul>
          {basketItems.length === 0 ? (
            <li>Your basket is empty</li>
          ) : (
            basketItems.map((item, index) => (
              <ShoppingList key={index}>
                {item.name} - £{item.price}
                <RemoveButton onClick={()=> removeItemFromBasket(item)}>Remove</RemoveButton>
              </ShoppingList>
            ))
          )}
        </ul>
        <CheckoutButton>Proceed to Checkout</CheckoutButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default BasketModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  background-color: #57575a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: #a9a9a9;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 500px;
  width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: black;
  background-color: #a52121;

  &:hover {
    color: white;
    background-color: #fd0b0b;
  }
`;

const ShoppingList = styled.li`
    margin-bottom: 10px;
    font-family: Arial, Helvetica, sans-serif
`

const RemoveButton = styled.button`
  
`

const CheckoutButton = styled.button`
    position: absolute;
    bottom: 10px;
`
