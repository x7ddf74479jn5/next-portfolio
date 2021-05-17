import ChatIcon from "@material-ui/icons/Chat";
import styles from "src/styles/components/header/HeaderButton.module.scss";

import type { ButtonType } from "../../types/utils/index";

const ChatbotButton: React.VFC<ButtonType> = ({ onClick }) => {
  return (
    <button className={styles.chatBot} onClick={onClick}>
      <ChatIcon />
      <span>Chat Bot</span>
    </button>
  );
};

export default ChatbotButton;
