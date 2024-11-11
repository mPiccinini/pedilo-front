import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardIngredients from '@/components/CardIngredients';
import CardIngredientsProps from '@/components/CardIngredients';

export default {
  title: 'Components/CardIngredients',
  component: CardIngredients,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['variant1', 'variant2'],
    },
  },
} as Meta;

const Template: StoryFn<typeof CardIngredientsProps> = (args:any) => <CardIngredients {...args} />;

export const Variant1 = Template.bind({});
Variant1.args = {
  imageSrc: 'https://via.placeholder.com/109x80', 
  variant: 'variant1',
  title: 'Tomate',
  description: 'Redondo',
};

export const Variant2 = Template.bind({});
Variant2.args = {
  imageSrc: 'https://via.placeholder.com/109x80', 
  variant: 'variant2',
  title: 'Zanahoria',
  description: 'Fresca',
};
