import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

const HomePage = ({ cats, errorMsg }) => {
  return (
    <>
      <Cats>
        {cats.map((cat, index) => {
          return (
            <div>
              <img src={cat.catImage} alt={cat.name} />
              <h3>{cat.name}</h3>
              <p>£{cat.price}</p>
            </div>
          );
        })}
      </Cats>
    </>
  );
};

export default HomePage;
