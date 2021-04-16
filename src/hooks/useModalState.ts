import * as React from "react";
import { ModalStateContext } from "../context/ModalProviderContainer";

export function useModalState() {
  const state = React.useContext(ModalStateContext);
  if (!state) {
    throw new Error("Make sure to be wrapped by Provider");
  }
  return state;
}
