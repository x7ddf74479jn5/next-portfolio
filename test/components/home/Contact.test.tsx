import Contact from "src/components/home/Contact";
import type { RenderResult } from "test/test-utils";
import { render } from "test/test-utils";

describe("Contact", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Contact />);
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    expect(renderResult.getByRole("heading")).toHaveTextContent("お仕事");
    expect(renderResult.getByRole("separator")).toBeInTheDocument();
    expect(renderResult.getByRole("button")).toHaveTextContent("お問い合わせ");
    expect(renderResult.getByRole("button")).toHaveAttribute("href", "/contact/");
  });
});
