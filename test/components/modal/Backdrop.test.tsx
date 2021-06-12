import Backdrop from "src/components/modal/Backdrop";
import type { RenderResult } from "test/test-utils";
import { render } from "test/test-utils";

describe("Backdrop", () => {
  let renderResult: RenderResult;

  describe("default", () => {
    beforeEach(() => {
      renderResult = render(<Backdrop />);
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      expect(renderResult.container.firstElementChild).toHaveClass("backdrop");
    });
  });

  describe("opacity 10", () => {
    beforeEach(() => {
      renderResult = render(<Backdrop opacity={10} />);
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      expect(renderResult.container.firstElementChild).toHaveClass("backdrop");
    });
  });

  describe("opacity 10", () => {
    beforeEach(() => {
      renderResult = render(<Backdrop opacity={70} />);
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      expect(renderResult.container.firstElementChild).toHaveClass("backdrop_70");
    });
  });
});
