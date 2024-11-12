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
