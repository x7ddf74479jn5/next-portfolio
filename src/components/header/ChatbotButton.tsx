import ChatIcon from "@material-ui/icons/Chat";
import { useModalDispatch } from "src/hooks/useModalDispatch";
import styles from "src/styles/components/header/HeaderButton.module.scss";

import type { ButtonType } from "../../types/utils/index";

const ChatbotButton: React.VFC<ButtonType> = ({ onClick }) => {
  const { openModal } = useModalDispatch();

  const handleClick = () => {
    onClick();
    openModal("DRAWER");
  };
  return (
    <button
      className={styles.chatBot}
      onClick={() => {
        return handleClick();
      }}
    >
      <ChatIcon />
      <span>Chat Bot</span>
    </button>
  );
};

export default ChatbotButton;
