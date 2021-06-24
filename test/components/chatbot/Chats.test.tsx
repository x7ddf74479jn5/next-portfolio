import Chats from "src/components/chatbot/Chats";
import type { Chat } from "src/types/chatbot";
import type { RenderResult } from "test/test-utils";
import { render } from "test/test-utils";

describe("Chats", () => {
  let renderResult: RenderResult;
  const data: Chat[] = [
    {
      text: "text",
      type: "question",
    },
    {
      text: "text",
      type: "answer",
    },
  ];

  describe("question", () => {
    beforeEach(() => {
      renderResult = render(<Chats chats={data} />);
    });

    it("matches snapshot", () => {
      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it("rendered correctly", () => {
      expect(renderResult.getByRole("list")).toBeInTheDocument();
      expect(renderResult.getByRole("list")).toHaveAttribute("class", expect.stringContaining("chats"));
      expect(renderResult.getByRole("list")).toHaveAttribute("id", expect.stringContaining("scroll-area"));
      expect(renderResult.getByRole("list").childElementCount).toBe(2);
    });
  });
});
