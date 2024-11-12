import { Meta, StoryObj } from '@storybook/react';
import ItemQuantitySelector from '@/components/cart-related/ItemQuantitySelector';

const meta: Meta<typeof ItemQuantitySelector> = {
  title: 'Components/ItemQuantitySelector',
  component: ItemQuantitySelector,
  argTypes: {
    initialGrams: {
      control: { type: 'number' },
      description: 'Initial amount of grams',
      defaultValue: 100,
    },
    pricePerGram: {
      control: { type: 'number' },
      description: 'Price per gram',
      defaultValue: 60,
    },
    stepOfGrams: {
      control: { type: 'number' },
      description: 'Amount of grams to add or subtract per click',
      defaultValue: 100,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ItemQuantitySelector>;

export const Default: Story = {
  args: {
    initialGrams: 100,
    pricePerGram: 60,
    stepOfGrams: 100,
  },
  render: (args) => <ItemQuantitySelector {...args} />,
};