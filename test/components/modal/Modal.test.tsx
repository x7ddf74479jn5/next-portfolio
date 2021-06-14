/* eslint-disable @typescript-eslint/no-empty-function */
import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("closes modal when backdrop is clicked", () => {
    const backdrop = renderResult.container.getElementsByClassName("backdrop_70")[0];
    expect(backdrop).toBeInTheDocument();
    expect(renderResult.container.childElementCount).toBeGreaterThan(0);

    userEvent.click(backdrop);
    renderResult.rerender(<ModalPortal />);

    expect(renderResult.container.childElementCount).toBe(0);
  });
});
