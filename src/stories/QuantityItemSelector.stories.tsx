import { Meta, StoryObj } from '@storybook/react';
import ItemQuantitySelector from '@/components/ItemQuantitySelector';

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

export const SmallStep: Story = {
  args: {
    initialGrams: 50,
    pricePerGram: 50,
    stepOfGrams: 10,
  },
  render: (args) => <ItemQuantitySelector {...args} />,
};

export const LargeStep: Story = {
  args: {
    initialGrams: 200,
    pricePerGram: 75,
    stepOfGrams: 200,
  },
  render: (args) => <ItemQuantitySelector {...args} />,
};
