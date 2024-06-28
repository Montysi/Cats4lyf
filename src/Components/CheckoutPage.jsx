import React, { useContext } from "react";
import { BasketContext } from "../Context/BasketContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";

const CheckoutPage = () => {
  const { basketItems, calculateTotalPrice } = useContext(BasketContext);
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <CheckoutContainer>
        <h2>Checkout</h2>
        {basketItems.length === 0 ? (
          <p>Your basket is empty</p>
        ) : (
          <ul>
            {basketItems.map((item, index) => (
              <CheckoutItem key={index}>
                <ItemDetails>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>£{item.price}</ItemPrice>                  
                </ItemDetails>
                <ItemImage src={item.img} alt={item.name} />
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
    </>
  );
};

export default CheckoutPage;

const CheckoutContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  transition: right 0.3s ease-in-out;
  z-index: 10;
`;

const CheckoutItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName= styled.h3`
  margin: 0;
`;

const ItemPrice = styled.p`
  margin: 0;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
`;

const TotalContainer = styled.div`
margin-top: 20px
`;

const TotalLabel = styled.span`
  font-weight: bold;
`;

const TotalPrice = styled.span`
  color: #333;
`;

const HomeButton = styled.button`
  width: 200px;
  padding: 10px;
  margin-top: 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;
