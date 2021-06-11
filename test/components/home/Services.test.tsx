import Services from "src/components/home/Services";
import type { RenderResult } from "test/test-utils";
import { render } from "test/test-utils";

describe("Services", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Services />);
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    expect(renderResult.getByRole("heading", { level: 2 })).toHaveTextContent("Services");
    expect(renderResult.getByRole("separator")).toBeInTheDocument();
    expect(renderResult.getByRole("button")).toHaveTextContent("事業内容");
    expect(renderResult.getByRole("button")).toHaveAttribute("href", "/about#skills");
  });
});
