import { render } from "@testing-library/react";
import { NextArrowButton } from "src/components/common/NextArrowButton";

describe("NextArrowButton", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<NextArrowButton href="/" />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  it("Next Link component compiles is transformed the anchor element with appropriate href", () => {
    const { container } = render(<NextArrowButton href="/" />, {});
    expect(container.firstChild).toHaveAttribute("href", "/");
  });
});
