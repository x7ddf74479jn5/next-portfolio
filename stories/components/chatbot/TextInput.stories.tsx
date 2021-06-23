import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import React from "react";
import TextInput from "src/components/chatbot/TextInput";

type Props = ComponentProps<typeof TextInput>;

export default {
  title: "chatbot/TextInput",
  component: TextInput,
} as Meta;

const Template: Story<Props> = (args) => {
  const [text, setText] = React.useState("Value");

  return (
    <TextInput
      {...args}
      value={text}
      onChange={(e) => {
        return setText(e.target.value);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  id: "id",
  label: "Label",
  rows: 1,
  type: "text",
  multiline: false,
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  id: "id",
  label: "Label",
  rows: 5,
  type: "text",
  multiline: true,
};
