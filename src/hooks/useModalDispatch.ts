import * as React from "react";
import { ModalDispatchContext } from "./../context/ModalProviderContainer";

export function useModalDispatch() {
  return React.useContext(ModalDispatchContext);
}
