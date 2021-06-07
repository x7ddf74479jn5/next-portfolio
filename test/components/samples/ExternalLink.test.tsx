import { render } from "@testing-library/react";
import ExternalLink from "src/components/samples/ExternalLink";

describe("ExternalLink", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ExternalLink label="test" url="test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
