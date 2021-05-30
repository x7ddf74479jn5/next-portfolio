import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import BreadCrumbs from "src/components/common/BreadCrumbs";
import { withNextRouter } from "storybook-addon-next-router";

type Props = ComponentProps<typeof BreadCrumbs>;

export default {
  title: "common/BreadCrumbs",
  component: BreadCrumbs,
  decorators: [withNextRouter],
  parameters: {
    nextRouter: {
      route: "/",
      pathname: "/samples/portfolio",
      asPath: "/samples/portfolio",
    },
  },
} as Meta;

const Template: Story<Props> = (args) => {
  return <BreadCrumbs {...args} />;
};

export const Portfolio = Template.bind({});

Portfolio.args = {};
