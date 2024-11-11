import NavBar from '@/components/navBar/NavBarComponent';
import { Meta, StoryObj } from '@storybook/react';


const meta: Meta = {
  title: 'Components/NavBar',
  component: NavBar,
  argTypes: {
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
    variant: 'variant1',
  },
  render: (args) => <NavBar {...args} />,
};

export const Variant2: Story = {
  args: {
    variant: 'variant2',
  },
  render: (args) => <NavBar {...args} />,
};

export const Variant3: Story = {
  args: {
    variant: 'variant3',
  },
  render: (args) => <NavBar {...args} />,
};

export const Variant4: Story = {
  args: {
    variant: 'variant4',
  },
  render: (args) => <NavBar {...args} />,
};

export const Variant5: Story = {
  args: {
    variant: 'variant5',
  },
  render: (args) => <NavBar {...args} />,
};