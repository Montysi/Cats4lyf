import React, { createContext, useState } from "react";

export const BasketContext = createContext();

//Holds the state and function to update the state
export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  //function to add item to the basket and show modal
  const addItemtoBasket = (item) => {
    setBasketItems((prevItems) => [...prevItems, item]);
    setShowModal(true);
  };

  constCloseModal = () => {
    setShowModal(false);
  };

  //Provide context
  return (
    <BasketContext.Provider value= {{basketItems, addItemtoBasket, showModal, closeModal}}>
        {children}
    </BasketContext.Provider>
  )
};
