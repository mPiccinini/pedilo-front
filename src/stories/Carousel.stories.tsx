// Carousel.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import Carousel from '@/components/carrousel/Carousel';
import GenericRecipeCard from '@/components/GenericRecipeCard';
import IngredientCard from '@/components/CardIngredients';
import FilterChip from '@/components/FilterChip';

export default {
    title: 'Components/Carousel',
    component: Carousel,
} as Meta;

const Template: StoryFn = () => (
    <div>
        {/* Primer carrusel con tarjetas de recetas e ingredientes */}
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
            <IngredientCard 
                title="Tomate" 
                variant='variant1'
                imageSrc='https://via.placeholder.com/150'
                description="Redondo y fresco" 
            />
            <GenericRecipeCard
                imageSrc="https://via.placeholder.com/129x144"
                heartVariant="variant2"
                starVariants={["variant2", "variant2", "variant2", "variant2", "variant2"]}
                title="Pejerrey al limón"
                prepTime="25"
                difficultyLevel="Nivel de dificultad"
                actionTexts={["De mar", "Fácil"]}
            />
            <IngredientCard
                title="Lechuga" 
                variant='variant2'
                imageSrc='https://via.placeholder.com/150' 
                description="Verde y crujiente" 
            />
        </Carousel>

        {/* Segundo carrusel con FilterChips */}
        <Carousel width="412px">
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
