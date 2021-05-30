import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import ExternalLink from "src/components/samples/ExternalLink";

type Props = ComponentProps<typeof ExternalLink>;

export default {
  title: "samples/ExternalLink",
  component: ExternalLink,
} as Meta;

const Template: Story<Props> = (args) => {
  return <ExternalLink {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  label: "Label",
  url: "",
};
