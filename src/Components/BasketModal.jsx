import React, { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "./context/BasketContext";

const BasketModal =()=> {
    const {showModal, closeModal, basketItems} = useContext(BasketContext);

    if (!showModal) {
        return null;
    }

    return (
        <ModalBackground>
            <ModalContainer>
                <CloseButton onClick={closeModal}>Close</CloseButton>
                <h2>ShoppingBasket</h2>
                <ul>
                    {basketItems.length === 0 ? (
                        <li>Your basket is empty</li>
                    ) : (
                        basketItems.map ((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    )}
                </ul>
            </ModalContainer>
        </ModalBackground>
    )
}

export default BasketModal
