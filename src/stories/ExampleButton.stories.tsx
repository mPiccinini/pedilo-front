import {ComponentProps} from "react";
import ExampleButton from "@/components/ExampleButton.tsx";
import {Meta, StoryObj} from "@storybook/react";

type StoryProps = ComponentProps<typeof ExampleButton> & {
    buttonText: string
}

const meta: Meta<StoryProps> = {
    component: ExampleButton,
    argTypes: {
        variant: {
            options: ['default', 'outlined'],
            control: {
                type: 'select',
            }
        }
    }
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        buttonText: "Click me",
        variant: "default",
    },
    render: (args) => {
        return (<ExampleButton onClick={() => console.log("Clickeao")} variant={args.variant}>{args.buttonText}</ExampleButton>)
    }
}