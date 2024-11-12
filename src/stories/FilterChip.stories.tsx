// FilterChip.stories.tsx
import { ComponentProps } from "react";
import FilterChip from "@/components/search-&-filter/FilterChip";
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof FilterChip>;

const meta: Meta<StoryProps> = {
  component: FilterChip,
  argTypes: {
    variant: {
      options: ["default", "selected"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    label: "Filtro",
    variant: "default",
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    label: "Filtro",
    variant: "default",
  },
  render: (args) => {
    return (
        <div className="flex items-center justify-center mt-20">
          <FilterChip {...args} />
        </div>
    );
  },
};
