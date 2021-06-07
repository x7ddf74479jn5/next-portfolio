import { render } from "@testing-library/react";
import Profile from "src/components/about/Profile";

describe("Profile", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Profile />);
    expect(asFragment()).toMatchSnapshot();
  });
});
