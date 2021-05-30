import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import Backdrop from "src/components/modal/Backdrop";

type Props = ComponentProps<typeof Backdrop>;

export default {
  title: "modal/Backdrop",
  component: Backdrop,
  argTypes: {
    opacity: {
      control: { type: "select", options: [10, 70] },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => {
  return <Backdrop {...args} />;
};

export const Opacity10 = Template.bind({});

Opacity10.args = {
  opacity: 10,
};

export const Opacity70 = Template.bind({});

Opacity70.args = {
  opacity: 70,
};
