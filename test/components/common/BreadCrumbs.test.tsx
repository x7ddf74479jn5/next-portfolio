import Breadcrumbs from "src/components/common/BreadCrumbs";
import { render, withMockedRouter } from "test/test-utils";

describe("BreadCrumbs", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      withMockedRouter({ pathname: "/samples/portfolio", asPath: "/samples/portfolio" }, <Breadcrumbs />)
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    const { getByText, getByRole } = render(
      withMockedRouter({ pathname: "/samples/portfolio", asPath: "/samples/portfolio" }, <Breadcrumbs />)
    );

    const listElement = getByRole("list");
    expect(listElement.childElementCount).toBeGreaterThan(0);
    expect(listElement).toHaveAttribute("aria-label");

    const lastSpanElement = getByText("PORTFOLIO");
    expect(lastSpanElement).toHaveAttribute("aria-current");

    const anchorElement = getByText("SAMPLES");
    expect(anchorElement).toHaveAttribute("href", "/samples");
  });
});
