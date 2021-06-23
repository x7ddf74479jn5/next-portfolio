import type { VFC } from "react";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import ChatbotDialog from "src/components/chatbot/ChatbotDialog";
import ModalPopup from "src/components/contact/ModalPopup";
import Backdrop from "src/components/modal/Backdrop";
import ModalCloseButton from "src/components/modal/ModalCloseButton";
import ModalDrawer from "src/components/modal/ModalDrawer";
import useLockBodyScroll from "src/hooks/useBodyLockScroll";
import { useModalDispatch } from "src/hooks/useModalDispatch";
import useMount from "src/hooks/useMount";
import styles from "src/styles/components/modal/ModalContainer.module.scss";

import type { State } from "../../hooks/useModalCore";
import { useModalState } from "../../hooks/useModalState";

const ModalContainer: React.VFC = () => {
  const state = useModalState();
  const { closeModal } = useModalDispatch();
  if (!state.isModalOpen || !state.modalType) {
    return null;
  }

  return (
    <div className={styles.modalContainer}>
      <Backdrop opacity={70} />
      <ModalContent state={state} />
      <ModalCloseButton onClick={closeModal} />
    </div>
  ); // TODO: TEST
};

type Props = { state: State };

const ModalContent: React.VFC<Props> = ({ state }) => {
  useLockBodyScroll();

  switch (state.modalType) {
    case "CHATBOT": {
      return <ChatbotDialog />;
    }
    case "CONTACT":
      return <ModalPopup {...state.data} />;
    case "DRAWER":
      return <ModalDrawer />;
    default:
      throw new Error("未定義");
  }
}; // TODO: TEST

const ModalPortal: VFC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { isMounted } = useMount();

  useEffect(() => {
    ref.current = document.querySelector("#__next");
    return () => {
      if (ref.current) {
        ref.current = null;
      }
    };
  }, []);

  return ref.current && isMounted ? createPortal(<ModalContainer />, ref.current) : null;
};

export default ModalPortal;
