// FilterChip.stories.tsx
import { ComponentProps } from "react";
import FilterChip from "@/components/FilterChip.tsx";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

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
    onClick: fn(),
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
  render: ({ label, ...args }) => {
    return (
      <div className="flex items-center justify-center mt-20">
        <FilterChip {...args} label={label} />
      </div>
    );
  },
};
