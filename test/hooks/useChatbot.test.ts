import { act, renderHook } from "@testing-library/react-hooks";
import dataset from "src/contents/dataset.json";
import useChatbot from "src/hooks/useChatbot";
import { Providers } from "test/test-utils";

const mockPush = jest.fn().mockImplementation((path) => {
  return path;
});

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        route: "/",
        pathname: "/",
        query: {},
        asPath: "/",
        basePath: "/",
        isLocaleDomain: true,
        isReady: true,
        push: mockPush,
        prefetch: jest.fn(),
        replace: jest.fn(),
        reload: jest.fn(),
        back: jest.fn(),
        beforePopState: jest.fn(),
        events: {
          on: jest.fn(),
          off: jest.fn(),
          emit: jest.fn(),
        },
        isFallback: false,
        isPreview: false,
      };
    },
  };
});
describe("useChatbot", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  afterEach(() => {
    jest.clearAllTimers();
  });

  it("should be defined", () => {
    expect(useChatbot).toBeDefined();
  });

  it("should initialize correctly", () => {
    const scrollArea = document.createElement("div");
    scrollArea.setAttribute("id", "scroll-area");
    document.body.appendChild(scrollArea);

    const result = renderHook(
      () => {
        return useChatbot(dataset);
      },
      { wrapper: Providers }
    ).result;

    expect(result.current.answers).toHaveLength(4);
    expect(result.current.chats).toHaveLength(1);
    expect(result.current.selectAnswer).toBeDefined();
    expect(result.current.isSelectReady).toBeTruthy();
    expect(scrollArea.scrollTop).toBe(scrollArea.scrollHeight);
  });

  it("should add charts alternately, question and answer", async () => {
    const result = renderHook(
      () => {
        return useChatbot(dataset);
      },
      { wrapper: Providers }
    ).result;

    await act(async () => {
      await result.current.selectAnswer("あなたについて知りたい", "about");
      expect(result.current.chats).toHaveLength(2);
      jest.advanceTimersByTime(1000);
      expect(result.current.chats).toHaveLength(3);
    });
  });

  it("should set interval to avoid firing multiple click events", async () => {
    const result = renderHook(
      () => {
        return useChatbot(dataset);
      },
      { wrapper: Providers }
    ).result;

    await act(async () => {
      await result.current.selectAnswer("あなたについて知りたい", "about");
      expect(result.current.isSelectReady()).toBeFalsy();
      jest.advanceTimersByTime(1000);
      expect(result.current.isSelectReady()).toBeTruthy();
    });
  });

  it("should go to open a link", async () => {
    (document.createElement as any) = jest.fn(() => {
      return {
        href: "",
        target: "",
        click: () => {
          return;
        },
      };
    });

    const result = renderHook(
      () => {
        return useChatbot(dataset);
      },
      { wrapper: Providers }
    ).result;
    await act(async () => {
      await result.current.selectAnswer("あなたについて知りたい", "about");
      jest.advanceTimersByTime(1000);
      await result.current.selectAnswer("SNS", "sns");
      jest.advanceTimersByTime(1000);
      await result.current.selectAnswer("Example", "https://www.eample.com");
      expect(document.createElement).toBeCalled();
    });
  });

  it("should go to the contact page", async () => {
    const result = renderHook(
      () => {
        return useChatbot(dataset);
      },
      { wrapper: Providers }
    ).result;
    await act(async () => {
      await result.current.selectAnswer("その他の問い合わせがしたい", "other");
      jest.advanceTimersByTime(1000);
      await result.current.selectAnswer("問い合わせる", "contact");
      expect(mockPush).toBeCalledWith("/contact");
    });
  });

  it("should go to the about page", async () => {
    const result = renderHook(
      () => {
        return useChatbot(dataset);
      },
      { wrapper: Providers }
    ).result;

    await act(async () => {
      await result.current.selectAnswer("あなたについて知りたい", "about");
      jest.advanceTimersByTime(1000);
      await result.current.selectAnswer("職業", "job");
      jest.advanceTimersByTime(1000);
      await result.current.selectAnswer("もっと詳しく", "detail");
      jest.advanceTimersByTime(1000);
      await result.current.selectAnswer("Webサイトを見る", "/about");
      expect(mockPush).toBeCalledWith("/about");
    });
  });
});
