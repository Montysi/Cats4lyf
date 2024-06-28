import React, { useContext } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { BasketContext } from "../Context/BasketContext";

const BasketModal = () => {
  const {
    showModal,
    closeModal,
    basketItems,
    calculateTotalPrice,
    removeItemFromBasket,
  } = useContext(BasketContext);
  const navigate= useNavigate()

  if (!showModal) {
    return null;
  }
  
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  
  const handleCheckout = () => {
    closeModal();
    history.push("/checkout");
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <SidePanel>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <h2>Basket</h2>
        <ItemList>
          {basketItems.length === 0 ? (
            <EmptyMessage>Your basket is empty</EmptyMessage>
          ) : (
            basketItems.map((item, index) => (
              <ShoppingListItem key={index}>
                {item.name} <br /> £{item.price}
                <RemoveButton onClick={() => removeItemFromBasket(item)}>
                  Remove
                </RemoveButton>
              </ShoppingListItem>
            ))
          )}
        </ItemList>
        <TotalSection>
          <TotalContainer>
            <TotalLabel>Total:</TotalLabel>
            <TotalPrice>£{calculateTotalPrice()}</TotalPrice>
          </TotalContainer>
           <CheckoutButton onClick={() => navigate("/checkout")}>
        Proceed to Checkout
      </CheckoutButton>
        </TotalSection>
      </SidePanel>
    </Overlay>
  );
};

export default BasketModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`;

const SidePanel = styled.div`
  position: relative;
  width: 300px;
  height: 100%;
  background-color: #f9f9f9;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ffffff;
  background-color: #333;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1002;

  &:hover {
    background-color: #555;
  }
`;

const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: 70%;
  overflow-y: auto;
`;

const ShoppingListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const EmptyMessage = styled.li`
  text-align: center;
  color: #888;
`;

const TotalSection = styled.div`
  position: absolute;
  bottom: 25px;
  left: 0;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  padding: 0 20px;
`;

const TotalLabel = styled.span`
  font-weight: bold;
`;

const TotalPrice = styled.span`
  color: #333;
`;

const RemoveButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #555;
  }
`;

const CheckoutButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  margin-top: 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 900;

  &:hover {
    background-color: #555;
  }
`;


