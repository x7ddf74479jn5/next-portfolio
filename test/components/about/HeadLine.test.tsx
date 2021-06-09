import { render } from "@testing-library/react";
import HeadLine from "src/components/about/HeadLine";

describe("HeadLine", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<HeadLine>test</HeadLine>);
    expect(asFragment()).toMatchSnapshot();
  });
  it("rendered correctly", () => {
    const { getByRole } = render(<HeadLine>test</HeadLine>);
    const targetElement = getByRole("heading", { level: 2 });
    expect(targetElement).toHaveTextContent("test");
  });
});
