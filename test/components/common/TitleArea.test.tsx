import { TitleArea } from "src/components/common/TitleArea";
import { render, withMockedRouter } from "test/test-utils";

describe("TitleArea", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      withMockedRouter(
        { pathname: "/samples/portfolio", asPath: "/samples/portfolio" },
        <TitleArea title="PORTFOLIO" caption="ポートフォリオ" />
      )
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("shows title and caption", () => {
    const { container } = render(
      withMockedRouter(
        { pathname: "/samples/portfolio", asPath: "/samples/portfolio" },
        <TitleArea title="PORTFOLIO" caption="ポートフォリオ" />
      )
    );
    expect(container).toHaveTextContent("PORTFOLIO");
    expect(container).toHaveTextContent("ポートフォリオ");
  });
});
