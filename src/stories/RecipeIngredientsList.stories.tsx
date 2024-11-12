import RecipeIngredientsList from "@/components/cart-related/RecipeIngredientsList";
import CheckBoxIcon from "@/icons/CheckBoxIcon";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'Components/RecipeIngredientsList',
    component: RecipeIngredientsList,
    argTypes: {
        ingredients: {
            control: { type: 'array' },
            description: 'Lista de ingredientes',
            defaultValue: ['Tomate', 'Lechuga', 'Cebolla'],
        },
        prices: {
            control: { type: 'array' },
            description: 'Lista de precios de los ingredientes',
            defaultValue: [100, 200, 300],
        },
    },
};

export default meta;

type Story = StoryObj<typeof RecipeIngredientsList>;

export const Default : Story = {
    args: {
        ingredients: ['Tomate', 'Lechuga', 'Cebolla'],
        prices: [100, 200, 300],
    },
    render: (args) => <RecipeIngredientsList {...args} />,
};
