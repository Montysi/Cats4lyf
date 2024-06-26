import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./Components/HomePage";
import { faker } from "@faker-js/faker";
import "./App.css";
import BasketProvider from "./Context/BasketContext";
import BasketModal from "./Components/BasketModal";
import CheckoutPage from "./Components/CheckoutPage"
import Modal from "react-modal";
import { CatInfoProvider } from './Context/CatInfoContext';


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
          breed: faker.helpers.arrayElement([
            "Persian", 
            "Maine Coon", 
            "Bengal Cat",
            "British Shorthair", 
            "Siamese",
            "Abyssinian",
            "Sphynx",
            "Ragdoll",
            "Norweigan Forest Cat"
          ]),
          price: faker.finance.amount({ min: 150, max: 600 }),
          gender: faker.helpers.arrayElement(["Male", "Female"]),
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
            <Route path="/" element={<HomePage cats={cats} errorMsg={errorMsg} />}/>
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <BasketModal />
        </CatInfoProvider>
      </Router>
    </BasketProvider>
  );
};

export default App;


