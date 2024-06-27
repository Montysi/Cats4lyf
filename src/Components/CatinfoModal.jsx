import React, { useContext } from "react";
import Modal from "react-modal";
import { CatInfoContext } from "../Context/CatInfoContext";

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

const CatInfoModal = () => {
  const { modalIsOpen, closeModal } = useContext(CatInfoContext);

  if (!modalIsOpen) {
    return null;
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <button className="modalButton" onClick={closeModal}>
        Close
      </button>
    </Modal>
  );
};

export default CatInfoModal;
