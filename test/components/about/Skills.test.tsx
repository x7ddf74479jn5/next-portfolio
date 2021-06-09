import { render } from "@testing-library/react";
import Skills from "src/components/about/Skills";

describe("Skills", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Skills />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    const { container, getByRole } = render(<Skills />);

    const sectionElement = container.firstElementChild;
    expect(sectionElement).toHaveAttribute("id", "skills");

    const headerElement = getByRole("heading", { level: 2 });
    expect(headerElement).toHaveTextContent("Skills");

    const skillList = getByRole("list");
    expect(skillList.childElementCount).toBeGreaterThan(0);
  });
});
