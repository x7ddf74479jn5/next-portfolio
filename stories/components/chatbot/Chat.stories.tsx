import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import Chat from "src/components/chatbot/Chat";

type Props = ComponentProps<typeof Chat>;

export default {
  title: "chatbot/Chat",
  component: Chat,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const Template: Story<Props> = (args) => {
  return <Chat {...args} />;
};

export const Question = Template.bind({});
Question.args = {
  text: "This text is a question",
  type: "question",
};

export const Answer = Template.bind({});
Answer.args = {
  text: "This text is an answer",
  type: "answer",
};
