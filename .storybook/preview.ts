import type { Preview } from "@storybook/react";
// .storybook/preview.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import "@/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
