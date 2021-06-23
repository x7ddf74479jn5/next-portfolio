import type { Meta } from "@storybook/react";
import React from "react";
import Chatbot from "src/components/chatbot/Chatbot";

export default {
  title: "chatbot/Chatbot",
  component: Chatbot,
} as Meta;

export const chatbot = () => {
  return <Chatbot />;
};
