import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const BasketContext = createContext();

//Holds the state and function to update the state
export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  //function to add item to the basket and show modal
  const addItemToBasket = (item) => {
    setBasketItems((prevItems) => [...prevItems, item]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const contextValue = { 
    basketItems,
    addItemToBasket,
    showModal,
    closeModal,
  };

  return (
    <BasketContext.Provider value= {contextValue}>
        {children}
    </BasketContext.Provider>
  )
};

BasketProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BasketProvider;
