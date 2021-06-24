import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalCloseButton from "src/components/modal/ModalCloseButton";

describe("ModalCloseButton", () => {
  let renderResult: RenderResult;
  let buttonElement: HTMLElement;
  const mockHandleClick = jest.fn();

  beforeEach(() => {
    renderResult = render(<ModalCloseButton onClick={mockHandleClick} />);
    buttonElement = renderResult.getByRole("button");
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    expect(buttonElement).toHaveTextContent("×");
    expect(buttonElement).toBeEnabled();
  });

  it("user interaction", () => {
    userEvent.click(buttonElement);
    expect(mockHandleClick).toHaveBeenCalled();
  });
});
