import type { Meta } from "@storybook/react";
import type { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import { Header } from "src/components/header/Header";

import { withContext } from "../../../.storybook/context";

export default {
  title: "header/Header",
  component: Header,
} as Meta;

export const header = () => {
  return <Header />;
};

header.story = {
  decorators: [
    (story: () => StoryFnReactReturnType) => {
      return withContext(story);
    },
  ],
};
