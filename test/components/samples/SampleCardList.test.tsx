import { render, screen } from "@testing-library/react";
import SampleCardList from "src/components/samples/SampleCardList";

describe("SampleCardList", () => {
  const testData = [
    {
      id: "id",
      title: "title",
      category: "category",
      description: "description",
      link: "link",
      imgSrc: "/",
      imgAlt: "alt",
    },
  ];

  it("matches snapshot", () => {
    const { asFragment } = render(<SampleCardList samples={testData} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    render(<SampleCardList samples={testData} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements.length).toBeGreaterThan(0);
  });
});
