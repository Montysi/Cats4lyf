import React, {useContext} from "react";
import {BasketContext} from "../Context/BasketContext";
import styled from "styled-components";

const CheckoutPage = () => {
  const {basketItems} = useContext(BasketContext);

  return (
    <CheckoutContainer>
      <h2>Checkout</h2>
      {basketItems.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        <ul>
          {basketItems.map((item, index) => (
            <li key={index}>
              {items.name} - £{item.price}
            </li>
          ))}
        </ul>
      )}
    </CheckoutContainer>
  )
};

export default CheckoutPage;

const CheckoutContainer = styled.div`
  
`;

const Checkoutitem = styled.li`
  
`;
