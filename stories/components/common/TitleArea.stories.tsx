import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import { TitleArea } from "src/components/common/TitleArea";
import { withNextRouter } from "storybook-addon-next-router";

type Props = ComponentProps<typeof TitleArea>;

export default {
  title: "common/TitleArea",
  component: TitleArea,
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
  return <TitleArea {...args} />;
};

export const Portfolio = Template.bind({});

Portfolio.args = { title: "Portfolio", caption: "ポートフォリオ" };
