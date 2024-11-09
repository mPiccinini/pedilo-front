import {ComponentProps} from "react";
import Button from "@/components/Button.tsx";
import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";

type StoryProps = ComponentProps<typeof Button> & {
    buttonText: string;
};

const meta: Meta<StoryProps> = {
    component: Button,
    argTypes: {
        variant: {
            options: ['branch', 'default'],
            control: {
                type: 'select',
            }
        },
        icon: {
            options: ['add', 'remove'],
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
        buttonText: "Ingredientes",
        variant: "default",
    },
    render: ({buttonText, ...args}) => {
        return (<Button {...args}>
            <p>icon</p>
            {buttonText}
        </Button>)
    }
}