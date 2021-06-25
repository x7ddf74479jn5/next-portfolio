import { renderHook } from "@testing-library/react-hooks";

import useBodyLockScroll from "../../src/hooks/useBodyLockScroll";

describe("useBodyLockScroll", () => {
  test("evaluates media query", () => {
    window.getComputedStyle = jest.fn().mockReturnValue({ overflow: "test" });
    document.body.style.overflow = "";

    const { unmount } = renderHook(() => {
      return useBodyLockScroll();
    });

    expect(window.getComputedStyle).toHaveBeenCalled();

    unmount();
    expect(document.body.style.overflow).toBe("test");
  });
});
