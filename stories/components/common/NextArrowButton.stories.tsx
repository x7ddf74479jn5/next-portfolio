import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import { NextArrowButton } from "src/components/common/NextArrowButton";

type Props = ComponentProps<typeof NextArrowButton>;

export default {
  title: "common/NextArrowButton",
  component: NextArrowButton,
  args: {
    label: "Button",
    href: "",
  },
} as Meta;

const Template: Story<Props> = (args) => {
  return <NextArrowButton {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  onDark: false,
};

export const OnDark = Template.bind({});

OnDark.args = {
  onDark: true,
};
