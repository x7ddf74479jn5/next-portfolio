// import "./assets/styles/style.css";

import React, { useCallback, useEffect, useState } from "react";

import type { Answer, Chat, ChatData, Dataset, NextQuestionId } from "../../types/chatbot/index";
import FormDialog from "./components/Forms/FormDialog";
import { AnswersList, Chats } from "./components/index";
import datasetJson from "./dataset.json";

const ChatBot = () => {
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

  const selectAnswer = (selectedAnswer: Answer["content"], nextQuestionId: NextQuestionId) => {
    switch (true) {
      case nextQuestionId === "contact":
        handleClickOpen();
        break;
      case /^https:*/.test(nextQuestionId.toString()): {
        const a = document.createElement("a");
        a.href = nextQuestionId.toString();
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
            return;
          }
          return displayNextQuestion(nextQuestionId, dataset[nextQuestionId]);
        }, 1000);
        break;
    }
  };

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
    const initialDataset = Object.fromEntries(Object.entries(datasetJson)) as Dataset;

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
    <section className={"c-section"}>
      <div className={"c-box"}>
        <Chats chats={chats} />
        <AnswersList answers={answers} select={selectAnswer} />
        <FormDialog open={open} handleClose={handleClose} />
      </div>
    </section>
  );
};

export default ChatBot;
