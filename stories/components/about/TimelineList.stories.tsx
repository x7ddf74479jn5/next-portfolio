import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import { TimelineList } from "src/components/about/Career";

type Props = ComponentProps<typeof TimelineList>;

export default {
  title: "about/TimelineList",
  component: TimelineList,
} as Meta;

const Template: Story<Props> = (args) => {
  return <TimelineList {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  timelines: [
    {
      datetime: "Time 1",
      title: "Title 1",
      description: " Description 1",
    },
    {
      datetime: "Time 2",
      title: "Title 2",
      description: " Description 2",
    },
    {
      datetime: "Time 3",
      title: "Title 3",
      description: " Description 3",
    },
  ],
};
