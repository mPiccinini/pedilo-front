import { ComponentProps } from "react";
import HomePage from "@/pages/Home"; // Adjust the import path if needed
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof HomePage>;

const meta: Meta<StoryProps> = {
    component: HomePage,
    title: "Pages/HomePage",
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    render: (args) => (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <HomePage {...args} />
        </div>
    ),
};