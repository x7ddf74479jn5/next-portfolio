import Breadcrumbs from "src/components/common/BreadCrumbs";
import { render, withMockedRouter } from "test/test-utils";

describe("BreadCrumbs", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      withMockedRouter({ pathname: "/samples/portfolio", asPath: "/samples/portfolio" }, <Breadcrumbs />)
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("ally", () => {
    const { container, getByText } = render(
      withMockedRouter({ pathname: "/samples/portfolio", asPath: "/samples/portfolio" }, <Breadcrumbs />)
    );
    const listNode = container.firstElementChild;
    const lastSpanNode = getByText("PORTFOLIO");

    expect(listNode).toHaveAttribute("aria-label");
    expect(lastSpanNode).toHaveAttribute("aria-current");
  });

  it("anchor list item", () => {
    const { getByText } = render(
      withMockedRouter({ pathname: "/samples/portfolio", asPath: "/samples/portfolio" }, <Breadcrumbs />)
    );
    const targetNode = getByText("SAMPLES");

    expect(targetNode).toHaveAttribute("href", "/samples");
  });
});
