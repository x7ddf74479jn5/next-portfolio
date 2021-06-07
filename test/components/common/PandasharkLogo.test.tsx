import { render } from "@testing-library/react";
import PandasharkLogo from "src/components/common/PandasharkLogo";

jest.mock("next/image", () => {
  const Image = ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }): JSX.Element => {
    return <img src={src} alt={alt} width={width} height={height} />;
  };
  return Image;
});

describe("PandasharkLogo", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<PandasharkLogo width={128} height={64} />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it("Next Link component compiles is transformed the anchor element with appropriate href", () => {
    const { container } = render(<PandasharkLogo width={128} height={64} />, {});
    const targetElement = container.getElementsByTagName("a")[0];
    expect(targetElement).toHaveAttribute("href", "/");
  });

  it("has alt", () => {
    const { container } = render(<PandasharkLogo width={128} height={64} />, {});
    const targetElement = container.getElementsByTagName("img")[0];
    expect(targetElement).toHaveAttribute("alt", expect.stringContaining("Pandashark"));
  });
});
