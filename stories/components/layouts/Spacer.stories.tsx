import type { Meta, Story } from "@storybook/react";
import type { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import type { ComponentProps } from "react";
import Spacer from "src/components/layouts/Spacer";

type Props = ComponentProps<typeof Spacer>;

const style = {
  backgroundColor: "#41b6e6",
  height: "100px",
};

export default {
  title: "layouts/Spacer",
  component: Spacer,
  argTypes: {
    size: {
      control: { type: "select", options: ["xxs", "xs", "sm", "md", "lg", "xl"] },
    },
  },
  decorators: [
    (story: () => StoryFnReactReturnType) => {
      return (
        <div>
          <div style={style} />
          {story()}
          <div style={style} />
        </div>
      );
    },
  ],
} as Meta;

const Template: Story<Props> = (args) => {
  return <Spacer {...args} />;
};

export const MD = Template.bind({});
MD.args = {
  size: "md",
};
export const XXS = Template.bind({});
XXS.args = {
  size: "xxs",
};
export const XS = Template.bind({});
XS.args = {
  size: "xs",
};
export const SM = Template.bind({});
SM.args = {
  size: "sm",
};
export const LG = Template.bind({});
LG.args = {
  size: "lg",
};
export const XL = Template.bind({});
XL.args = {
  size: "xl",
};
