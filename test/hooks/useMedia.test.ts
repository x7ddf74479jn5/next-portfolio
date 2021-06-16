import { renderHook } from "@testing-library/react-hooks";

import useMedia from "../../src/hooks/useMedia";

test("evaluates media query", () => {
  window.addEventListener = jest.fn();
  window.removeEventListener = jest.fn();

  window.matchMedia = jest.fn().mockImplementation(() => {
    return {
      matches: false,
    };
  });

  const { result, unmount } = renderHook(() => {
    return useMedia();
  });

  expect(result.current.isPC).toBe(false);
  expect(window.addEventListener).toHaveBeenCalled();

  unmount();
  expect(window.removeEventListener).toHaveBeenCalled();
});
