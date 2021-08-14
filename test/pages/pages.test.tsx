import Home from "src/pages/index";
import { render, setupWindow } from "test/test-utils";

jest.mock("next/head", () => {
  return {
    __esModule: true,
    // eslint-disable-next-line react/display-name
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

jest.mock("next/image", () => {
  const Image = ({ src, alt }: { src: string; alt: string }): JSX.Element => {
    return <img src={src} alt={alt} />;
  };
  return Image;
});

describe("Home", () => {
  setupWindow();

  it("metadata check", () => {
    render(<Home />);
    expect(document.title).toMatch(/Home/);
  });
});
