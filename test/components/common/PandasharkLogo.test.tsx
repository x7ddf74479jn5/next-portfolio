import { render } from "@testing-library/react";
import PandasharkLogo from "src/components/common/PandasharkLogo";

describe("PandasharkLogo", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<PandasharkLogo width={128} height={64} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  // it("clicking button triggers alert", () => {
  //   const { getByText } = render(<PandasharkLogo width={128} height={64} />, {});
  //   window.alert = jest.fn();
  //   fireEvent.click(getByText("Button"));
  //   expect(window.alert).toHaveBeenCalledWith("Hello, World!");
  // });
});
