import { useState, useEffect } from "react";
import React, { useContext } from "react";
import { BasketContext } from "../Context/BasketContext"

const HomePage = ({ cats, errorMsg,}) => {
  const { addItemToBasket, openModal} = useContext(BasketContext);
  
  return (
    <>
      {errorMsg && <p>{errorMsg}</p>}
      <div className="cats">
        {cats.map((cat, index) => (
          <div key={index}>
            <img src={cat.catImage} alt={cat.name} />
            <h3>{cat.name}</h3>
            <p>£{cat.price}</p>
            <button onClick={() => addItemToBasket(cat)}>Add to Basket</button>
            <button onClick={() => openModal(cat)}>More Info</button>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
