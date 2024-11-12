import {Meta, StoryFn} from '@storybook/react';
import TagFoodOrigin, { TagFoodOriginProps } from '@/components/TagFoodOrigin';

export default {
    title: 'Components/TagFoodOrigin',
    component: TagFoodOrigin,
} as Meta;

const Template: StoryFn<TagFoodOriginProps> = (args) => <TagFoodOrigin {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Italiana',
    imageSrc: 'images/comidaitaliana.png',
};
