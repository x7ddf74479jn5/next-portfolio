import type { VFC } from "react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ModalPopup } from "src/components/contact/ContactFormContainer";
import Backdrop from "src/components/modal/Backdrop";
import ModalDrawer from "src/components/modal/ModalDrawer";
import styles from "src/styles/components/modal/ModalContainer.module.scss";

import { useModalDispatch } from "../../hooks/useModalDispatch";
import { useModalState } from "../../hooks/useModalState";

const ModalContainer: React.VFC = () => {
  const state = useModalState();
  const { closeModal } = useModalDispatch();

  if (!state.isModalOpen || !state.modalType) {
    return null;
  }

  return (
    <div className={styles.modalContainer}>
      {<ModalContent />}
      <Backdrop opacity={70} handleClick={closeModal} />
    </div>
  );
};

const ModalContent: React.VFC = () => {
  const state = useModalState();

  switch (state.modalType) {
    case "CHAT_BOT":
      return <ModalDrawer />;
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
