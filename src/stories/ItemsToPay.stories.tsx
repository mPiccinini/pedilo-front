import { Meta, StoryFn } from '@storybook/react';
import ItemsToPay from '@/components/cart-related/ItemsToPay';
import ItemsToPayProps from '@/components/cart-related/ItemsToPay';

export default {
  title: 'Components/ItemsToPay',
  component: ItemsToPay,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    imageUrl: { control: 'text' },
    text: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<typeof ItemsToPay> = (args) => <ItemsToPay {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://via.placeholder.com/76x56', 
  text: 'Texto', 
};
