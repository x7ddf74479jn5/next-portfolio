import { render } from "@testing-library/react";
import HeadLine from "src/components/about/HeadLine";

describe("HeadLine", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<HeadLine />);
    expect(asFragment()).toMatchSnapshot();
  });
});
