import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./Components/HomePage";
import { faker } from "@faker-js/faker";
import "./App.css";
import BasketProvider from "./Context/BasketContext";
import BasketModal from "./Components/BasketModal";
import Modal from "react-modal";
import { CatInfoProvider } from './Context/CatInfoContext'


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
      const catData = data.map((cat, index) => {
        return {
          catID: index,
          catImage: cat.url,
          name: faker.person.fullName(),
          breed: faker.animal.cat(),
          price: faker.finance.amount({ min: 150, max: 600 }),
          gender: faker.person.gender(),
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
    <BasketProvider>
      <Router>
        <CatInfoProvider>
          <Routes>
            <Route
              path="/"
              element={<HomePage cats={cats} errorMsg={errorMsg} />}
            />
          </Routes>
        </CatInfoProvider>
      </Router>
      <BasketModal />
    </BasketProvider>
  );
};

export default App;


