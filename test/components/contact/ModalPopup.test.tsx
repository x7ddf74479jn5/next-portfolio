import type { RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalPopup from "src/components/contact/ModalPopup";
import { render } from "test/test-utils";

describe("ModalPopup", () => {
  let renderResult: RenderResult;
  let mockHandleApply = jest.fn();
  let mockHandleCancel = jest.fn();

  const formData = {
    name: "name",
    email: "email@example.com",
    category: "category",
    description: "description",
  };

  it("matches snapshot", () => {
    renderResult = render(
      <ModalPopup formData={formData} cancel={mockHandleCancel} apply={mockHandleApply} isApplyButtonDisabled={false} />
    );
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("matches snapshot", () => {
    renderResult = render(
      <ModalPopup formData={formData} cancel={mockHandleCancel} apply={mockHandleApply} isApplyButtonDisabled={true} />
    );
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    renderResult = render(
      <ModalPopup formData={formData} cancel={mockHandleCancel} apply={mockHandleApply} isApplyButtonDisabled={false} />
    );
    expect(renderResult.getByRole("heading")).toHaveTextContent("入力内容の確認");

    const containerNode = renderResult.container.querySelector("#mail-content");

    expect(containerNode).toHaveTextContent("お名前");
    expect(containerNode).toHaveTextContent("name");
    expect(containerNode).toHaveTextContent("メールアドレス");
    expect(containerNode).toHaveTextContent("email");
    expect(containerNode).toHaveTextContent("お問い合わせ種別");
    expect(containerNode).toHaveTextContent("category");
    expect(containerNode).toHaveTextContent("お問い合わせ内容");
    expect(containerNode).toHaveTextContent("description");

    const buttonElements = renderResult.getAllByRole("button");
    const cancelButton = buttonElements[0];
    const applyButton = buttonElements[1];
    const modalCloseButton = buttonElements[2];

    expect(buttonElements).toHaveLength(3);

    expect(cancelButton).toHaveAttribute("id", "cancel-btn");
    expect(cancelButton).toBeEnabled();
    expect(cancelButton).toHaveTextContent("修正する");

    expect(applyButton).toHaveAttribute("id", "apply-btn");
    expect(applyButton).toBeEnabled();
    expect(applyButton).toHaveTextContent("送信する");

    expect(modalCloseButton).toBeEnabled();
  });

  describe("user interaction", () => {
    let buttonElements: HTMLElement[];
    let cancelButton: HTMLElement;
    let applyButton: HTMLElement;
    describe("if apply button is not disabled", () => {
      beforeEach(() => {
        mockHandleApply = jest.fn();
        mockHandleCancel = jest.fn();
        renderResult = render(
          <ModalPopup
            formData={formData}
            cancel={mockHandleCancel}
            apply={mockHandleApply}
            isApplyButtonDisabled={false}
          />
        );

        buttonElements = renderResult.getAllByRole("button");
        cancelButton = buttonElements[0];
        applyButton = buttonElements[1];
      });

      it("should  apply if not disabled", () => {
        userEvent.click(applyButton);
        expect(mockHandleApply).toBeCalledWith(formData);
      });

      it("closes modal via cancel button", () => {
        userEvent.click(cancelButton);
        expect(mockHandleCancel).toBeCalled();
      });
    });

    it("if apply button is disabled", () => {
      renderResult = render(
        <ModalPopup
          formData={formData}
          cancel={mockHandleCancel}
          apply={mockHandleApply}
          isApplyButtonDisabled={true}
        />
      );

      buttonElements = renderResult.getAllByRole("button");
      cancelButton = buttonElements[0];
      applyButton = buttonElements[1];

      expect(applyButton).toBeDisabled();

      userEvent.click(applyButton);

      expect(mockHandleApply).not.toHaveBeenCalled();
    });
  });
});
