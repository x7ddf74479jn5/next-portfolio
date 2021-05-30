import React from "react";
import { ModalDispatchContext, ModalStateContext } from "../src/context/ModalProviderContainer";

import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

const initialState = {
  isModalOpen: false,
  modalType: undefined,
  data: null,
};

const mockDispatchContextValue = {
  openModal: () => {
    // eslint-disable-next-line no-console
    console.log("Modal is open");
  },
  closeModal: () => {},
};

export const withContext = (storyFn: () => StoryFnReactReturnType) => {
  return (
    <ModalStateContext.Provider value={initialState}>
      <ModalDispatchContext.Provider value={mockDispatchContextValue}>{storyFn()}</ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};
