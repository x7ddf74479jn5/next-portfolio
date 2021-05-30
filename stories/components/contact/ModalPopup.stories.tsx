import type { Meta, Story } from "@storybook/react";
import type { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import type { ComponentProps } from "react";
import ModalPopup from "src/components/contact/ModalPopup";

import { withContext } from "../../../.storybook/context";

type Props = ComponentProps<typeof ModalPopup>;

const mockButtonAction = {
  apply: () => {
    return new Promise((resolve) => {
      resolve("");
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  cancel: () => {},
};

export default {
  title: "contact/ModalPopup",
  component: ModalPopup,
  argTypes: { apply: { action: "apply" }, cancel: { action: "cancel" } },

  parameters: {
    backgrounds: {
      default: "black",
      values: [{ name: "black", value: "#4d4d4d" }],
    },
  },
  decorators: [
    (storyFn: () => StoryFnReactReturnType) => {
      return withContext(storyFn);
    },
  ],
} as Meta;

const Template: Story<Props> = (args) => {
  return <ModalPopup {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  apply: mockButtonAction.apply,
  cancel: mockButtonAction.cancel,
  formData: {
    name: "Name",
    email: "test@email.com",
    category: "その他",
    description: "これはテストです。",
  },
};
