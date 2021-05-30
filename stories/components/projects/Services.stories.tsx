import type { Meta, Story } from "@storybook/react";
import type { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import type { ComponentProps } from "react";
import ServiceItem from "src/components/projects/ServiceItem";

import { services } from "../../../src/contents/services";

type Props = ComponentProps<typeof ServiceItem>;

export default {
  title: "projects/ServiceItem",
  component: ServiceItem,
  argTypes: {
    animation: {
      control: { type: "radio", options: ["slideInLeft", "slideInRight"] },
    },
  },
  decorators: [
    (story: () => StoryFnReactReturnType) => {
      return <div style={{ textAlign: "center" }}>{story()}</div>;
    },
  ],
} as Meta;

const Template: Story<Props> = (args) => {
  return <ServiceItem {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  service: services[0],
};
