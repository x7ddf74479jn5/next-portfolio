import React, { useEffect, useRef, useState, VFC } from "react";
import { createPortal } from "react-dom";
import Backdrop from "src/components/common/modal/Backdrop";
import ModalDrawer from "src/components/common/modal/ModalDrawer";
import styles from "src/styles/components/modal/ModalContainer.module.scss";
import { useModalDispatch } from "../hooks/useModalDispatch";
import { useModalState } from "../hooks/useModalState";

const ModalContainer: React.VFC = () => {
  const state = useModalState();
  const { closeModal } = useModalDispatch();

  if (!state.isOpen || !state.modalType) {
    return null;
  }
  return (
    <div className={styles.modalContainer}>
      <ModalContent type={state.modalType} />
      <Backdrop handleClick={closeModal} />
    </div>
  );
};

const ModalPortal: VFC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#__next");
    setMounted(true);
  }, []);

  return ref.current && mounted ? createPortal(<ModalContainer />, ref.current) : null;
};

export default ModalPortal;

type ModalType = "CHAT_BOT" | "CONTACT" | "DRAWER";
type Props = {
  type: ModalType;
};

const ModalContent: React.VFC<Props> = ({ type }) => {
  switch (type) {
    case "CHAT_BOT":
      return null;
    case "CONTACT":
      return null;
    case "DRAWER":
      return <ModalDrawer />;
    default:
      throw new Error("未定義");
  }
};
