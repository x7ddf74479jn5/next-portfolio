import FormModalContainer from "src/components/chatbot/FormModalContainer";
import type { RenderResult } from "test/test-utils";
import { render } from "test/test-utils";

describe("FormModalContainer", () => {
  let renderResult: RenderResult;
  const mockHandleClose = jest.fn();

  beforeEach(() => {
    renderResult = render(<FormModalContainer handleClose={mockHandleClose} />);
  });

  it("matches snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
