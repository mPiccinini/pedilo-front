import { ComponentStory, ComponentMeta } from '@storybook/react';
import ResumenDeCompra from '@/components/ResumenDeCompra';

export default {
  title: 'Components/ResumenDeCompra',
  component: ResumenDeCompra,
  argTypes: {
    labelsLeft: { control: 'array' },
    labelsRight: { control: 'array' },
    footerTitles: { control: 'array' },
  },
} as ComponentMeta<typeof ResumenDeCompra>;

const Template: ComponentStory<typeof ResumenDeCompra> = (args) => <ResumenDeCompra {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelsLeft: ['Label1', 'Label1', 'Label1', 'Label1'],
  labelsRight: ['Label1', 'Label1', 'Label1', 'Label1'],
  footerTitles: ['Title2', 'Title2'],
};
