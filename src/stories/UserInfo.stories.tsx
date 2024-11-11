// UserInfo.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import UserInfo from "@/components/UserInfo";

const meta: Meta<typeof UserInfo> = {
  title: "Components/UserInfo",
  component: UserInfo,
  argTypes: {
    variant: {
      options: ["register", "login"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof UserInfo>;

export const Register: Story = {
  args: {
    variant: "register",
  },
};
