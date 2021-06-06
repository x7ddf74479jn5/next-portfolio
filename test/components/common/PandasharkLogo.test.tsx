import { render } from "@testing-library/react";
import PandasharkLogo from "src/components/common/PandasharkLogo";

describe("PandasharkLogo", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<PandasharkLogo width={128} height={64} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  it("Next Link component compiles is transformed the anchor element with appropriate href", () => {
    const { container } = render(<PandasharkLogo width={128} height={64} />, {});
    expect(container.firstChild).toHaveAttribute("href", "/");
  });
});
