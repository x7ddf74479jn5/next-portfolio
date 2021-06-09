import { render } from "@testing-library/react";
import SampleCard from "src/components/samples/SampleCard";
import { reTestCase } from "test/test-utils";

describe("SampleCard", () => {
  const testData = {
    id: "id",
    title: "title",
    category: "category",
    description: "description",
    link: "link",
    imgSrc: "/",
    imgAlt: "alt",
  };

  it("matches snapshot", () => {
    const { asFragment } = render(<SampleCard sample={testData} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    const { container, getByRole } = render(<SampleCard sample={testData} />);
    const headerElement = getByRole("heading", { level: 3 });
    expect(headerElement).toHaveTextContent("title");

    const svgElement = container.getElementsByTagName("svg");
    expect(svgElement).toBeInTheDocument;

    const anchorElement = getByRole("link");
    expect(anchorElement).toHaveAttribute("href", reTestCase.anyWord);

    const imgElement = getByRole("img");
    expect(imgElement).toHaveAttribute("src", reTestCase.anyImage);
    expect(imgElement).toHaveAttribute("alt", reTestCase.anyWord);
  });
});
