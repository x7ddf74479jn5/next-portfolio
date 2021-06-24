import Chat from "src/components/chatbot/Chat";
import type { RenderResult } from "test/test-utils";
import { reTestCase } from "test/test-utils";
import { render } from "test/test-utils";

describe("Chat", () => {
  let renderResult: RenderResult;

  describe("question", () => {
    beforeEach(() => {
      renderResult = render(<Chat text="text" type="question" />);
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      expect(renderResult.getByRole("listitem")).toBeInTheDocument();
      expect(renderResult.getByRole("listitem")).toHaveClass("chatRow");
      expect(renderResult.getByText("text")).toHaveClass("chatBubble");
      expect(renderResult.getByRole("img")).toHaveAttribute("src", reTestCase.anyImage);
      expect(renderResult.getByRole("img")).toHaveAttribute("alt", "icon");
    });
  });

  describe("answer", () => {
    beforeEach(() => {
      renderResult = render(<Chat text="text" type="answer" />);
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      expect(renderResult.getByRole("listitem")).toBeInTheDocument();
      expect(renderResult.getByRole("listitem")).toHaveClass("chatReverse");
      expect(renderResult.getByText("text")).toHaveClass("chatBubble");
      expect(renderResult.getByRole("img")).toHaveAttribute("src", reTestCase.anyImage);
      expect(renderResult.getByRole("img")).toHaveAttribute("alt", "icon");
    });
  });
});
