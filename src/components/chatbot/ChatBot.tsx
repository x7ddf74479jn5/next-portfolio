import React, { useCallback, useEffect, useState } from "react";
import FormModalContainer from "src/components/chatbot/FormModalContainer";
import datasetJson from "src/contents/dataset.json";
import styles from "src/styles/components/chatbot/Chatbot.module.scss";

import type { Answer, Chat, ChatData, Dataset, NextQuestionId, SelectAnswer } from "../../types/chatbot/index";
import AnswersList from "./AnswersList";
import Chats from "./Chats";

const Chatbot = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [chats, setChats] = useState<Chat[]>([]);
  const [currentId, setCurrentId] = useState<NextQuestionId>("init");
  const [dataset, setDataset] = useState<Dataset>();
  const [open, setOpen] = useState(false);

  const displayNextQuestion = (nextQuestionId: NextQuestionId, nextDataset: ChatData) => {
    addChats({
      text: nextDataset.question,
      type: "question",
    });

    setAnswers(nextDataset.answers);
    setCurrentId(nextQuestionId);
  };

  const selectAnswer: SelectAnswer = useCallback(
    (selectedAnswer, nextQuestionId) => {
      if (typeof nextQuestionId !== "string") {
        throw new TypeError("Invalid arguments");
      }
      switch (true) {
        case nextQuestionId === "contact":
          handleClickOpen();
          break;
        case /^https:*/.test(nextQuestionId): {
          const a = document.createElement("a");
          a.href = nextQuestionId;
          a.target = "_blank";
          a.click();
          break;
        }
        default:
          addChats({
            text: selectedAnswer,
            type: "answer",
          });
          setTimeout(() => {
            if (dataset === undefined) {
              throw new Error("Not initialized");
            }
            return displayNextQuestion(nextQuestionId, dataset[nextQuestionId]);
          }, 1000);
          break;
      }
    },
    [dataset]
  );

  const addChats = (chat: Chat) => {
    setChats((prevChats) => {
      return [...prevChats, chat];
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useEffect(() => {
    const initialDataset = datasetJson as Dataset;
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

  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <Chats chats={chats} />
        <AnswersList answers={answers} select={selectAnswer} />
        {open && <FormModalContainer handleClose={handleClose} />}
      </div>
    </section>
  );
};

export default Chatbot;
