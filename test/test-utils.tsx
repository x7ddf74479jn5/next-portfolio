/* eslint-disable @typescript-eslint/no-empty-function */
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"
import type Queries from "@testing-library/dom/types/queries";
import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import type { NextRouter } from "next/router";
import React from "react";
import { ModalDispatchContext, ModalStateContext } from "src/context/ModalProviderContainer";

const setupWindow = () => {
  return Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      };
    }),
  });
};

const withMockedRouter = (router: Partial<NextRouter> = {}, children: React.ReactElement): React.ReactElement => {
  const mockedRouter = {
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
    basePath: "/",
    isLocaleDomain: true,
    isReady: true,
    push: jest.fn(),
    prefetch: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isPreview: false,
    ...router,
  };

  return <RouterContext.Provider value={mockedRouter}>{children}</RouterContext.Provider>;
};

const mockRouter: NextRouter = {
  route: "/",
  pathname: "/",
  query: {},
  asPath: "/",
  basePath: "/",
  isLocaleDomain: true,
  isReady: true,
  push: jest.fn(),
  prefetch: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isPreview: false,
};

const initialState = {
  isModalOpen: false,
  modalType: undefined,
  data: null,
};

const mockDispatchContextValue = {
  openModal: () => {},
  closeModal: () => {},
};

const Providers: React.ComponentType<{ children?: any }> = ({ children }) => {
  // return children;
  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>
  //       {children}
  //     </TranslationProvider>
  //   </ThemeProvider>
  // )
  return (
    <ModalStateContext.Provider value={initialState}>
      <ModalDispatchContext.Provider value={mockDispatchContextValue}>
        <RouterContext.Provider value={mockRouter}>{children}</RouterContext.Provider>
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

const customRender = (ui: React.ReactElement, options = {}): RenderResult<typeof Queries, HTMLElement> => {
  return render(ui, { wrapper: Providers, ...options });
};

const reTestCase = {
  anyWord: expect.stringMatching(/\w+/),
  anyImage: expect.stringMatching(/^(data:image\/gif)|\.(png|webp|jpeg|jpg|svg)$/),
  // |\.(png|webp|jpeg|jpg|svg)$
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render, reTestCase, setupWindow, withMockedRouter };
