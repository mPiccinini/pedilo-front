import RecipeInfo from "@/components/RecipeInfo";
import ScrollDots from "@/icons/ScrollDots";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
    title: 'Components/RecipeInfo',
    component: RecipeInfo,
    argTypes: {
        steps: {
            control: { type: "object" },
            description: "Pasos de la receta",
            defaultValue: ["Paso 1", "Paso 2", "Paso 3"],
        },
        stepsDescription: {
            control: { type: "object" },
            description: "Descripción de los pasos de la receta",
            defaultValue: ["Descripción 1", "Descripción 2", "Descripción 3"],
        },
        stepsImages: {
            control: { type: "object" },
            description: "Imágenes de los pasos de la receta",
            defaultValue: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
        },
    },
};

export default meta;

type Story = StoryObj<typeof RecipeInfo>;

export const Default: Story = {
    args: {
        steps: ["Paso 1", "Paso 2", "Paso 3"],
        stepsDescription: ["Descripción 1", "Descripción 2", "Descripción 3"],
        stepsImages: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    },
    render: (args) => <RecipeInfo {...args} />,
};