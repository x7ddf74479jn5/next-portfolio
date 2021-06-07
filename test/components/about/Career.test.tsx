import { render } from "@testing-library/react";
import Career from "src/components/about/Career";

describe("Career", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Career />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("shows headline and has id", () => {
    const { container } = render(<Career />);
    const targetElement = container.getElementsByClassName("section")[0];
    expect(container).toHaveTextContent("Career");
    expect(targetElement).toHaveAttribute("id", "career");
  });

  it("timeline list has over one item", () => {
    const { container } = render(<Career />);
    const targetElement = container.getElementsByClassName("timeline");
    expect(targetElement.length).toBeGreaterThan(0);
  });
});
