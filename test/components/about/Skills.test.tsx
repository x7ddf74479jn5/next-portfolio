import { render } from "@testing-library/react";
import Skills from "src/components/about/Skills";

describe("Skills", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Skills />);
    expect(asFragment()).toMatchSnapshot();
  });
});
