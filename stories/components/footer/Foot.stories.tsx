import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import Foot from "src/components/footer/Foot";

type Props = ComponentProps<typeof Foot>;

export default {
  title: "footer/Foot",
  component: Foot,
} as Meta;

const Template: Story<Props> = (args) => {
  return <Foot {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  footItems: [
    {
      id: "Item 1",
      href: "",
      label: "Item 1",
    },
    {
      id: "Item 2",
      href: "",
      label: "Item 2",
    },
    {
      id: "Item 3",
      href: "",
      label: "Item 3",
    },
  ],
};
