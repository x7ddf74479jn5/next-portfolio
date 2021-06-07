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
    const listElement = container.getElementsByClassName("textBreadcrumbs")[0];
    const lastSpanElement = getByText("PORTFOLIO");

    expect(listElement).toHaveAttribute("aria-label");
    expect(lastSpanElement).toHaveAttribute("aria-current");
  });

  it("anchor list item", () => {
    const { getByText } = render(
      withMockedRouter({ pathname: "/samples/portfolio", asPath: "/samples/portfolio" }, <Breadcrumbs />)
    );
    const targetElement = getByText("SAMPLES");

    expect(targetElement).toHaveAttribute("href", "/samples");
  });
});
