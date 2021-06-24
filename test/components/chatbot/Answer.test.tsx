import userEvent from "@testing-library/user-event";
import Answer from "src/components/chatbot/Answer";
import type { RenderResult } from "test/test-utils";
import { render } from "test/test-utils";

describe("Answer", () => {
  let renderResult: RenderResult;
  let buttonElement: HTMLElement;
  const mockHandleSelect = jest.fn();
  const mockHandleIsSelectReady = jest.fn().mockReturnValue(true);

  beforeEach(() => {
    renderResult = render(
      <Answer content="content" nextId="nextId" select={mockHandleSelect} isSelectReady={mockHandleIsSelectReady} />
    );
    buttonElement = renderResult.getByRole("button");
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    expect(buttonElement).toHaveTextContent("content");
    expect(buttonElement).toBeEnabled();
  });

  it("user interaction", () => {
    userEvent.click(buttonElement);
    expect(mockHandleIsSelectReady).toHaveBeenCalled();
    expect(mockHandleSelect).toHaveBeenCalled();
  });
});
