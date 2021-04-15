import * as React from "react";
import { ModalStateContext } from "../context/ModalProviderContainer";

export function useModalState() {
  return React.useContext(ModalStateContext);
}
