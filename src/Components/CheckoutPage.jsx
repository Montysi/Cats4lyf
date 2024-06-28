import React, {useContext} from "react";
import {BasketContext} from "../Context/BasketContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CheckoutPage = () => {
  const {basketItems} = useContext(BasketContext);
  const navigate = useNavigate();

  return (
    <CheckoutContainer>
      <h2>Checkout</h2>
      {basketItems.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        <ul>
          {basketItems.map((item, index) => (
            <li key={index}>
              {item.name} - £{item.price}
            </li>
          ))}
        </ul>
      )}
      <HomeButton onClick = {() => navigate('/')}>Back to Store</HomeButton>
    </CheckoutContainer>
  )
};

export default CheckoutPage;

const CheckoutContainer = styled.div`
  
`;

const Checkoutitem = styled.li`
  
`;

const HomeButton = styled.button`
  
`
