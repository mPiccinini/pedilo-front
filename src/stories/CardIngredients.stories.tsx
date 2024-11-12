import { Meta, StoryFn, StoryObj } from '@storybook/react';
import CardIngredients from '@/components/recipe-ingredient-cards/CardIngredients';
import CardIngredientsProps from '@/components/recipe-ingredient-cards/CardIngredients';
import {ComponentProps} from "react";

type StoryProps = ComponentProps<typeof CardIngredientsProps>;

const meta: Meta<StoryProps> = {
  title: 'Components/CardIngredients',
  component: CardIngredients,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['variant1', 'variant2'],
    },
  },
};

type Story = StoryObj<StoryProps>;

export default meta;

const Template: StoryFn<typeof CardIngredientsProps> = (args:any) => <CardIngredients {...args} />;

export const Variant1: Story = Template.bind({});
Variant1.args = {
  imageSrc: 'https://via.placeholder.com/109x80', 
  variant: 'variant1',
  title: 'Tomate',
  description: 'Redondo',
};

export const Variant2: Story = Template.bind({});
Variant2.args = {
  imageSrc: 'https://via.placeholder.com/109x80', 
  variant: 'variant2',
  title: 'Zanahoria',
  description: 'Fresca',
};
