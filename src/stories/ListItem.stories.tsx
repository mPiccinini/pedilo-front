import { Meta, Story } from '@storybook/react';
import ListItem from '@/components/ListItem';
import { ListItemProps } from '@/components/ListItem';

export default {
  title: 'Components/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: { control: 'text' }, 
  },
} as Meta;

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'texto',
};
