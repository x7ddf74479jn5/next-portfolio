import userEvent from "@testing-library/user-event";
import FormDialog from "src/components/chatbot/FormDialog";
import type { RenderResult } from "test/test-utils";
import { act, render } from "test/test-utils";

describe("FormDialog", () => {
  let renderResult: RenderResult;
  let nameInput: HTMLElement;
  let emailInput: HTMLElement;
  let descriptionInput: HTMLElement;
  let cancelButton: HTMLElement;
  let submitButton: HTMLElement;
  const mockHandleClose = jest.fn();
  global.fetch = jest.fn().mockResolvedValue("success");
  window.alert = jest.fn();

  beforeEach(() => {
    renderResult = render(<FormDialog handleClose={mockHandleClose} />);
    nameInput = renderResult.getByLabelText(/件名/);
    emailInput = renderResult.getByLabelText(/メールアドレス/);
    descriptionInput = renderResult.getByLabelText(/お問い合わせ内容/);
    cancelButton = renderResult.getAllByRole("button")[0];
    submitButton = renderResult.getAllByRole("button")[1];
    jest.clearAllMocks();
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    expect(renderResult.getByRole("heading")).toHaveTextContent("お問い合わせフォーム");
    expect(renderResult.container.firstElementChild).toHaveClass("formDialog");

    expect(nameInput).toHaveAttribute("id", "name");
    expect(nameInput).toHaveAttribute("rows", "1");
    expect(nameInput).toHaveAttribute("type", "text");
    expect(nameInput).toHaveValue("");

    expect(emailInput).toHaveAttribute("id", "email");
    expect(emailInput).toHaveAttribute("rows", "1");
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveValue("");

    expect(descriptionInput).toHaveAttribute("id", "description");
    expect(descriptionInput).toHaveAttribute("rows", "5");
    expect(descriptionInput).toHaveValue("");

    expect(cancelButton).toHaveTextContent("キャンセル");
    expect(cancelButton).toBeEnabled();
    expect(submitButton).toHaveTextContent("送信する");
    expect(submitButton).toBeEnabled();
  });

  it("should trigger onChange event", () => {
    userEvent.type(nameInput, "test");
    expect(nameInput).toHaveValue("test");
    userEvent.clear(nameInput);
    expect(nameInput).not.toHaveValue("test");
  });

  it("should success to submit with valid values", async () => {
    userEvent.type(nameInput, "name");
    userEvent.type(emailInput, "email@test.com");
    userEvent.type(descriptionInput, "description");
    expect(nameInput).toHaveValue("name");
    expect(emailInput).toHaveValue("email@test.com");
    expect(descriptionInput).toHaveValue("description");

    await act(async () => {
      await userEvent.click(submitButton);
    });
    const url = process.env.SLACK_API_ENDPOINT;
    const option = expect.objectContaining({
      method: "POST",
      body: expect.stringMatching(/.*name.*email@test\.com.*description.*/),
    });
    expect(global.fetch).toBeCalledWith(url, option);
    expect(window.alert).toBeCalledWith(expect.stringContaining("完了"));
    expect(mockHandleClose).toBeCalled();
  });

  it("should fail to submit with missing required values", async () => {
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(descriptionInput).toHaveValue("");

    await act(async () => {
      await userEvent.click(submitButton);
    });
    expect(global.fetch).not.toBeCalled();
    expect(window.alert).toBeCalledWith(expect.stringContaining("必須"));
  });

  it("should fail to submit with an invalid email value", async () => {
    userEvent.type(nameInput, "name");
    userEvent.type(emailInput, "email");
    userEvent.type(descriptionInput, "description");
    expect(nameInput).toHaveValue("name");
    expect(emailInput).toHaveValue("email");
    expect(descriptionInput).toHaveValue("description");

    await act(async () => {
      await userEvent.click(submitButton);
    });

    expect(global.fetch).not.toBeCalled();
    expect(window.alert).toBeCalledWith(expect.stringContaining("メールアドレス"));
  });

  it("should cancel and close the dialog", () => {
    userEvent.click(cancelButton);
    expect(mockHandleClose).toBeCalled();
  });
});
