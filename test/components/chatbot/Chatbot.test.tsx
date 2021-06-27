import Chatbot from "src/components/chatbot/Chatbot2";
import type { RenderResult } from "test/test-utils";
import { render } from "test/test-utils";

describe("Chatbot", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Chatbot />);
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
