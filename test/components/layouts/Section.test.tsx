import { WrapInSection } from "src/components/layouts/Section";
import type { RenderResult } from "test/test-utils";
import { render } from "test/test-utils";

describe("Section", () => {
  let renderResult: RenderResult;

  describe("primary", () => {
    beforeEach(() => {
      renderResult = render(<WrapInSection background="primary">children</WrapInSection>);
    });
    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      expect(renderResult.container.getElementsByTagName("section")[0]).toHaveClass("section bgPrimary");
    });
  });

  describe("secondary", () => {
    beforeEach(() => {
      renderResult = render(<WrapInSection background="secondary">children</WrapInSection>);
    });
    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      expect(renderResult.container.getElementsByTagName("section")[0]).toHaveClass("section bgSecondary");
    });
  });

  describe("section bgPrimary", () => {
    beforeEach(() => {
      renderResult = render(<WrapInSection background="light">children</WrapInSection>);
    });
    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      expect(renderResult.container.getElementsByTagName("section")[0]).toHaveClass("section bgLight");
    });
  });

  describe("wide and primary", () => {
    beforeEach(() => {
      renderResult = render(
        <WrapInSection wide={true} background="primary">
          children
        </WrapInSection>
      );
    });
    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      expect(renderResult.container.getElementsByTagName("div")[0]).toHaveClass("sectionWrapInWide");
    });
  });
});
