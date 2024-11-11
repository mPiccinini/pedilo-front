import { ComponentProps } from "react";
import Home from "@/pages/Home.tsx"; // Adjust the import path if needed
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof Home>;

const meta: Meta<StoryProps> = {
    component: Home,
    title: "Pages/HomePage",
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    render: (args) => (
        <Home{...args} />
    ),
};