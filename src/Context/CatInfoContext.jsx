import React, { createContext, useState } from "react";

export const CatInfoContext = createContext();

export const CatInfoProvider = ({ children }) => {
  const [selectedCat, setSelectedCat] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (cat) => {
    setSelectedCat(cat);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCat(null);
  };

  return (
    <CatInfoContext.Provider
      value={{ selectedCat, modalIsOpen, openModal, closeModal }}
    >
      {children}
    </CatInfoContext.Provider>
  );
};
