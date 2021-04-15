import React from "react";
import Modal from "react-modal";
import "./styles.css";

Modal.setAppElement("#__next");

export default function App() {
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen}>
        <button onClick={() => setIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}
