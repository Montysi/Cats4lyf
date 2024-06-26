import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./Components/HomePage";
import { faker } from "@faker-js/faker";
import "./App.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "50%",
    height: "50%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const App = () => {
  const [cats, setCats] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);

  const openModal = (cat) => {
    setSelectedCat(cat);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCat(null);
  };

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
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage cats={cats} errorMsg={errorMsg} />}
          />
        </Routes>
      </Router>

      {selectedCat && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        ></Modal>
      )}
    </div>
  );
};

export default App;
