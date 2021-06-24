import userEvent from "@testing-library/user-event";
import TextInput from "src/components/chatbot/TextInput";
import type { RenderResult } from "test/test-utils";
import { render } from "test/test-utils";

describe("TextInput", () => {
  let renderResult: RenderResult;
  let inputElement: HTMLElement;
  let labelElement: HTMLElement;
  const mockHandleOnChange = jest.fn().mockReturnValue("typed");

  beforeEach(() => {
    renderResult = render(
      <TextInput id="id" label="label" multiline={false} rows={1} type="text" onChange={mockHandleOnChange} />
    );
    inputElement = renderResult.getByLabelText("label");
    labelElement = renderResult.getByText("label");
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    expect(labelElement).toHaveTextContent("label");
    expect(inputElement).toHaveAttribute("id", "id");
    expect(inputElement).toHaveAttribute("rows", "1");
    expect(inputElement).toHaveAttribute("type", "text");
  });

  it("onChange event", () => {
    userEvent.type(inputElement, "test");
    expect(inputElement).toHaveValue("test");
    expect(mockHandleOnChange).toHaveBeenCalledTimes(4);
    userEvent.clear(inputElement);
    expect(inputElement).not.toHaveValue("test");
  });

  it("focus the input element when clicked the label element", () => {
    userEvent.click(labelElement);
    expect(inputElement).toHaveFocus();
  });
});
