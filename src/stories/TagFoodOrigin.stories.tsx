// TagFoodOrigin.stories.tsx
import {Meta, Story} from '@storybook/react';
import TagFoodOrigin, { TagFoodOriginProps } from '@/components/TagFoodOrigin';

export default {
    title: 'Components/TagFoodOrigin',
    component: TagFoodOrigin,
} as Meta;

const Template: Story<TagFoodOriginProps> = (args) => <TagFoodOrigin {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Italiana',
    imageSrc: 'images/comidaitaliana.png',
};
