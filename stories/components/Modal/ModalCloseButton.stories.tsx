import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import ModalCloseButton from "src/components/modal/ModalCloseButton";

type Props = ComponentProps<typeof ModalCloseButton>;

export default {
  title: "modal/ModalCloseButton",
  component: ModalCloseButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<Props> = (args) => {
  return <ModalCloseButton {...args} />;
};

export const Default = Template.bind({});
