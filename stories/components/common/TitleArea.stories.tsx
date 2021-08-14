import type { Meta, Story } from "@storybook/react";
import type { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import type { ComponentProps } from "react";
import { TitleArea } from "src/components/common/TitleArea";

import { withRouterContext } from "../../../.storybook/context";

type Props = ComponentProps<typeof TitleArea>;

const routerOptions = {
  route: "/",
  pathname: "/samples/portfolio",
  asPath: "/samples/portfolio",
};
export default {
  title: "common/TitleArea",
  component: TitleArea,
  decorators: [
    (storyFn: () => StoryFnReactReturnType) => {
      return withRouterContext(storyFn, routerOptions);
    },
  ],
} as Meta;

const Template: Story<Props> = (args) => {
  return <TitleArea {...args} />;
};

export const Portfolio = Template.bind({});

Portfolio.args = { title: "Portfolio", caption: "ポートフォリオ" };
