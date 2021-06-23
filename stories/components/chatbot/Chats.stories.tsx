import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import Chats from "src/components/chatbot/Chats";

type Props = ComponentProps<typeof Chats>;

export default {
  title: "chatbot/Chats",
  component: Chats,
} as Meta;

const Template: Story<Props> = (args) => {
  return <Chats {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  chats: [
    { text: "This text is the first question", type: "question" },
    {
      text: "This text is the first answer",
      type: "answer",
    },
    { text: "This text is the second question", type: "question" },
    {
      text: "This text is the second answer",
      type: "answer",
    },
  ],
};
