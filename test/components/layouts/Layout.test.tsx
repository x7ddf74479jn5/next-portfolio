import { Layout } from "src/components/layouts/Layout";
import { render, setupWindow } from "test/test-utils";

describe("Layout", () => {
  beforeAll(() => {
    setupWindow();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Layout>children</Layout>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    const { getByRole } = render(<Layout>children</Layout>);
    const targetElement = getByRole("main");
    expect(targetElement).toHaveTextContent("children");
  });
});
