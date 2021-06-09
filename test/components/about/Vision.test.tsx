import { render } from "@testing-library/react";
import Vision from "src/components/about/Vision";

describe("Vision", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Vision />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    const { container, getByRole } = render(<Vision />);

    const sectionElement = container.firstElementChild;
    expect(sectionElement).toHaveAttribute("id", "vision");

    const headerElement = getByRole("heading", { level: 2 });
    expect(headerElement).toHaveTextContent("Vision");
  });
});
