import { cleanup, fireEvent, render } from "@testing-library/react";
import PrimaryButton from "src/components/common/PrimaryButton";

beforeEach(cleanup);

describe("PrimaryButton", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<PrimaryButton />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  it("onClick", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <PrimaryButton
        onClick={() => {
          return handleClick();
        }}
      >
        hoge
      </PrimaryButton>
    );
    fireEvent.click(getByText("hoge"));
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
        hoge
      </PrimaryButton>
    );
    expect(getByText("hoge")).toBeDisabled;
    fireEvent.click(getByText("hoge"));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
