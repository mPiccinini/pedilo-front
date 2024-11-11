import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Recipe from "@/pages/Recipe.tsx";

type StoryProps = ComponentProps<typeof Recipe>;

const meta: Meta<StoryProps> = {
    component: Recipe,
    title: "Pages/RecipePage",
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    render: (args) => (
        <Recipe{...args} />
    ),
};