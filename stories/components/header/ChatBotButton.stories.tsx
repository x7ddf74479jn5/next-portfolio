import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import ChatBotButton from "src/components/header/ChatbotButton";
import { icons } from "src/utils/images";

type Props = ComponentProps<typeof ChatBotButton>;

export default {
  title: "header/ChatBotButton",
  component: ChatBotButton,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const Template: Story<Props> = (args) => {
  return <ChatBotButton {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  label: "Chat Bot",
  icon: icons.chatBot,
};
