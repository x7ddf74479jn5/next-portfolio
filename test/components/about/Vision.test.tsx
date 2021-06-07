import { render } from "@testing-library/react";
import Vision from "src/components/about/Vision";

describe("Vision", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Vision />);
    expect(asFragment()).toMatchSnapshot();
  });
});
