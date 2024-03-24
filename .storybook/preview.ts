import "@/app/globals.css";

import * as matchers from "@testing-library/jest-dom/matchers";

import type { Preview } from "@storybook/react";
import { expect } from "@storybook/jest";
expect.extend(matchers);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
