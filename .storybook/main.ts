import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal: async (config) => {
    config.css = {
      postcss: {
        plugins: [
          require("tailwindcss"), // Configuración de TailwindCSS
          require("autoprefixer"), // Configuración de Autoprefixer para compatibilidad de CSS
        ],
      },
    };
    return config;
  },
};

export default config;
