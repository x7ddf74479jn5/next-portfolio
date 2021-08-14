import type { Meta, Story } from "@storybook/react";
import type { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import type { ComponentProps } from "react";
import BreadCrumbs from "src/components/common/BreadCrumbs";

import { withRouterContext } from "../../../.storybook/context";

type Props = ComponentProps<typeof BreadCrumbs>;

const routerOptions = {
  route: "/",
  pathname: "/samples/portfolio",
  asPath: "/samples/portfolio",
};

export default {
  title: "common/BreadCrumbs",
  component: BreadCrumbs,
  decorators: [
    (storyFn: () => StoryFnReactReturnType) => {
      return withRouterContext(storyFn, routerOptions);
    },
  ],
} as Meta;

const Template: Story<Props> = (args) => {
  return <BreadCrumbs {...args} />;
};

export const Portfolio = Template.bind({});

Portfolio.args = {};
