import type Queries from "@testing-library/dom/types/queries";
import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalPortal from "src/components/modal/Modal";
import { ModalDispatchContext, ModalStateContext } from "src/context/ModalProviderContainer";
import type { State } from "src/hooks/useModalCore";

const initialState: State = {
  isModalOpen: false,
  modalType: undefined,
  data: null,
};

const mockState = (state?: State): State => {
  return { ...initialState, ...state };
};

const mockDispatchContextValue = {
  openModal: jest.fn(),
  closeModal: jest.fn(),
};

const customRender = (ui: React.ReactElement, state?: State): RenderResult<typeof Queries, HTMLElement> => {
  const mockStateContextValue = mockState(state);
  return render(
    <>
      <div id="__next" />
      <ModalStateContext.Provider value={mockStateContextValue}>
        <ModalDispatchContext.Provider value={mockDispatchContextValue}>{ui}</ModalDispatchContext.Provider>
      </ModalStateContext.Provider>
    </>
  );
};

describe("ModalPortal", () => {
  let renderResult: RenderResult;
  let newState: State;

  it("initial render matches snapshot", () => {
    renderResult = customRender(<ModalPortal />);
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("drawer modal matches snapshot", () => {
    newState = {
      isModalOpen: true,
      modalType: "DRAWER",
      data: null,
    };
    renderResult = customRender(<ModalPortal />, newState);
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("contact modal matches snapshot", () => {
    newState = {
      isModalOpen: true,
      modalType: "CONTACT",
      data: {
        formData: {
          name: "name",
          email: "email@test.com",
          category: "",
          description: "description",
        },
      },
    };
    renderResult = customRender(<ModalPortal />, newState);
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("closes modal when backdrop is clicked", () => {
    newState = {
      isModalOpen: true,
      modalType: "DRAWER",
      data: null,
    };
    renderResult = customRender(<ModalPortal />, newState);

    const backdrop = renderResult.container.getElementsByClassName("backdrop_70")[0];
    expect(backdrop).toBeInTheDocument();
    expect(renderResult.container.childElementCount).toBeGreaterThan(0);

    userEvent.click(backdrop);
    renderResult.rerender(<ModalPortal />);

    expect(renderResult.container.childElementCount).toBe(0);
  });
});
