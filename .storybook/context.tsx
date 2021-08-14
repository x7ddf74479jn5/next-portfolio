import React from "react";
import { ModalDispatchContext, ModalStateContext } from "../src/context/ModalProviderContainer";
import { RouterContext } from "next/dist/shared/lib/router-context";

import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import { NextRouter } from "next/router";

const initialState = {
  isModalOpen: false,
  modalType: undefined,
  data: null,
};

const mockDispatchContextValue = {
  openModal: () => {},
  closeModal: () => {},
};

export const withContext = (storyFn: () => StoryFnReactReturnType) => {
  return (
    <ModalStateContext.Provider value={initialState}>
      <ModalDispatchContext.Provider value={mockDispatchContextValue}>{storyFn()}</ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

export const withRouterContext = (storyFn: () => StoryFnReactReturnType, options: Partial<NextRouter>) => {
  const mockedRouter: NextRouter = {
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
    basePath: "/",
    isLocaleDomain: true,
    isReady: true,
    push: () => {
      return Promise.resolve(true);
    },
    prefetch: () => {
      return Promise.resolve();
    },
    replace: () => {
      return Promise.resolve(true);
    },
    reload: () => {},
    back: () => {},
    beforePopState: () => {},
    events: {
      on: () => {},
      off: () => {},
      emit: () => {},
    },
    isFallback: false,
    isPreview: false,
    ...options,
  };
  return <RouterContext.Provider value={mockedRouter}>{storyFn()}</RouterContext.Provider>;
};
