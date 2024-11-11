import { Meta, StoryObj } from "@storybook/react";
import Keyboard from "@/components/keyboard/Keyboard";

const meta: Meta<typeof Keyboard> = {
  title: "Components/Keyboard",
  component: Keyboard,
  parameters: {
    layout: "centered", 
  },
};


export default meta;

type Story = StoryObj<typeof Keyboard>;

export const Default: Story = {
  render: () => <Keyboard />,
};
