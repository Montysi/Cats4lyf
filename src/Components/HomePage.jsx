import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../image/blackcat.png";

const HomePage = ({ cats, errorMsg, addToBasket }) => {
  const navigate = useNavigate();

  const handleNavigate = (index) => {
    setCurrentCat(cats[index]);
    navigate("cat");
  };

  return (
    <>
      <div>
        <img src={Logo} />
        <h1>Cats4Lyf</h1>
      </div>
      {errorMsg && <p>{errorMsg}</p>}
      <div className="cats">
        {cats.map((cat, index) => {
          return (
            <div key={index} onClick={() => handleNavigate(index)}>
              <img src={cat.catImage} alt={cat.name} />
              <h3>{cat.name}</h3>
              <p>£{cat.price}</p>
              <button onClick={() => addToBasket(cat)}>Add to Basket</button>
              <button onClick={() => openModal(cat)}>More Info</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
