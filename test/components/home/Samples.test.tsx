import Samples from "src/components/home/Samples";
import type { RenderResult } from "test/test-utils";
import { render } from "test/test-utils";

describe("Samples", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Samples />);
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    expect(renderResult.getByRole("heading", { level: 2 })).toHaveTextContent("Samples");
    expect(renderResult.getByRole("separator")).toBeInTheDocument();
    expect(renderResult.getByRole("button")).toHaveTextContent("全ての事例を見る");
    expect(renderResult.getByRole("button")).toHaveAttribute("href", expect.stringMatching("samples"));
  });
});
