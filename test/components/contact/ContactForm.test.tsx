import { waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import ContactFormContainer from "src/components/contact/ContactFormContainer";
import { fireEvent, render, screen } from "test/test-utils";

describe("ContactFormContainer", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ContactFormContainer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("first-rendered correctly", () => {
    render(<ContactFormContainer />);
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();

    const nameInput = screen.getByLabelText("お名前 *");
    expect(nameInput).toHaveAttribute("name", "name");
    expect(nameInput).toHaveAttribute("type", "text");
    expect(nameInput).toHaveAttribute("placeholder", "熊猫 鮫");

    const emailInput = screen.getByLabelText("メールアドレス *");
    expect(emailInput).toHaveAttribute("name", "email");
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("placeholder", "your@example.com");

    const categorySelect = screen.getByLabelText("お問い合わせ種別");
    expect(categorySelect).toHaveAttribute("name", "category");
    expect(categorySelect.children).toHaveLength(5);
    expect(categorySelect.children[0]).toHaveTextContent("");
    expect(categorySelect.children[0]).toHaveAttribute("value", "");
    expect(categorySelect.children[1]).toHaveTextContent("Webサイト制作について");
    expect(categorySelect.children[1]).toHaveAttribute("value", "Webサイト制作について");
    expect(categorySelect.children[2]).toHaveTextContent("Webアプリ開発について");
    expect(categorySelect.children[2]).toHaveAttribute("value", "Webアプリ開発について");
    expect(categorySelect.children[3]).toHaveTextContent("Webサイト模写について");
    expect(categorySelect.children[3]).toHaveAttribute("value", "Webサイト模写について");
    expect(categorySelect.children[4]).toHaveTextContent("その他");
    expect(categorySelect.children[4]).toHaveAttribute("value", "その他");

    const descriptionInput = screen.getByLabelText("お問い合わせ内容 *");
    expect(descriptionInput).toHaveAttribute("name", "description");
    expect(descriptionInput).toHaveAttribute("rows", "10");

    const submitButton = screen.getByRole("button");
    expect(submitButton).toHaveTextContent("内容を確認する");
    expect(submitButton).toHaveAttribute("type", "submit");
    expect(submitButton).toBeDisabled();
  });

  describe("user interaction", () => {
    let nameInput: HTMLElement;
    let emailInput: HTMLElement;
    let descriptionInput: HTMLElement;
    let submitButton: HTMLElement;
    beforeEach(() => {
      render(<ContactFormContainer />);
      nameInput = screen.getByRole("textbox", { name: "お名前 *" });
      emailInput = screen.getByRole("textbox", { name: "メールアドレス *" });
      descriptionInput = screen.getByRole("textbox", { name: "お問い合わせ内容 *" });
      submitButton = screen.getByRole("button");
    });

    it("should display required error when value is invalid", async () => {
      userEvent.click(nameInput);
      expect(nameInput).toHaveFocus();
      userEvent.click(emailInput);
      expect(emailInput).toHaveFocus();
      userEvent.click(descriptionInput);
      expect(descriptionInput).toHaveFocus();
      fireEvent.blur(descriptionInput);

      expect(await screen.findByText("お名前が未入力です。")).toBeInTheDocument();
      expect(await screen.findByText("メールアドレスの形式に誤りがあります。")).toBeInTheDocument();
      expect(await screen.findByText("お問い合わせ内容が未入力です。")).toBeInTheDocument();
      expect(submitButton).toBeDisabled();
    });

    it("should display matching error when email is invalid", async () => {
      userEvent.type(emailInput, "email");
      fireEvent.blur(emailInput);

      expect(emailInput).toHaveValue("email");
      expect(await screen.findByText("メールアドレスの形式に誤りがあります。")).toBeInTheDocument();
    });

    it("should not display error when value is valid", async () => {
      userEvent.type(nameInput, "name");
      userEvent.type(emailInput, "email@test.com");
      userEvent.type(descriptionInput, "description");
      fireEvent.blur(descriptionInput);

      expect(await screen.queryByText("お名前が未入力です。")).not.toBeInTheDocument();
      expect(await screen.queryByText("メールアドレスの形式に誤りがあります。")).not.toBeInTheDocument();
      expect(await screen.queryByText("お問い合わせ内容が未入力です。")).not.toBeInTheDocument();

      expect(nameInput).toHaveValue("name");
      expect(emailInput).toHaveValue("email@test.com");
      expect(descriptionInput).toHaveValue("description");
      await waitFor(() => {
        expect(submitButton).toBeEnabled();
      });
    });

    it("should not display error when value change from invalid to valid", async () => {
      userEvent.click(nameInput);
      expect(nameInput).toHaveFocus();
      userEvent.click(emailInput);
      expect(emailInput).toHaveFocus();
      userEvent.click(descriptionInput);
      expect(descriptionInput).toHaveFocus();
      fireEvent.blur(descriptionInput);

      expect(await screen.findByText("お名前が未入力です。")).toBeInTheDocument();
      expect(await screen.findByText("メールアドレスの形式に誤りがあります。")).toBeInTheDocument();
      expect(await screen.findByText("お問い合わせ内容が未入力です。")).toBeInTheDocument();
      expect(submitButton).toBeDisabled();

      userEvent.type(nameInput, "name");
      userEvent.type(emailInput, "email@test.com");
      userEvent.type(descriptionInput, "description");
      fireEvent.blur(descriptionInput);

      expect(await screen.findByText("お名前が未入力です。")).not.toBeInTheDocument();
      expect(await screen.queryByText("メールアドレスの形式に誤りがあります。")).not.toBeInTheDocument();
      expect(await screen.queryByText("お問い合わせ内容が未入力です。")).not.toBeInTheDocument();

      expect(nameInput).toHaveValue("name");
      expect(emailInput).toHaveValue("email@test.com");
      expect(descriptionInput).toHaveValue("description");
      await waitFor(() => {
        expect(submitButton).toBeEnabled();
      });
    });
  });
});
