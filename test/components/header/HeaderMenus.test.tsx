import { HeaderMenus } from "src/components/header/HeaderMenus";
import type { RenderResult } from "test/test-utils";
import { render } from "test/test-utils";

describe("HeaderMenus", () => {
  let renderResult: RenderResult;
  let mockHandleClick: jest.Mock<any, any>;

  describe("closed", () => {
    beforeEach(() => {
      mockHandleClick = jest.fn();
      renderResult = render(<HeaderMenus isOpen={false} closeNav={mockHandleClick} />);
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      const navElement = renderResult.getByRole("navigation");
      expect(navElement).toHaveClass("headerNavTop");

      const headingElement = renderResult.getByRole("heading");
      expect(headingElement).toHaveClass("productLogo");
    });
  });

  describe("open", () => {
    beforeEach(() => {
      mockHandleClick = jest.fn();
      renderResult = render(<HeaderMenus isOpen={true} closeNav={mockHandleClick} />);
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      const navElement = renderResult.getByRole("navigation");
      expect(navElement).toHaveClass("headerNavTopOpen");

      const headingElement = renderResult.getByRole("heading");
      expect(headingElement).toHaveClass("productLogoOpen");

      expect(headingElement.getElementsByTagName("img")[0]).toBeInTheDocument();
    });
  });
});
