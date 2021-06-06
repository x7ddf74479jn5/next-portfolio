import { cleanup, fireEvent, render } from "@testing-library/react";
import PrimaryButton from "src/components/common/PrimaryButton";

afterEach(cleanup);

describe("PrimaryButton", () => {
  const buttonLabel = "hoge";

  it("matches snapshot", () => {
    const { asFragment } = render(<PrimaryButton label={buttonLabel} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("has text by label", () => {
    const { container } = render(<PrimaryButton label={buttonLabel} />, {});
    expect(container).toHaveTextContent(buttonLabel);
  });

  it("has text by children", () => {
    const { container } = render(<PrimaryButton>{buttonLabel}</PrimaryButton>);
    expect(container).toHaveTextContent(buttonLabel);
  });

  it("onClick", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <PrimaryButton
        onClick={() => {
          return handleClick();
        }}
      >
        {buttonLabel}
      </PrimaryButton>
    );
    fireEvent.click(getByText(buttonLabel));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("disabled", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <PrimaryButton
        onClick={() => {
          return handleClick();
        }}
        disabled
      >
        {buttonLabel}
      </PrimaryButton>
    );
    expect(getByText(buttonLabel)).toBeDisabled;
    fireEvent.click(getByText(buttonLabel));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
