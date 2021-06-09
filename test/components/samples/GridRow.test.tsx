import { render } from "@testing-library/react";
import { GridRowLink, GridRowList, GridRowParagraph } from "src/components/samples/GridRow";

describe("GridRow", () => {
  describe("GridRowLink", () => {
    it("matches snapshot", () => {
      const { asFragment } = render(
        <GridRowLink header="header" data={{ href: "href", label: "label", description: "description" }} />
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      const { getByText, container, getByRole } = render(
        <GridRowLink header="header" data={{ href: "href", label: "label", description: "description" }} />
      );
      const headerElement = getByRole("heading", { level: 3 });
      expect(headerElement).toHaveTextContent("header");
      const descriptionElement = getByText("description");
      expect(descriptionElement).toBeInTheDocument;

      const svgElement = container.getElementsByTagName("svg");
      expect(svgElement).toBeInTheDocument;
    });
  });

  describe("GridRowList", () => {
    it("matches snapshot", () => {
      const { asFragment } = render(<GridRowList header="header" data={["data-1", "data-2", "data-3"]} />);
      expect(asFragment()).toMatchSnapshot();
    });
    it("rendered correctly", () => {
      const { getAllByRole, getByRole } = render(<GridRowList header="header" data={["data-1", "data-2", "data-3"]} />);
      const headerElement = getByRole("heading", { level: 3 });
      expect(headerElement).toHaveTextContent("header");
      const listElements = getAllByRole("listitem");
      expect(listElements).toHaveLength(3);
      expect(listElements[0]).toHaveTextContent(/data/);
    });
  });

  describe("GridRowParagraph", () => {
    it("matches snapshot", () => {
      const { asFragment } = render(<GridRowParagraph header="header" data="data" />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
  it("rendered correctly", () => {
    const { container, getByRole } = render(<GridRowParagraph header="header" data="data" />);
    const headerElement = getByRole("heading", { level: 3 });
    expect(headerElement).toHaveTextContent("header");
    expect(container).toHaveTextContent("data");
  });
});
