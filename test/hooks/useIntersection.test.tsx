import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import type { RefObject } from "react";
import React, { createRef } from "react";
import useIntersection from "src/hooks/useIntersection";

let observers: { current: RefObject<HTMLElement>; options: IntersectionObserverInit }[] = [];
const mockObserve = jest.fn();
const unobserve = jest.fn();
const disconnect = jest.fn();

beforeEach(() => {
  observers = [];

  (global as any).IntersectionObserver = jest.fn((handler, options) => {
    mockObserve.mockImplementation((ref) => {
      return observers.push({ current: ref, options: options });
    });

    return {
      observe: mockObserve,
      unobserve,
      disconnect,
      observers,
    };
  });
  jest.clearAllMocks();
});

describe("useIntersection", () => {
  const container = document.createElement("div");
  let targetRef: RefObject<HTMLDivElement>;
  let newRef: RefObject<HTMLDivElement>;

  it("should be defined", () => {
    expect(useIntersection).toBeDefined();
  });

  it("should setup an IntersectionObserver targeting the ref element and using the options provided", () => {
    targetRef = createRef();

    render(<div ref={targetRef} />, {
      container: container,
    });

    expect(observers).toHaveLength(0);

    const observerOptions = { root: null, threshold: 0.8 };

    const { result } = renderHook(() => {
      return useIntersection(targetRef, observerOptions);
    });

    expect(result.current).toBe(false);
    expect(mockObserve).toHaveBeenCalledTimes(1);
    expect(observers).toHaveLength(1);
    expect(observers[0].current).toEqual(targetRef.current);
    expect(observers[0].options).toEqual(observerOptions);
  });

  it("should return false if a ref without a current value is provided", () => {
    targetRef = createRef();

    const { result } = renderHook(() => {
      return useIntersection(targetRef, { root: null, threshold: 1 });
    });

    expect(result.current).toBe(false);
  });

  it("should disconnect an old IntersectionObserver instance when the ref changes", () => {
    targetRef = createRef();
    const renderResult = render(<div ref={targetRef} />, {
      container: container,
    });

    const { result, rerender } = renderHook(() => {
      return useIntersection(targetRef, { root: container, threshold: 0.8 });
    });

    expect(result.current).toEqual(false);
    newRef = createRef();
    renderResult.rerender(<div ref={newRef} />);

    rerender();
    expect(disconnect).toHaveBeenCalledTimes(1);
  });

  it("should return null if IntersectionObserver is not supported", () => {
    targetRef = createRef();
    delete (window as any).IntersectionObserver;

    expect(() => {
      return renderHook(() => {
        return useIntersection(targetRef, {});
      });
    }).not.toThrow();
  });

  it("should setup a new IntersectionObserver when the ref changes", () => {
    targetRef = createRef();
    newRef = createRef();
    render(
      <div ref={targetRef}>
        <div ref={newRef} />
      </div>,
      {
        container: container,
      }
    );

    const observerOptions = { root: null, threshold: 0.8 };
    const { rerender } = renderHook(
      ({ ref, options }) => {
        return useIntersection(ref, options);
      },
      {
        initialProps: { ref: targetRef, options: observerOptions },
      }
    );

    expect(observers[0].current).toEqual(targetRef.current);
    expect(observers).toHaveLength(1);

    rerender({ ref: newRef, options: observerOptions });

    expect(observers[1].current).toEqual(newRef.current);
  });

  it("should setup a new IntersectionObserver when the options change", () => {
    targetRef = createRef();
    render(<div ref={targetRef} />, {
      container: container,
    });

    const initialObserverOptions = { root: null as HTMLElement | null, threshold: 0.8 };
    const { rerender } = renderHook(
      ({ ref, options }) => {
        return useIntersection(ref, options);
      },
      {
        initialProps: { ref: targetRef, options: initialObserverOptions },
      }
    );

    expect(observers[0].options).toEqual(initialObserverOptions);

    const newObserverOptions = { root: container, threshold: 1 };

    rerender({ ref: targetRef, options: newObserverOptions });

    expect(observers[1].options).toEqual(newObserverOptions);
  });
});
