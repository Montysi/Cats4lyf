import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Logo from "../image/blackcat.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BasketContext } from "../Context/BasketContext";
import { useContext } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const { toggleModal } = useContext(BasketContext);

  const handleNavigate = () => navigate("/");


return (
  <StyledNavBar>
    <NavBarLeft>
      <img src={Logo} alt="Logo" />
      <h1>Cats4Lyf</h1>
    </NavBarLeft>
    <NavBarRight>
      <BasketIcon onClick={toggleModal}>
        <FontAwesomeIcon icon={faShoppingBasket} size="2x" />
      </BasketIcon>
    </NavBarRight>
  </StyledNavBar>
);
};

export default NavBar;

const StyledNavBar = styled.nav`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #555;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #fff;
`;

const NavBarLeft = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 50px;
    width: 50px;
  }

  h1 {
    margin-left: 10px;
  }
`;

const NavBarRight = styled.div`
  display: flex;
  align-items: center;
`;

const BasketIcon = styled.div`
  cursor: pointer;
  color: white;
  padding-right: 50px;

  &:hover {
    color: black;
  }
`;
