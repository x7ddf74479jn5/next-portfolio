import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormButton from "src/components/contact/FormButton";

describe("FormButton", () => {
  let renderResult: RenderResult;
  let buttonElement: HTMLElement;
  const mockHandleClick = jest.fn();
  describe("apply", () => {
    beforeEach(() => {
      renderResult = render(<FormButton buttonType="apply" label="test" onClick={mockHandleClick} />);
      buttonElement = renderResult.getByRole("button");
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      expect(buttonElement).toHaveTextContent("test");
      expect(buttonElement).toBeEnabled();
      expect(buttonElement).toHaveClass("btnApply");
    });

    it("user interaction", () => {
      userEvent.click(buttonElement);
      expect(mockHandleClick).toHaveBeenCalled();
    });
  });

  describe("cancel", () => {
    beforeEach(() => {
      renderResult = render(<FormButton buttonType="cancel" label="test" onClick={mockHandleClick} />);
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      const buttonElement = renderResult.getByRole("button");
      expect(buttonElement).toHaveTextContent("test");
      expect(buttonElement).toBeEnabled();
      expect(buttonElement).toHaveClass("btnCancel");
    });
  });
});
