import { Meta, StoryObj } from "@storybook/react";
import RecipeIcon from "@/components/RecipeIcon";
import BasketIcon from "@/components/BasketIcon";

type StoryProps = {
  color: string;
  size: number;
};

const meta: Meta<StoryProps> = {
  title: "NavBarIcons",
  argTypes: {
    color: { control: 'color' },
    size: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const RecipeIconStory: Story = {
  args: {
    color: "#000",
    size: 24,
  },
  render: (args) => <RecipeIcon color={args.color} size={args.size} />,
};

export const BasketIconStory: Story = {
  args: {
    color: "#5B4637",
    size: 24,
  },
  render: (args) => <BasketIcon color={args.color} size={args.size} />,
};