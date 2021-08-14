const addParameters = require("@storybook/react").addParameters;
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import * as nextImage from "next/image";

import "src/styles/style.scss";

// Mock for Next Image
Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addParameters({
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
