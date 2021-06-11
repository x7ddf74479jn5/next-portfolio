import FirstView from "src/components/home/FirstView";
import type { RenderResult } from "test/test-utils";
import { reTestCase } from "test/test-utils";
import { render } from "test/test-utils";

describe("FirstView", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<FirstView />);
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    expect(renderResult.getByRole("img")).toHaveAttribute("src", reTestCase.anyWord);
    expect(renderResult.getByRole("img")).toHaveAttribute("alt", reTestCase.anyWord);

    expect(renderResult.getByRole("heading")).toHaveTextContent("Pandashark");

    expect(renderResult.getByRole("button")).toHaveTextContent("Contact");
    expect(renderResult.getByRole("button")).toHaveAttribute("href", expect.stringMatching("contact"));
  });
});
