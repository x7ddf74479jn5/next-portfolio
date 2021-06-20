import type { VFC } from "react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ModalPopup from "src/components/contact/ModalPopup";
import Backdrop from "src/components/modal/Backdrop";
import ModalDrawer from "src/components/modal/ModalDrawer";
import styles from "src/styles/components/modal/ModalContainer.module.scss";

import { useModalState } from "../../hooks/useModalState";
import ChatBotModal from "../chatbot/components/ChatBotModal";

const ModalContainer: React.VFC = () => {
  const state = useModalState();

  if (!state.isModalOpen || !state.modalType) {
    return null;
  }

  return (
    <div className={styles.modalContainer}>
      <Backdrop opacity={70} />
      <ModalContent />
    </div>
  );
};

const ModalContent: React.VFC = () => {
  const state = useModalState();

  switch (state.modalType) {
    case "CHAT_BOT":
      return <ChatBotModal />;
    // return <ModalDrawer />;
    case "CONTACT":
      return <ModalPopup {...state.data} />;
    case "DRAWER":
      return <ModalDrawer />;
    default:
      throw new Error("未定義");
  }
};

const ModalPortal: VFC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#__next");
    setMounted(true);
    return () => {
      if (ref.current) {
        ref.current = null;
        setMounted(false);
      }
    };
  }, []);

  return ref.current && mounted ? createPortal(<ModalContainer />, ref.current) : null;
};

export default ModalPortal;
