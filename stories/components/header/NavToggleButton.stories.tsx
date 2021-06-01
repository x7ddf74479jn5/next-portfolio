import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import NavToggleButton from "src/components/header/NavToggleButton";

type Props = ComponentProps<typeof NavToggleButton>;

export default {
  title: "header/NavToggleButton",
  component: NavToggleButton,
  argTypes: { onClick: { action: "clicked" }, isOpen: { control: "radio", options: [false, true] } },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone6",
    },
  },
} as Meta;

const Template: Story<Props> = (args) => {
  return <NavToggleButton {...args} />;
};

export const Close = Template.bind({});
export const Open = Template.bind({});

Close.args = {
  isOpen: false,
};

Open.args = {
  isOpen: true,
};
