import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import HeaderButtonItem from "src/components/header/HeaderButtonItem";
import { icons } from "src/utils/images";

type Props = ComponentProps<typeof HeaderButtonItem>;

export default {
  title: "header/HeaderButtonItem",
  component: HeaderButtonItem,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const Template: Story<Props> = (args) => {
  return <HeaderButtonItem {...args} />;
};

export const ChatBot = Template.bind({});

ChatBot.args = {
  label: "Chat Bot",
  icon: icons.chatBot,
};
