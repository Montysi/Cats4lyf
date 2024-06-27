import { useState, useEffect, useContext } from "react";
import { CatInfoContext, CatInfoProvider } from "../Context/CatInfoContext";
import CatInfoModal from "./CatinfoModal";


const HomePage = ({ cats, errorMsg, addToBasket, }) => {
     const { openModal } = useContext(CatInfoContext);
     

     const handleOpenModal = (cat) => {
       openModal(cat); 
     };

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
            <button onClick={handleOpenModal}>More Info</button>
          </div>
        ))}
      </div>
      <CatInfoModal />
    </>
  );
};

export default HomePage;
