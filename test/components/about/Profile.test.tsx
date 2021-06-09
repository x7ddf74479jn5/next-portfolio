import { render } from "@testing-library/react";
import Profile from "src/components/about/Profile";
import { reTestCase } from "test/test-utils";

describe("Profile", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Profile />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    const { container, getByRole } = render(<Profile />);

    const headerElement = getByRole("heading", { level: 2 });
    expect(headerElement).toHaveTextContent("Profile");

    const imgElement = getByRole("img");
    expect(imgElement).toHaveAttribute("src", reTestCase.anyImage);
    expect(imgElement).toHaveAttribute("alt", reTestCase.anyWord);

    const sectionElement = container.firstElementChild;
    expect(sectionElement).toHaveClass("bgPrimary");
    expect(sectionElement).toHaveAttribute("id", "profile");
  });
});
