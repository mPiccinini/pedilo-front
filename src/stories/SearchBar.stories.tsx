import { Meta, StoryObj } from "@storybook/react";
import SearchBar from "@/components/search-&-filter/SearchBar";

type StoryProps = {
  placeholder: string;
  variant: "rounded" | "default" | "compact"; // Agregamos la opción "compact"
};

const meta: Meta<StoryProps> = {
  component: SearchBar,
  title: "Components/SearchBar",
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
      defaultValue: "Buscar",
    },
    variant: {
      control: {
        type: 'select',
        options: ["rounded", "default", "compact"], // Incluimos "compact" en las opciones
      },
      defaultValue: "rounded",
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const DefaultSearchBar: Story = {
  args: {
    placeholder: "Buscar",
    variant: "rounded",
  },
  render: (args) => <SearchBar placeholder={args.placeholder} variant={args.variant} />,
};
