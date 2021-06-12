import ServiceItem from "src/components/projects/ServiceItem";
import type { RenderResult } from "test/test-utils";
import { reTestCase } from "test/test-utils";
import { render } from "test/test-utils";

import type { Service } from "../../../src/contents/services";

describe("ServiceItem", () => {
  let renderResult: RenderResult;

  const service: Service = {
    title: "title",
    caption: "caption",
    img: {
      src: "src.png",
      alt: "alt",
    },
    description: "description",
  };

  it("matches snapshot", () => {
    renderResult = render(<ServiceItem animation="slideInLeft" service={service} />);
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    renderResult = render(<ServiceItem animation="slideInLeft" service={service} />);

    expect(renderResult.getByRole("heading")).toHaveTextContent("title");

    expect(renderResult.getByRole("img")).toHaveAttribute("src", reTestCase.anyImage);
    expect(renderResult.getByRole("img")).toHaveAttribute("src", reTestCase.anyWord);
  });
});
