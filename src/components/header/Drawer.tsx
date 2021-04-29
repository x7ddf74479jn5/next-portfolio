import "./styles.css";

import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export default function App() {
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className="App">
      <button onClick={() => {return setIsOpen(true)}}>Open Modal</button>
      <Modal isOpen={modalIsOpen}>
        <button onClick={() => {return setIsOpen(false)}}>Close Modal</button>
      </Modal>
    </div>
  );
}
