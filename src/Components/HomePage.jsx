import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../image/blackcat.png";
import styled from "styled-components";
import { BasketContext } from "../Context/BasketContext"
import { CatInfoContext, CatInfoProvider } from "../Context/CatInfoContext";
import CatInfoModal from "./CatinfoModal";

const HomePage = ({ cats, errorMsg }) => {
  const navigate = useNavigate();
  const { addItemToBasket } = useContext(BasketContext);
  const { openModal } = useContext(CatInfoContext);

  const handleNavigate = (index) => {
    navigate(`cat/${index}`);
  };

  return (
    <>
      <NavBar>
        <img src={Logo} alt="Logo" />
        <h1>Cats4Lyf</h1>
      </NavBar>
      {errorMsg && <p>{errorMsg}</p>}
      <CatsInfo>
        {cats.map((cat, index) => {
          return (
            <CatCard key={index}>
              <img
                src={cat.catImage}
                alt={cat.name}
                onClick={() => handleNavigate(index)}
              />
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

const NavBar = styled.nav`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #a9a9a9;
  display: flex;
  align-items: center;

  img {
    height: 50px;
    width: 50px;
    padding-left: 30px;
  }
`;

const CatsInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 100px 20px 20px;

  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
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
