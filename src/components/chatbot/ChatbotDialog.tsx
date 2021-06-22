import React from "react";
import Chatbot from "src/components/chatbot/Chatbot";
import useClickAway from "src/hooks/useClickAway";
import { useModalDispatch } from "src/hooks/useModalDispatch";

const ChatbotDialog: React.FC = () => {
  const { closeModal } = useModalDispatch();
  const ref = React.useRef<HTMLDivElement>(null);
  useClickAway(ref, closeModal);
  return (
    <div ref={ref}>
      <Chatbot />
    </div>
  );
};

export default ChatbotDialog;
