import {ComponentProps} from "react";
import BranchButton from "@/components/button/BranchButton";
import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import BasketIcon from "@/icons/BasketIcon.tsx";

type StoryProps = ComponentProps<typeof BranchButton> & {
    buttonText: string;
    icon: string;
};

const meta: Meta<StoryProps> = {
    component: BranchButton,
    argTypes: {
        icon: {
            options: ['on', 'off'],
            control: {
                type: 'select',
            }
        },
        variant: {
            options: ['default', 'pressed'],
            control: {
                type: 'select',
            }
        }
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
        icon: "on",
        variant: "default",
    },
    render: ({ buttonText, icon, ...args }) => {
        return (
            <div className={"flex items-center justify-center mt-60"}>
                <BranchButton {...args}>
                    {icon === "on" && <BasketIcon iconColor={'black'} size={'24px'}></BasketIcon>}
                    {buttonText}
                </BranchButton>
            </div>
        );
    },
};