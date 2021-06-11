import userEvent from "@testing-library/user-event";
import NavToggleButton from "src/components/header/NavToggleButton";
import type { RenderResult } from "test/test-utils";
import { render } from "test/test-utils";

describe("NavToggleButton", () => {
  let renderResult: RenderResult;
  let mockHandleClick: jest.Mock<any, any>;

  describe("closed", () => {
    beforeEach(() => {
      mockHandleClick = jest.fn();
      renderResult = render(<NavToggleButton isOpen={false} onClick={mockHandleClick} />);
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      const buttonElement = renderResult.getByRole("button");
      expect(buttonElement).toHaveAttribute("aria-label", expect.stringContaining("ナビゲーション"));
      expect(buttonElement).toHaveClass("navToggleButton");
      const imgElement = renderResult.container.getElementsByTagName("svg")[0];
      expect(imgElement).toHaveAttribute("aria-label", expect.stringContaining("開く"));
    });

    it("user Interaction", () => {
      userEvent.click(renderResult.getByRole("button"));
      expect(mockHandleClick).toBeCalled();
    });
  });

  describe("open", () => {
    beforeEach(() => {
      mockHandleClick = jest.fn();
      renderResult = render(<NavToggleButton isOpen={true} onClick={mockHandleClick} />);
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      const buttonElement = renderResult.getByRole("button");
      expect(buttonElement).toHaveClass("navToggleButtonOpen");

      const imgElement = renderResult.container.getElementsByTagName("svg")[0];
      expect(imgElement).toHaveAttribute("aria-label", expect.stringContaining("閉じる"));
    });

    it("user Interaction", () => {
      userEvent.click(renderResult.getByRole("button"));
      expect(mockHandleClick).toBeCalled();
    });
  });
});
