import dynamic from "next/dynamic";
import type { VFC } from "react";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import ModalPopup from "src/components/contact/ModalPopup";
import Backdrop from "src/components/modal/Backdrop";
import ModalCloseButton from "src/components/modal/ModalCloseButton";
import ModalDrawer from "src/components/modal/ModalDrawer";
import useLockBodyScroll from "src/hooks/useBodyLockscroll";
import { useModalDispatch } from "src/hooks/useModalDispatch";
import useMount from "src/hooks/useMount";
import styles from "src/styles/components/modal/ModalContainer.module.scss";

import type { State } from "../../hooks/useModalCore";
import { useModalState } from "../../hooks/useModalState";
import FormDialog from "../chatbot/components/Forms/FormDialog";

const ModalContainer: React.VFC = () => {
  const state = useModalState();
  const { closeModal } = useModalDispatch();
  useLockBodyScroll();
  if (!state.isModalOpen || !state.modalType) {
    return null;
  }

  return (
    <div className={styles.modalContainer}>
      <Backdrop opacity={70} />
      <ModalContent state={state} closeModal={closeModal} />
      <ModalCloseButton onClick={closeModal} />
    </div>
  );
};

type Props = { state: State; closeModal: () => void };

const ModalContent: React.VFC<Props> = ({ state, closeModal }) => {
  switch (state.modalType) {
    case "CHATBOT": {
      const Chatbot = dynamic(() => {
        return import("src/components/chatbot/components/ChatbotDialog");
      });
      return <Chatbot />;
    }
    case "CONTACT":
      return <ModalPopup {...state.data} />;
    case "DRAWER":
      return <ModalDrawer />;
    case "CHATBOT_CONTACT":
      return <FormDialog open={true} handleClose={closeModal} />;
    default:
      throw new Error("未定義");
  }
};

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
