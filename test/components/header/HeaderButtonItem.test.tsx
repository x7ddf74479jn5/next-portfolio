import userEvent from "@testing-library/user-event";
import HeaderButtonItem from "src/components/header/HeaderButtonItem";
import type { RenderResult } from "test/test-utils";
import { reTestCase } from "test/test-utils";
import { render } from "test/test-utils";

describe("HeaderButtonItem", () => {
  let renderResult: RenderResult;
  let mockHandleClick: jest.Mock<any, any>;
  const icon = {
    path: "img.png",
    alt: "alt",
  };

  beforeEach(() => {
    mockHandleClick = jest.fn();
    renderResult = render(<HeaderButtonItem icon={icon} label="label" onClick={mockHandleClick} />);
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    expect(renderResult.getByRole("button")).toBeInTheDocument();
    expect(renderResult.getByText("label")).toBeInTheDocument();
    const imgElement = renderResult.getByRole("img");
    expect(imgElement).toHaveAttribute("alt", reTestCase.anyWord);
    expect(imgElement).toHaveAttribute("src", reTestCase.anyImage);
  });

  it("user Interaction", () => {
    userEvent.click(renderResult.getByRole("button"));
    expect(mockHandleClick).toBeCalled();
  });
});
