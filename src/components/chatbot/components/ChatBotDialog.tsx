import React from "react";
import ChatBot from "src/components/chatbot/ChatBot";
import useClickAway from "src/hooks/useClickAway";
import { useModalDispatch } from "src/hooks/useModalDispatch";

const ChatBotDialog: React.FC = () => {
  const { closeModal } = useModalDispatch();
  const ref = React.useRef<HTMLDivElement>(null);
  useClickAway(ref, closeModal);
  return (
    <div ref={ref}>
      <ChatBot />
    </div>
  );
};

export default ChatBotDialog;
