// Carousel.stories.tsx
import { Meta, Story } from '@storybook/react';
import Carousel from '@/components/Carousel';
import GenericRecipeCard from '@/components/GenericRecipeCard';
import IngredientCard from '@/components/CardIngredients';

export default {
    title: 'Components/Carousel',
    component: Carousel,
} as Meta;

const Template: Story = () => (
    <Carousel width="412px">
        <GenericRecipeCard
            imageSrc="https://via.placeholder.com/129x144"
            heartVariant="variant1"
            starVariants={["variant1", "variant1", "variant1", "variant1", "variant1"]}
            title="Escalopes de pescado"
            prepTime="30"
            difficultyLevel="Nivel de dificultad"
            actionTexts={["De mar", "Light"]}
        />
        <IngredientCard name="Tomate" description="Redondo y fresco" />
        <GenericRecipeCard
            imageSrc="https://via.placeholder.com/129x144"
            heartVariant="variant2"
            starVariants={["variant2", "variant2", "variant2", "variant2", "variant2"]}
            title="Pejerrey al limón"
            prepTime="25"
            difficultyLevel="Nivel de dificultad"
            actionTexts={["De mar", "Fácil"]}
        />
        <IngredientCard name="Lechuga" description="Verde y crujiente" />
    </Carousel>
);

export const Default = Template.bind({});
Default.args = {};
