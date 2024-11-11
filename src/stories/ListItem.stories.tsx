import { Meta, StoryFn } from '@storybook/react';
import ListItem from '@/components/ListItem';
import ListItemProps  from '@/components/ListItem';

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

const Template: StoryFn<typeof ListItemProps> = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'texto',
};