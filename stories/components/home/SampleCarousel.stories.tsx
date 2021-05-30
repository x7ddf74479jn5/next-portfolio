import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import SampleCarousel from "src/components/home/SampleCarousel";
import { samples } from "src/contents/samples";

type Props = ComponentProps<typeof SampleCarousel>;

export default {
  title: "home/SampleCarousel",
  component: SampleCarousel,
} as Meta;

const Template: Story<Props> = (args) => {
  return <SampleCarousel {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  samples: samples,
};
