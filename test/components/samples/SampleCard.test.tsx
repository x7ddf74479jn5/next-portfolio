import { render } from "@testing-library/react";
import SampleCard from "src/components/samples/SampleCard";

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
});
