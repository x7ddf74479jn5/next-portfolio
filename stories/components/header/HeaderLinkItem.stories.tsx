import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import HeaderLinkItem from "src/components/header/HeaderLinkItem";
import { icons } from "src/utils/images";

type Props = ComponentProps<typeof HeaderLinkItem>;

export default {
  title: "header/HeaderLinkItem",
  component: HeaderLinkItem,
} as Meta;

const Template: Story<Props> = (args) => {
  return <HeaderLinkItem {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  item: {
    label: "Item",
    href: "",
  },
};

export const Twitter = Template.bind({});

Twitter.args = {
  item: {
    label: "Twitter",
    href: "",
    icon: {
      src: icons.twitter.path,
      alt: icons.twitter.alt,
    },
  },
};

export const GitHub = Template.bind({});

GitHub.args = {
  item: {
    label: "GitHub",
    href: "",
    icon: {
      src: icons.github.path,
      alt: icons.github.alt,
    },
  },
};
