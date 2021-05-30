import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import PandasharkLogo from "src/components/common/PandasharkLogo";

type Props = ComponentProps<typeof PandasharkLogo>;

export default {
  title: "common/PandasharkLogo",
  component: PandasharkLogo,
} as Meta;

const Template: Story<Props> = (args) => {
  return <PandasharkLogo {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  width: 128,
  height: 64,
};
