import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { AddIcon } from "@/icons/AddIcon"; 
import { DollarIcon } from "@/icons/DollarIcon"; 
import { ProfileIcon } from "@/icons/ProfileIcon"; 
import { HomeIcon } from "@/icons/HomeIcon";
import { BagIcon } from "@/icons/BagIcon";
import { RecipeIcon } from "@/icons/RecipeIcon";
import { BasketIcon } from "@/icons/BasketIcon";
import { HeartIcon } from "@/icons/HeartIcon";
import { ArrowBackIcon } from "@/icons/ArrowBackIcon";
import { ClockIcon } from "@/icons/ClockIcon";

type StoryProps = {
    iconColor: string;
    size: string;
    variant: 'variant1' | 'variant2'; 
} & ComponentProps<typeof AddIcon & typeof DollarIcon>;

const meta: Meta<StoryProps> = {
    component: AddIcon, 
    argTypes: {
        iconColor: {
            control: {
                type: 'color', 
            },
            defaultValue: 'currentColor',
        },
        size: {
            control: {
                type: 'text', 
            },
            defaultValue: '24px',
        },
        variant: {
            control: {
                type: 'select', 
                options: ['variant1', 'variant2'], 
            },
            defaultValue: 'variant1', 
        },
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const AddIconStory: Story = {
    args: {
        iconColor: 'currentColor',
        size: '24px',
    },
    render: (args) => {
        return (
            <AddIcon
                iconColor={args.iconColor}
                size={args.size}
            />
        );
    },
};

export const DollarIconVariant1: Story = {
    args: {
        iconColor: 'black',
        size: '32px',
        variant: 'variant1',
    },
    render: (args) => {
        return (
            <DollarIcon
                iconColor={args.iconColor}
                size={args.size}
                variant={args.variant}
            />
        );
    },
};


export const DollarIconVariant2: Story = {
    args: {
        iconColor: 'orange',
        size: '32px',
        variant: 'variant2',
    },
    render: (args) => {
        return (
            <DollarIcon
                iconColor={args.iconColor}
                size={args.size}
                variant={args.variant}
            />
        );
    },
};


export const ProfileIconStory: Story = {
    args: {
        iconColor: 'black', 
        size: '24px',      
    },
    render: (args) => {
        return (
            <ProfileIcon
                iconColor={args.iconColor}
                size={args.size}
            />
        );
    },
};

export const HomeIconVariant1: Story = {
    args: {
        iconColor: 'black',
        size: '32px',
        variant: 'variant1',
    },
    render: (args) => {
        return (
            <HomeIcon
                iconColor={args.iconColor}
                size={args.size}
                variant={args.variant}
            />
        );
    },
};

export const HomeIconVariant2: Story = {
    args: {
        iconColor: 'orange',
        size: '32px',
        variant: 'variant2',
    },
    render: (args) => {
        return (
            <HomeIcon
                iconColor={args.iconColor}
                size={args.size}
                variant={args.variant}
            />
        );
    },
};

export const BagIconVarianr1: Story = {
    args: {
        iconColor: 'black',
        size: '32px',
        variant: 'variant1',
    },
    render: (args) => {
        return (
            <BagIcon
                iconColor={args.iconColor}
                size={args.size}
                variant={args.variant}
            />
        );
    },
};

export const BagIconVariant2: Story = {
    args: {
        iconColor: 'orange',
        size: '32px',
        variant: 'variant2',
    },
    render: (args) => {
        return (
            <BagIcon
                iconColor={args.iconColor}
                size={args.size}
                variant={args.variant}
            />  
        );
    },
};

export const RecipeIconVariant1: Story = {
    args: {
        iconColor: 'black',
        size: '32px',
        variant: 'variant1',
    },
    render: (args) => {
        return (
            <RecipeIcon
                iconColor={args.iconColor}
                size={args.size}
                variant={args.variant}
            />
        );
    },
};

export const RecipeIconVariant2: Story = {
    args: {
        iconColor: 'orange',
        size: '32px',
        variant: 'variant2',
    },
    render: (args) => {
        return (
            <RecipeIcon
                iconColor={args.iconColor}
                size={args.size}
                variant={args.variant}
            />
        );
    },
};

export const RecipeIconVariant3: Story = {
    args: {
        iconColor: 'blue',
        size: '32px',
        variant: 'variant3',
    },
    render: (args) => {
        return (
            <RecipeIcon
                iconColor={args.iconColor}
                size={args.size}
                variant={args.variant}
            />
        );
    },
};

export const BasketIconVariant1: Story = {
    args: {
        iconColor: 'black',
        size: '32px',
        variant: 'variant1',
    },
    render: (args) => {
        return (
            <BasketIcon
                iconColor={args.iconColor}
                size={args.size}
                variant={args.variant}
            />
        );
    },
};

export const BasketIconVariant2: Story = {  
    args: {
        iconColor: 'orange',
        size: '32px',
        variant: 'variant2',
    },
    render: (args) => {
        return (
            <BasketIcon
                iconColor={args.iconColor}
                size={args.size}
                variant={args.variant}
            />
        );
    },
};

export const BasketIconVariant3: Story = {  
    args: {
        iconColor: 'blue',
        size: '32px',
        variant: 'variant3',
    },
    render: (args) => {
        return (
            <BasketIcon
                iconColor={args.iconColor}
                size={args.size}
                variant={args.variant}
            />
        );
    },
};

export const HeartIconVariant1: Story = {
    args: {
        iconColor: 'black',
        size: '32px',
        variant: 'variant1',
    },
    render: (args) => {
        return (
            <HeartIcon
                iconColor={args.iconColor}
                size={args.size}
                variant={args.variant}
            />
        );
    },
};

export const HeartIconVariant2: Story = {
    args: {
        iconColor: 'orange',
        size: '32px',
        variant: 'variant2',
    },
    render: (args) => {
        return (
            <HeartIcon
                iconColor={args.iconColor}
                size={args.size}
                variant={args.variant}
            />
        );
    },
};

export const ArrowBackIconVariant1: Story = {
    args: {
        iconColor: 'black',
        size: '32px',
        variant: 'variant1',
    },
    render: (args) => {
        return (
            <ArrowBackIcon
                iconColor={args.iconColor}
                size={args.size}
                variant={args.variant}
            />
        );
    },
};

export const ClockIconVariant1: Story = {
    args: {
        iconColor: 'black',
        size: '32px',
        variant: 'variant1',
    },
    render: (args) => {
        return (
            <ClockIcon
                iconColor={args.iconColor}
                size={args.size}
                variant={args.variant}
            />
        );
    },
};