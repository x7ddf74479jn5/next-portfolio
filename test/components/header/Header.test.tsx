import userEvent from "@testing-library/user-event";
import { Header } from "src/components/header/Header";
import type { RenderResult } from "test/test-utils";
import { render } from "test/test-utils";

describe("Header", () => {
  let renderResult: RenderResult;

  describe("closed", () => {
    beforeEach(() => {
      renderResult = render(<Header />);
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      const navElement = renderResult.getByRole("banner");
      expect(navElement).toBeInTheDocument();
    });
    it("toggle header menu when SP", () => {
      const navToggleButton = renderResult.getAllByRole("button")[0];
      expect(navToggleButton).toHaveClass("navToggleButton");
      const nav = renderResult.getByRole("navigation");
      expect(nav).toHaveClass("headerNavTop");

      userEvent.click(navToggleButton);
      renderResult.rerender(<Header />);

      expect(nav).toHaveClass("headerNavTopOpen");
      expect(navToggleButton).toHaveClass("navToggleButtonOpen");

      userEvent.click(navToggleButton);
      renderResult.rerender(<Header />);

      expect(navToggleButton).toHaveClass("navToggleButton");
      expect(nav).toHaveClass("headerNavTop");
    });
  });
});
