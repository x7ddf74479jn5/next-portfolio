import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import type { RefObject } from "react";
import React, { createRef } from "react";
import useClickAway from "src/hooks/useClickAway";

describe("useClickAway", () => {
  const targetRef: RefObject<HTMLDivElement> = createRef();
  const mockCallback = jest.fn();

  const container: HTMLDivElement = document.createElement("div");

  document.addEventListener = jest.fn();
  document.removeEventListener = jest.fn();

  beforeEach(() => {
    render(<div ref={targetRef} />, {
      container: document.body.appendChild(container),
    });

    jest.clearAllMocks();
  });

  it("should be defined", () => {
    expect(useClickAway).toBeDefined();
  });

  it("should setup using the default options", () => {
    renderHook(() => {
      return useClickAway(targetRef, mockCallback);
    });

    expect(document.addEventListener).toBeCalledTimes(2);
    expect(document.addEventListener).toBeCalledWith("mousedown", expect.any(Function));
    expect(document.addEventListener).toBeCalledWith("touchstart", expect.any(Function));
  });

  it("should setup using the options provided", () => {
    const customEvents = ["mousedown", "touchstart", "keydown"];

    renderHook(() => {
      return useClickAway(targetRef, mockCallback, customEvents);
    });

    expect(document.addEventListener).toBeCalledTimes(3);
    expect(document.addEventListener).toBeCalledWith("mousedown", expect.any(Function));
    expect(document.addEventListener).toBeCalledWith("touchstart", expect.any(Function));
    expect(document.addEventListener).toBeCalledWith("keydown", expect.any(Function));
  });

  it("should cleanup when unmounted", () => {
    const { unmount } = renderHook(() => {
      return useClickAway(targetRef, mockCallback);
    });

    expect(document.addEventListener).toBeCalledTimes(2);
    expect(document.addEventListener).toBeCalledWith("mousedown", expect.any(Function));
    expect(document.addEventListener).toBeCalledWith("touchstart", expect.any(Function));

    unmount();

    expect(document.removeEventListener).toBeCalledTimes(2);
    expect(document.removeEventListener).toHaveBeenNthCalledWith(1, "mousedown", expect.any(Function));
    expect(document.removeEventListener).toHaveBeenNthCalledWith(2, "touchstart", expect.any(Function));
  });

  it("should setup new event listener when the props change", () => {
    const { rerender } = renderHook(
      ({
        ref,
        onClickAway,
        events,
      }: {
        ref: RefObject<HTMLDivElement>;
        onClickAway: jest.Mock<any, any>;
        events?: string[] | undefined;
      }) => {
        return useClickAway(ref, onClickAway, events);
      },
      {
        initialProps: {
          ref: targetRef,
          onClickAway: mockCallback,
        },
      }
    );

    expect(document.addEventListener).toBeCalledTimes(2);
    expect(document.addEventListener).toBeCalledWith("mousedown", expect.any(Function));
    expect(document.addEventListener).toBeCalledWith("touchstart", expect.any(Function));

    const customEvents = ["keydown"];

    const newRef: RefObject<HTMLDivElement> = createRef();
    const newProps = {
      ref: newRef,
      onClickAway: mockCallback,
      events: customEvents,
    };

    rerender(newProps);

    expect(document.removeEventListener).toBeCalledTimes(2);
    expect(document.removeEventListener).toHaveBeenNthCalledWith(1, "mousedown", expect.any(Function));
    expect(document.removeEventListener).toHaveBeenNthCalledWith(2, "touchstart", expect.any(Function));

    expect(document.addEventListener).toBeCalledTimes(3);
    expect(document.addEventListener).toHaveBeenLastCalledWith("keydown", expect.any(Function));
  });
});
