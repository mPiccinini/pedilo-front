import { Meta, StoryFn } from "@storybook/react";
import GenericRecipeCard from "@/components/GenericRecipeCard"; 

const meta: Meta = {
  title: "Components/GenericRecipeCard",
  component: GenericRecipeCard,
  argTypes: {
    imageSrc: {
      control: { type: "text" },
      description: "URL de la imagen de la receta",
      defaultValue: "https://via.placeholder.com/129x144",
    },
    heartVariant: {
      control: { type: "select" },
      options: ["variant1", "variant2"],
      description: "Variante del icono de corazón",
      defaultValue: "variant1",
    },
    starVariants: {
      control: { type: "object" },
      description: "Variantes de las estrellas (con un máximo de 5).",
      defaultValue: ["variant1", "variant1", "variant1", "variant1", "variant1"],
    },
    title: {
      control: { type: "text" },
      description: "Título de la receta",
      defaultValue: "Tarta de Manzana",
    },
    prepTime: {
      control: { type: "text" },
      description: "Tiempo de preparación de la receta",
      defaultValue: "30",
    },
    difficultyLevel: {
      control: { type: "text" },
      description: "Nivel de dificultad de la receta",
      defaultValue: "Nivel de dificultad:",
    },
    actionTexts: {
      control: { type: "object" },
      description: "Acciones disponibles para la receta (por ejemplo, agregar a favoritos)",
      defaultValue: ["healthy", "easy"],
    },
  },
};

export default meta;

export const Default: StoryFn = {
  args: {
    imageSrc: "https://via.placeholder.com/129x144",
    heartVariant: "variant1",
    starVariants: ["variant1", "variant1", "variant1", "variant1", "variant1"],
    title: "Tarta de Manzana",
    prepTime: "30",
    difficultyLevel: "Nivel de dificultad",
    actionTexts: ["Ver receta", "Añadir a favoritos"],
  },
};
