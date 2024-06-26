import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import styled from 'styled-components';

const HomePage = () => {
  const [cats, setCats] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      if (!response.ok) {
        throw new Error("...");
      }
      const data = await response.json();
      const catData = data.mp((cat, index) => {
        return {
          catID: index,
          catImage: cat.url,
          name: faker.name.findName(),
          breed: faker.animal.cat(),
          price: faker.finance.amount(150, 600),
          gender: faker.name.gender(),
        };
      });
      console.log(catData);
      setCats(catData);
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1></h1>
    </>
  );
};
