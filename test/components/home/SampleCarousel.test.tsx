import SampleCarousel from "src/components/home/SampleCarousel";
import type { RenderResult } from "test/test-utils";
import { reTestCase } from "test/test-utils";
import { render } from "test/test-utils";

import type { Sample } from "../../../src/contents/samples";

jest.mock("next/image", () => {
  const Image = ({ src, alt }: { src: string; alt: string }): JSX.Element => {
    return <img src={src} alt={alt} />;
  };
  return Image;
});

describe("SampleCarousel", () => {
  let renderResult: RenderResult;
  const sample: Sample[] = [
    {
      id: "id",
      imgSrc: "src.png",
      imgAlt: "alt",
      category: "category",
      link: "link",
      title: "title",
      description: "description",
    },
  ];

  beforeEach(() => {
    renderResult = render(<SampleCarousel samples={sample} />);
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    // duplicate + original + duplicate
    const articleElements = renderResult.getAllByRole("article");
    expect(articleElements).toHaveLength(3);

    const anchorElements = renderResult.getAllByRole("link");
    expect(anchorElements[0]).toHaveAttribute("href", reTestCase.anyWord);

    const headingElements = renderResult.getAllByRole("heading");
    expect(headingElements[0]).toHaveTextContent("title");

    const imgElements = renderResult.getAllByRole("img");
    expect(imgElements[0]).toHaveAttribute("src", reTestCase.anyImage);
    expect(imgElements[0]).toHaveAttribute("alt", reTestCase.anyWord);
  });
});
