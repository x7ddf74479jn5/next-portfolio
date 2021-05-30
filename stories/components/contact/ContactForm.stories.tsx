import type { Meta, Story } from "@storybook/react";
import type { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import ContactFormContainer from "src/components/contact/ContactFormContainer";

import { withContext } from "../../../.storybook/context";

export default {
  title: "contact/ContactFormContainer",
  component: ContactFormContainer,
  decorators: [
    (storyFn: () => StoryFnReactReturnType) => {
      return withContext(storyFn);
    },
  ],
} as Meta;

const Template: Story = () => {
  return <ContactFormContainer />;
};
export const Default = Template.bind({});
Default.args = {};
