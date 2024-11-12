// Carousel.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import Carousel from '@/components/carousel/Carousel';
import FilterChip from '@/components/FilterChip';

export default {
    title: 'Components/Carousel',
    component: Carousel,
} as Meta;

const Template: StoryFn = () => (
    <div className={'w-[412px]'}>
        <Carousel width="412px">
            <FilterChip label="Todo" variant="default" />
            <FilterChip label="Vegetales" variant="selected" />
            <FilterChip label="Frutas" variant="default" />
            <FilterChip label="Proteínas" variant="default" />
            <FilterChip label="Carbohidratos" variant="default" />
            <FilterChip label="Todo" variant="default" />
            <FilterChip label="Vegetales" variant="selected" />
            <FilterChip label="Frutas" variant="default" />
            <FilterChip label="Proteínas" variant="default" />
            <FilterChip label="Carbohidratos" variant="default" />
        </Carousel>
    </div>
);

export const Default = Template.bind({});
Default.args = {};
