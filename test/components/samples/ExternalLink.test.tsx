import { render } from "@testing-library/react";
import ExternalLink from "src/components/samples/ExternalLink";

describe("ExternalLink", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ExternalLink label="test" url="test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    const { container, getByRole } = render(<ExternalLink label="test" url="test" />);

    const anchorElement = getByRole("link");
    expect(anchorElement).toHaveAttribute("href", expect.stringContaining("test"));
    expect(anchorElement).toHaveAttribute("target", "_blank");
    expect(anchorElement).toHaveAttribute("rel", "noreferrer");

    expect(container).toHaveTextContent("test");
  });
});
