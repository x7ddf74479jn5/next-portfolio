import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import PrimaryButton from "src/components/common/PrimaryButton";

type Props = ComponentProps<typeof PrimaryButton>;

export default {
  title: "common/PrimaryButton",
  component: PrimaryButton,
} as Meta;

const Template: Story<Props> = (args) => {
  return <PrimaryButton {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  label: "Button",
};
