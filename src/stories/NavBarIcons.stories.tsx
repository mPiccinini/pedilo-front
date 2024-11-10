import NavBar from '@/components/NavBar/NavBarComponent';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/NavBar',
  component: NavBar,
  argTypes: {
    backgroundColor: {
      options: ['bg-white', 'bg-gray-100', 'bg-blue-200', 'bg-green-300'],
      control: {
        type: 'select',
      },
    },
    variant: {
      options: ['variant1', 'variant2', 'variant3', 'variant4', 'variant5'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Variant1: Story = {
  args: {
    backgroundColor: 'bg-white',
    variant: 'variant1',
  },
  render: (args) => <NavBar {...args} />,
};

export const Variant2: Story = {
  args: {
    backgroundColor: 'bg-gray-100',
    variant: 'variant2',
  },
  render: (args) => <NavBar {...args} />,
};

export const Variant3: Story = {
  args: {
    backgroundColor: 'bg-blue-200',
    variant: 'variant3',
  },
  render: (args) => <NavBar {...args} />,
};

export const Variant4: Story = {
  args: {
    backgroundColor: 'bg-green-300',
    variant: 'variant4',
  },
  render: (args) => <NavBar {...args} />,
};

export const Variant5: Story = {
  args: {
    backgroundColor: 'bg-white',
    variant: 'variant5',
  },
  render: (args) => <NavBar {...args} />,
};