import { Meta, StoryObj } from '@storybook/react';
import TopBarComponent from '@/components/topBars/TopBarComponent';

const meta: Meta = {
  title: 'Components/TopBar',
  component: TopBarComponent,
  argTypes: {
    backgroundColor: {
      options: ['bg-white', 'bg-gray-100', 'bg-blue-200', 'bg-green-300'],
      control: {
        type: 'select',
      },
    },
    variant: {
      options: ['variant1', 'variant2', 'variant3'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TopBarComponent>;

export const Variant1: Story = {
  args: {
    backgroundColor: 'bg-white',
    title: 'Title',
    variant: 'variant1',
  },
  render: (args) => <TopBarComponent {...args} />,
};

export const Variant2: Story = {
  args: {
    backgroundColor: 'bg-gray-100',
    title: 'Title',
    variant: 'variant2',
  },
  render: (args) => <TopBarComponent {...args} />,
};

export const Variant3: Story = {
  args: {
    backgroundColor: 'bg-blue-200',
    title: 'Title',
    variant: 'variant3',
  },
  render: (args) => <TopBarComponent {...args} />,
};