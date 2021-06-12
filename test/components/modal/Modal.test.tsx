/* eslint-disable @typescript-eslint/no-empty-function */
import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import ModalPortal from "src/components/modal/Modal";
import { ModalDispatchContext, ModalStateContext } from "src/context/ModalProviderContainer";
import type { State } from "src/hooks/useModalCore";

describe("ModalPortal", () => {
  let renderResult: RenderResult;

  const initialState: State = {
    isModalOpen: true,
    modalType: "DRAWER",
    data: null,
  };

  const mockDispatchContextValue = {
    openModal: () => {},
    closeModal: () => {},
  };

  const Providers: React.ComponentType<{ children?: any }> = ({ children }) => {
    return (
      <ModalStateContext.Provider value={initialState}>
        <ModalDispatchContext.Provider value={mockDispatchContextValue}>{children}</ModalDispatchContext.Provider>
      </ModalStateContext.Provider>
    );
  };

  beforeEach(() => {
    renderResult = render(
      <>
        <div id="__next" />
        <Providers>
          <ModalPortal />
        </Providers>
      </>
    );
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
