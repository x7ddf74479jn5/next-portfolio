import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import Answer from "src/components/chatbot/Answer";

type Props = ComponentProps<typeof Answer>;

export default {
  title: "chatbot/Answer",
  component: Answer,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const Template: Story<Props> = (args) => {
  return <Answer {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  content: "Content",
  select: () => {
    return;
  },
};
