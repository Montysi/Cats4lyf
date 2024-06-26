import { useState, useEffect } from "react";

const HomePage = ({ cats, errorMsg, addToBasket }) => {
  return (
    <>
      {errorMsg && <p>{errorMsg}</p>}
      <div className="cats">
        {cats.map((cat, index) => (
          <div key={index}>
            <img src={cat.catImage} alt={cat.name} />
            <h3>{cat.name}</h3>
            <p>£{cat.price}</p>
            <button onClick={() => addToBasket(cat)}>Add to Basket</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
