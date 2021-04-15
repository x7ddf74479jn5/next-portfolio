import React, { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "react-modal";
import ModalDrawer from "src/components/common/modal/ModalDrawer";

const ModalType1: FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#__next");
    setMounted(true);
  }, []);

  return mounted ? createPortal(<>ここにモーダル</>, ref.current!) : null;
};

export default ModalType1;

const ModalTypeWrapper = () => {
  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);
};

// TODO: useref 使わない　react-ModalType set  app
type ModalType = "CHAT_BOT" | "CONTACT" | "DRAWER";
type Props = {
  type: ModalType;
};

const ModalContent: FC<Props> = ({ type }) => {
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
