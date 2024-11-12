import { Meta, StoryObj } from "@storybook/react";
import SearchBar from "@/components/search-&-filter/SearchBar";

type StoryProps = {
  placeholder: string | undefined;
  variant: "rounded" | "default" | "compact";
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
        options: ["rounded", "default", "compact"], 
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
