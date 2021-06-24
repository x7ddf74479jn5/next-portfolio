import { useCallback, useEffect, useRef, useState } from "react";
import type { Answer, Chat, ChatData, Dataset, NextQuestionId, SelectAnswer } from "src/types/chatbot/index";

const useChatbot = (initialDataset: Dataset, callbackFn: () => void) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [chats, setChats] = useState<Chat[]>([]);
  const [currentId, setCurrentId] = useState<NextQuestionId>("init");
  const [dataset, setDataset] = useState<Dataset>();
  const ready = useRef(true);
  const isSelectReady = useCallback(() => {
    return ready.current;
  }, []);

  const displayNextQuestion = useCallback((nextQuestionId: NextQuestionId, nextDataset: ChatData) => {
    addChats({
      text: nextDataset.question,
      type: "question",
    });

    setAnswers(nextDataset.answers);
    setCurrentId(nextQuestionId);
  }, []);

  const selectAnswer: SelectAnswer = useCallback(
    (selectedAnswer, nextQuestionId) => {
      if (typeof nextQuestionId !== "string") {
        throw new TypeError("Invalid arguments");
      }

      switch (true) {
        case nextQuestionId === "contact":
          callbackFn();
          break;
        case /^https:*/.test(nextQuestionId): {
          const a = document.createElement("a");
          a.href = nextQuestionId;
          a.target = "_blank";
          a.click();
          break;
        }
        default:
          ready.current = false;

          addChats({
            text: selectedAnswer,
            type: "answer",
          });
          setTimeout(() => {
            if (dataset === undefined) {
              throw new Error("Not initialized");
            }
            displayNextQuestion(nextQuestionId, dataset[nextQuestionId]);
            ready.current = true;
          }, 1000);
          break;
      }
    },
    [dataset, callbackFn, displayNextQuestion]
  );

  const addChats = (chat: Chat) => {
    setChats((prevChats) => {
      return [...prevChats, chat];
    });
  };

  useEffect(() => {
    setDataset(initialDataset);
    displayNextQuestion(currentId, initialDataset[currentId]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });

  return { answers, chats, selectAnswer, isSelectReady } as const;
};

export default useChatbot;
