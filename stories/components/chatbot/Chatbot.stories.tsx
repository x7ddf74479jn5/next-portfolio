import type { Meta } from "@storybook/react";
import type { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import React from "react";
import Chatbot from "src/components/chatbot/Chatbot";

import { withContext } from ".storybook/context";

export default {
  title: "chatbot/Chatbot",
  component: Chatbot,
  decorators: [
    (storyFn: () => StoryFnReactReturnType) => {
      return withContext(storyFn);
    },
  ],
} as Meta;

export const chatbot = () => {
  return <Chatbot />;
};
