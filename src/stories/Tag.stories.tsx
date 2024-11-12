import { StoryFn, Meta } from '@storybook/react';
import Tag from '@/components/Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    text: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['variant1', 'variant2'],
      },
    },
  },
} as Meta<typeof Tag>;

const Template: StoryFn<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Nuevo',
  variant: 'variant1',
};

export const Variant2 = Template.bind({});
Variant2.args = {
  text: 'Nuevo',
  variant: 'variant2',
};