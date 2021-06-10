import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select, TextArea, TextField } from "src/components/contact/FormInputs";
import { reTestCase } from "test/test-utils";

describe("FormInput", () => {
  let renderResult: RenderResult;
  let inputElement: HTMLElement;

  describe("TextField", () => {
    beforeEach(() => {
      renderResult = render(<TextField id="id" name="name" placeholder="placeholder" type="text" />);
      inputElement = renderResult.getByRole("textbox");
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      expect(inputElement).not.toHaveValue(reTestCase.anyWord);
      expect(inputElement).toHaveAttribute("id", "id");
      expect(inputElement).toHaveAttribute("name", "name");
      expect(inputElement).toHaveAttribute("placeholder", "placeholder");
      expect(inputElement).toHaveAttribute("type", "text");
    });

    it("user interaction", () => {
      userEvent.type(inputElement, "test");
      expect(inputElement).toHaveValue("test");
      userEvent.clear(inputElement);
      expect(inputElement).not.toHaveValue(reTestCase.anyWord);
    });
  });

  describe("TextArea", () => {
    beforeEach(() => {
      renderResult = render(<TextArea id="id" name="name" placeholder="placeholder" rows={10} />);
      inputElement = renderResult.getByRole("textbox");
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      expect(inputElement).not.toHaveValue(reTestCase.anyWord);
      expect(inputElement).toHaveAttribute("id", "id");
      expect(inputElement).toHaveAttribute("name", "name");
      expect(inputElement).toHaveAttribute("placeholder", "placeholder");
      expect(inputElement).toHaveAttribute("rows", "10");
    });

    it("user interaction", () => {
      userEvent.type(inputElement, "test");
      expect(inputElement).toHaveValue("test");
      userEvent.clear(inputElement);
      expect(inputElement).not.toHaveValue(reTestCase.anyWord);
    });
  });

  describe("Select", () => {
    const values = ["value 1", "value 2", "value 3"];

    beforeEach(() => {
      renderResult = render(
        <Select id="id" name="name">
          {values.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </Select>
      );
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      const selectElement = renderResult.getByRole("combobox");
      expect(selectElement).toHaveAttribute("id", "id");
      expect(selectElement).toHaveAttribute("name", "name");
      const options = renderResult.getAllByRole("option");
      expect(options).toHaveLength(3);
      expect(options[0]).toHaveTextContent("value 1");
    });

    it("user interaction", () => {
      const selectElement = renderResult.getByRole("combobox");

      userEvent.selectOptions(selectElement, ["value 2"]);

      const option1 = renderResult.getByRole("option", { name: "value 1" }) as HTMLOptionElement;
      const option2 = renderResult.getByRole("option", { name: "value 2" }) as HTMLOptionElement;
      const option3 = renderResult.getByRole("option", { name: "value 3" }) as HTMLOptionElement;
      expect(option1.selected).toBe(false);
      expect(option2.selected).toBe(true);
      expect(option3.selected).toBe(false);
    });
  });
});
