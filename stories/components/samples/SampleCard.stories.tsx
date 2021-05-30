import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import SampleCard from "src/components/samples/SampleCard";
import { samples } from "src/contents/samples";

type Props = ComponentProps<typeof SampleCard>;

const portfolio = samples.find((sample) => {
  return sample.id === "portfolio";
});

export default {
  title: "samples/SampleCard",
  component: SampleCard,
  decorators: [
    (Story) => {
      return (
        <div style={{ maxWidth: "500px" }}>
          <Story />
        </div>
      );
    },
  ],
} as Meta;

const Template: Story<Props> = (args) => {
  return <SampleCard {...args} />;
};

export const Portfolio = Template.bind({});

Portfolio.args = { sample: portfolio };
