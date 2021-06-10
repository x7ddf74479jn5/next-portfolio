import type { RenderResult } from "@testing-library/react";
import Foot from "src/components/footer/Foot";
import { render, setupWindow } from "test/test-utils";

describe("Foot", () => {
  let renderResult: RenderResult;
  setupWindow();
  const footItems = [
    {
      id: "item 1",
      href: "item 1",
      label: "item 1",
    },
    {
      id: "item 2",
      href: "item 2",
      label: "item 2",
    },
    {
      id: "item 3",
      href: "item 3",
      label: "item 3",
    },
  ];

  beforeEach(() => {
    renderResult = render(<Foot footItems={footItems} />);
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    expect(renderResult.getByRole("list").children).toHaveLength(3);
    const listElement = renderResult.getAllByRole("listitem")[0];
    expect(listElement).toHaveTextContent("item 1");
    const anchorElement = renderResult.getAllByRole("link")[0];
    expect(anchorElement).toHaveAttribute("href", expect.stringMatching("item"));
  });
});
