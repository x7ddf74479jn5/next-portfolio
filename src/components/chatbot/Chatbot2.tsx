import datasetJson from "src/contents/dataset.json";
import useChatbot from "src/hooks/useChatbot";
import styles from "src/styles/components/chatbot/Chatbot.module.scss";

import AnswersList from "./AnswersList";
import Chats from "./Chats";

const Chatbot = () => {
  const { answers, chats, selectAnswer, isSelectReady } = useChatbot(datasetJson);
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <Chats chats={chats} />
        <AnswersList answers={answers} select={selectAnswer} isSelectReady={isSelectReady} />
      </div>
    </section>
  );
};

export default Chatbot;
