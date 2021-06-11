import HeaderLinkItem from "src/components/header/HeaderLinkItem";
import type { RenderResult } from "test/test-utils";
import { reTestCase } from "test/test-utils";
import { render } from "test/test-utils";

describe("HeaderLinkItem", () => {
  let renderResult: RenderResult;

  describe("with icon", () => {
    const icon = {
      src: "img.png",
      alt: "alt",
    };
    const item = {
      label: "label",
      href: "href",
      icon: icon,
    };
    beforeEach(() => {
      renderResult = render(<HeaderLinkItem item={item} />);
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      const anchorElement = renderResult.getByRole("link");
      expect(anchorElement).toHaveAttribute("href", reTestCase.anyWord);
      expect(anchorElement).toHaveTextContent("label");

      const imgElement = renderResult.getByRole("img");
      expect(imgElement).toHaveAttribute("alt", reTestCase.anyWord);
      expect(imgElement).toHaveAttribute("src", reTestCase.anyImage);
    });
  });

  describe("no icon", () => {
    const item = {
      label: "label",
      href: "href",
    };
    beforeEach(() => {
      renderResult = render(<HeaderLinkItem item={item} />);
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      const imgElement = renderResult.queryByRole("img");
      expect(imgElement).toBeNull();
    });
  });
});
