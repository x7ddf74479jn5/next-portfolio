import ChatBot from "src/components/chatbot/ChatBot";
import styles from "src/styles/components/modal/ModalContainer.module.scss";

// type Props = { data: any };

// const ModalDrawer: React.FC<Props> = (props) => {
//   return <ModalPopup formData={props.data} />;
// };

const ChatBotModal: React.FC = () => {
  return (
    <div className={styles.modalContent}>
      <ChatBot />
    </div>
  );
};

export default ChatBotModal;
