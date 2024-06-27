import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

//Context provides a way to pass data through the component tree without having to pass props down manually at every level.
export const BasketContext = createContext();

//'BasketProvider' wraps around parts of the application that need access to the context
//'children' represents any nested components inside the 'BasketProvider'
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

  const removeItemFromBasket = (itemToRemove) => {
    setBasketItems ((prevItems) => prevItems.filter(item => item !== itemToRemove));
  }


  //Gathers all pieces of state and functions into one place
  //allowing us to provide all these values to any component that needs them
  const contextValue = {
    basketItems,
    addItemToBasket,
    showModal,
    closeModal,
    removeItemFromBasket,
  };

  
  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
};

BasketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasketProvider;
