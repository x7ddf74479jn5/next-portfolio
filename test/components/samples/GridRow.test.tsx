import { render } from "@testing-library/react";
import { GridRowLink, GridRowList, GridRowParagraph } from "src/components/samples/GridRow";

describe("GridRow", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <GridRowLink header="test" data={{ href: "test", label: "test", description: "test" }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("matches snapshot", () => {
    const { asFragment } = render(<GridRowList header="test" data={["test"]} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("matches snapshot", () => {
    const { asFragment } = render(<GridRowParagraph header="test" data="test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
