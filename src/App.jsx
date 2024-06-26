import { Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./Components/HomePage";
import { faker } from "@faker-js/faker";
import "./App.css";

const App = () => {
  const [cats, setCats] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      if (!response.ok) {
        throw new Error(response.statusText);
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
      <Routes>
        <Route
          path="/"
          element={<HomePage cats={cats} errorMsg={errorMsg} />}
        />
      </Routes>
    </>
  );
};

export default App;
