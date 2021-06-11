import userEvent from "@testing-library/user-event";
import { Accordion, FooterMenus } from "src/components/footer/FooterMenus";
import type { RenderResult } from "test/test-utils";
import { render, setupWindow } from "test/test-utils";

describe("FooterMenus", () => {
  let renderResult: RenderResult;
  setupWindow();

  beforeEach(() => {
    renderResult = render(<FooterMenus />);
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    const detailsElement = renderResult.getAllByRole("group");
    expect(detailsElement).toHaveLength(3);
    const summaryElement = renderResult.container.getElementsByTagName("summary");
    expect(summaryElement).toHaveLength(3);
    const listElement = renderResult.getAllByRole("list")[0];
    expect(listElement.children).toHaveLength(3);
  });
});

describe("Accordion", () => {
  let renderResult: RenderResult;
  setupWindow();
  const accordionItem = {
    label: "summary",
    items: [
      {
        label: "label 1",
        href: "href 1",
      },
      {
        label: "label 2",
        href: "href 2",
      },
      {
        label: "label 3",
        href: "href 3",
      },
    ],
  };

  beforeEach(() => {
    renderResult = render(<Accordion accordion={accordionItem} />);
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    const summaryElement = renderResult.getByText("summary");
    expect(summaryElement).toBeInTheDocument();

    const listElement = renderResult.getByRole("list");
    expect(listElement.children).toHaveLength(3);

    const listItemElement = renderResult.getAllByRole("listitem");
    expect(listItemElement[0]).toHaveTextContent("label");

    const anchorElement = renderResult.getAllByRole("link");
    expect(anchorElement).toHaveLength(3);
    expect(anchorElement[0]).toHaveAttribute("href", expect.stringMatching("href"));
  });

  describe("user interaction", () => {
    let detailsElement: HTMLDetailsElement;
    let summaryElement: HTMLElement;

    it("opens when clicked", () => {
      detailsElement = renderResult.getByRole("group") as HTMLDetailsElement;
      summaryElement = renderResult.getByText("summary");

      expect(detailsElement.open).not.toBe(true);
      userEvent.click(summaryElement);
      expect(detailsElement.open).toBe(true);
    });

    it("nextly closes when clicked", () => {
      expect(detailsElement.open).toBe(true);
      userEvent.click(summaryElement);
      expect(detailsElement.open).not.toBe(true);
    });
  });
});
