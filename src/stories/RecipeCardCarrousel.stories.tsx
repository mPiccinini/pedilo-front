import { Meta } from '@storybook/react';
import CardRecipeCarrousel from '@/components/CardRecipeCarrousel';

const meta: Meta = {
  title: 'Components/CardRecipeCarrousel',
  component: CardRecipeCarrousel,
  argTypes: {
    cardsData: {
      control: 'object',
    },
  },
};

export default meta;

 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Template: (args: never) => JSX.Element = (args) => <CardRecipeCarrousel {...args} />;

export const Default = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
Default.args = {
  cardsData: [
    {
      imageSrc: "https://via.placeholder.com/129x144",
      heartVariant: "variant1",
      starVariants: ["variant1", "variant1", "variant1", "variant1", "variant1"],
      title: "Tarta de Manzana",
      prepTime: "30",
      difficultyLevel: "Nivel de dificultad",
      actionTexts: ["Ver receta", "Añadir a favoritos"],
    },
    {
      imageSrc: "https://via.placeholder.com/129x144",
      heartVariant: "variant2",
      starVariants: ["variant2", "variant2", "variant2", "variant2", "variant2"],
      title: "Tarta de Frutilla",
      prepTime: "45",
      difficultyLevel: "Nivel de dificultad",
      actionTexts: ["Ver receta", "Añadir a favoritos"],
    },
    {
      imageSrc: "https://via.placeholder.com/129x144",
      heartVariant: "variant1",
      starVariants: ["variant1", "variant1", "variant1", "variant1", "variant1"],
      title: "Tarta de Chocolate",
      prepTime: "60",
      difficultyLevel: "Nivel de dificultad",
      actionTexts: ["Ver receta", "Añadir a favoritos"],
    },
  ],
};