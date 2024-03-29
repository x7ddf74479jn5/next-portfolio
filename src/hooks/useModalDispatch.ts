import * as React from "react";

import { ModalDispatchContext } from "./../context/ModalProviderContainer";

export const useModalDispatch = () => {
  const dispatch = React.useContext(ModalDispatchContext);
  if (!dispatch) {
    throw new Error("Make sure to be wrapped by Provider");
  }
  return dispatch;
};
