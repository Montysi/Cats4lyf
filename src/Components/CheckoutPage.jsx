import React, { useContext } from "react";
import { BasketContext } from "../Context/BasketContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CheckoutPage = () => {
  const { basketItems, calculateTotalPrice } = useContext(BasketContext);
  const navigate = useNavigate();

  return (
    <CheckoutContainer>
      <h2>Checkout</h2>
      {basketItems.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        <ul>
          {basketItems.map((item, index) => (
            <CheckoutItem key={index}>
              {item.name} - £{item.price}
            </CheckoutItem>
          ))}
        </ul>
      )}
      <TotalContainer>
        <TotalLabel>Total:</TotalLabel>
        <TotalPrice>£{calculateTotalPrice()}</TotalPrice>
      </TotalContainer>
      <HomeButton onClick={() => navigate("/")}>Back to Store</HomeButton>
    </CheckoutContainer>
  );
};

export default CheckoutPage;

const CheckoutContainer = styled.div``;

const CheckoutItem = styled.li``;

const TotalContainer = styled.div``;

const TotalLabel = styled.span``;

const TotalPrice = styled.span``;

const HomeButton = styled.button``;
