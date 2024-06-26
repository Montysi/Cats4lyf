import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Logo from "../image/blackcat.png";
import styled from "styled-components";
import { BasketContext } from "../Context/BasketContext";
import { CatInfoContext, CatInfoProvider } from "../Context/CatInfoContext";
import CatInfoModal from "./CatinfoModal";
import NavBar from "./NavBar";

const HomePage = ({ cats, errorMsg }) => {
  const { addItemToBasket, toggleModal } = useContext(BasketContext);
  const { openModal } = useContext(CatInfoContext);

  return (
    <>
    <NavBar /> 
      <ErrorMessage>{errorMsg && <p>{errorMsg}</p>}</ErrorMessage>
      <CatsInfo>
        {cats.map((cat, index) => {
          return (
            <CatCard key={index}>
              <img src={cat.catImage} alt={cat.name} />
              <h3>{cat.name}</h3>
              <p>£{cat.price}</p>
              <button onClick={() => addItemToBasket(cat)}>
                Add to Basket
              </button>
              <button onClick={() => openModal(cat)}>More Info</button>
            </CatCard>
          );
        })}
      </CatsInfo>
      <CatInfoModal />
    </>
  );
};

export default HomePage;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 80px;
`;

const CatsInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 50px 20px 20px;
  justify-content: center;

  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  h1 {
    flex-grow: 1;
    text-align: center;
  }
`;

const CatCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 10px 0;
  }

  p {
    margin: 5px 0;
  }

  button {
    margin: 5px;
    padding: 5px 10px;
    border: none;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #555;
  }
`;
