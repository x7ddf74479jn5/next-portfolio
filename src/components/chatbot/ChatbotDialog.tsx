import dynamic from "next/dynamic";
import React from "react";
import useClickAway from "src/hooks/useClickAway";
import { useModalDispatch } from "src/hooks/useModalDispatch";

const ChatbotDialog: React.FC = () => {
  const { closeModal } = useModalDispatch();
  const ref = React.useRef<HTMLDivElement>(null);
  useClickAway(ref, closeModal);
  const Chatbot = dynamic(() => {
    return import("src/components/chatbot/Chatbot");
  });

  return (
    <div ref={ref}>
      <Chatbot />
    </div>
  );
};

export default ChatbotDialog;
