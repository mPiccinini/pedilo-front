// Carousel.stories.tsx
import { Meta, Story } from '@storybook/react';
import Carousel from '../components/Carousel';
import GenericRecipeCard from '../components/GenericRecipeCard';

const IngredientCard = ({ name }: { name: string }) => (
    <div style={{ padding: '20px', backgroundColor: '#FFEFD5', borderRadius: '8px', textAlign: 'center' }}>
        <h3>{name}</h3>
        <p>Some ingredient details...</p>
    </div>
);

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
        <IngredientCard name="Tomate" />
        <GenericRecipeCard
            imageSrc="https://via.placeholder.com/129x144"
            heartVariant="variant2"
            starVariants={["variant2", "variant2", "variant2", "variant2", "variant2"]}
            title="Pejerrey al limón"
            prepTime="25"
            difficultyLevel="Nivel de dificultad"
            actionTexts={["De mar", "Fácil"]}
        />
        <IngredientCard name="Lechuga" />
    </Carousel>
);

export const Default = Template.bind({});
Default.args = {};
