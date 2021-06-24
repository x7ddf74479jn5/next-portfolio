import AnswersList from "src/components/chatbot/AnswersList";
import type { Answer } from "src/types/chatbot";
import type { RenderResult } from "test/test-utils";
import { render } from "test/test-utils";

describe("AnswersList", () => {
  let renderResult: RenderResult;
  const mockHandleSelect = jest.fn();
  const mockHandleIsSelectReady = jest.fn().mockReturnValue(true);

  const testData: Answer[] = [
    {
      content: "content",
      nextId: "nextId",
    },
    {
      content: "content 2",
      nextId: "nextId 2",
    },
  ];

  beforeEach(() => {
    renderResult = render(
      <AnswersList answers={testData} select={mockHandleSelect} isSelectReady={mockHandleIsSelectReady} />
    );
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it("rendered correctly", () => {
    expect(renderResult.container.firstElementChild).toHaveClass("gridAnswer");
    expect(renderResult.getAllByRole("button")).toHaveLength(2);
  });
});
