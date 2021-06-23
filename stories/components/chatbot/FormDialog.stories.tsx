import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import React from "react";
import FormDialog from "src/components/chatbot/FormDialog";

type Props = ComponentProps<typeof FormDialog>;

export default {
  title: "chatbot/FormDialog",
  component: FormDialog,
} as Meta;

const Template: Story<Props> = (args) => {
  return <FormDialog {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  handleClose: () => {
    return;
  },
};
