import SampleTemplate from "src/templates/SampleTemplate";
import type { RenderResult } from "test/test-utils";
import { render } from "test/test-utils";

import type { SampleDetail } from "../../src/contents/samples";

jest.mock("next/image", () => {
  const Image = ({ src, alt }: { src: string; alt: string }): JSX.Element => {
    return <img src={src} alt={alt} />;
  };
  return Image;
});

describe("SampleTemplate", () => {
  let renderResult: RenderResult;
  const testData: SampleDetail = {
    id: "id",
    img: "img.png",
    alt: "alt",
    summary: "summary",
    purposes: ["purpose"],
    points: ["points"],
    langs: "langs",
    techs: "techs",
    link: {
      href: "link",
      label: "label",
      description: "description",
    },
    note: "note",
  };
  const titleArea = {
    title: "title",
    caption: "caption",
  };

  beforeEach(() => {
    renderResult = render(<SampleTemplate sample={testData} titleArea={titleArea} />);
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
