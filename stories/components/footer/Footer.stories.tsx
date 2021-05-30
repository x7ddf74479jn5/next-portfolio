import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import { Footer } from "src/components/footer/Footer";

type Props = ComponentProps<typeof Footer>;

export default {
  title: "footer/Footer",
  component: Footer,
} as Meta;

const Template: Story<Props> = (args) => {
  return <Footer {...args} />;
};

export const Default = Template.bind({});
