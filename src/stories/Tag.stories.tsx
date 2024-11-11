import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag from '@/components/Tag'; 

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    text: { control: 'text' }, 
    backgroundColor: { control: 'color' }, 
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Nuevo', 
  backgroundColor: '#EBFCFF', 
};

