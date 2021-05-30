import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import { Accordion } from "src/components/footer/FooterMenus";

type Props = ComponentProps<typeof Accordion>;

export default {
  title: "footer/Accordion",
  component: Accordion,
} as Meta;

const Template: Story<Props> = (args) => {
  return <Accordion {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  accordion: {
    label: "Accordion",
    items: [
      { label: "Item 1", href: "" },
      { label: "Item 2", href: "" },
      { label: "Item 3", href: "" },
    ],
  },
};
