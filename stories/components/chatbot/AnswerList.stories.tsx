import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import AnswersList from "src/components/chatbot/AnswersList";

type Props = ComponentProps<typeof AnswersList>;

export default {
  title: "chatbot/AnswersList",
  component: AnswersList,
} as Meta;

const Template: Story<Props> = (args) => {
  return <AnswersList {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  answers: [
    { content: "Content 1", nextId: "1" },
    { content: "Content 2", nextId: "2" },
    { content: "Content 3", nextId: "3" },
  ],
  select: () => {
    return;
  },
};
