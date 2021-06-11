import { Footer } from "src/components/footer/Footer";
import type { RenderResult } from "test/test-utils";
import { reTestCase } from "test/test-utils";
import { render, setupWindow } from "test/test-utils";

describe("Footer", () => {
  let renderResult: RenderResult;
  setupWindow();

  beforeEach(() => {
    renderResult = render(<Footer />);
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    const imgElement = renderResult.getByRole("img");
    expect(imgElement).toHaveAttribute("alt", reTestCase.anyWord);
    expect(imgElement).toHaveAttribute("src", reTestCase.anyImage);
  });
});
