import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import FormButton from "src/components/contact/FormButton";

type Props = ComponentProps<typeof FormButton>;

export default {
  title: "contact/FormButton",
  component: FormButton,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const Template: Story<Props> = (args) => {
  return <FormButton {...args} />;
};

export const Apply = Template.bind({});
Apply.args = {
  buttonType: "apply",
  label: "送信する",
};
export const Cancel = Template.bind({});
Cancel.args = {
  buttonType: "cancel",
  label: "修正する",
};
