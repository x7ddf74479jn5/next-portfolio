import { Layout } from "src/components/layouts/Layout";
import { customRender, setupWindow } from "test/test-utils";

describe("Layout", () => {
  beforeAll(() => {
    setupWindow();
  });
  it("matches snapshot", () => {
    const { asFragment } = customRender(<Layout />);
    expect(asFragment()).toMatchSnapshot();
  });
});
