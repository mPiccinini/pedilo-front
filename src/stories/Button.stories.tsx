import {ComponentProps} from "react";
import Button from "@/components/Button.tsx";
import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";

type StoryProps = ComponentProps<typeof Button> & {
    buttonText: string;
    icon: string;
};

const meta: Meta<StoryProps> = {
    component: Button,
    argTypes: {
        variant: {
            options: ['default', 'pressed'],
            control: {
                type: 'select',
            }
        },
    },
    args: {
        onClick: fn(),
    }
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        buttonText: "Label",
        variant: "default",
    },
    render: ({ buttonText, ...args }) => {
        return (
            <div className={"flex items-center justify-center mt-60"}>
                <Button {...args}>
                    {buttonText}
                </Button>
            </div>
        );
    },
};
