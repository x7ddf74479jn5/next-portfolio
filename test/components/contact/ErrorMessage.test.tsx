import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import ErrorMessage from "src/components/contact/ErrorMessage";

describe("ErrorMessage", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<ErrorMessage>test</ErrorMessage>);
  });
  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    expect(renderResult.container).toHaveTextContent("test");
  });
});
