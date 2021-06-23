import { useCallback, useState } from "react";
import FormModalContainer from "src/components/chatbot/FormModalContainer";
import datasetJson from "src/contents/dataset.json";
import useChatbot from "src/hooks/useChatbot";
import styles from "src/styles/components/chatbot/Chatbot.module.scss";

import AnswersList from "./AnswersList";
import Chats from "./Chats";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  const { answers, chats, selectAnswer } = useChatbot(datasetJson, handleClickOpen);

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
