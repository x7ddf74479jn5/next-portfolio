import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NextArrowButton } from "src/components/common/NextArrowButton";

describe("NextArrowButton", () => {
  const buttonLabel = "hoge";

  it("matches snapshot", () => {
    const { asFragment } = render(<NextArrowButton href="/" label={buttonLabel} />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it("has text by label", () => {
    const { container } = render(<NextArrowButton href="/" label={buttonLabel} />, {});
    expect(container).toHaveTextContent(buttonLabel);
  });

  it("has text by children", () => {
    const { container } = render(<NextArrowButton href="/">{buttonLabel}</NextArrowButton>);
    expect(container).toHaveTextContent(buttonLabel);
  });

  it("Next Link component is transformed an anchor element with appropriate href", () => {
    const { getByText } = render(<NextArrowButton href="/" label={buttonLabel} />, {});
    const targetNode = getByText(buttonLabel);
    expect(targetNode).toHaveAttribute("href", "/");
  });

  it("hover", () => {
    const { getByText } = render(<NextArrowButton href="/" label={buttonLabel} onDark />, {});
    const targetNode = getByText(buttonLabel);
    userEvent.hover(targetNode);
    expect(targetNode).toHaveClass("btnRoundOnDark");
  });
});
