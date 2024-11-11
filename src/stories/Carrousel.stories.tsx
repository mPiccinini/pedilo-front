import { Meta, StoryObj } from "@storybook/react";
import Carrousel from "@/components/carrousel/Carrousel";
import CardIngredients from "@/components/CardIngredients";
import GenericRecipeCard from "@/components/GenericRecipeCard";

const meta: Meta<typeof Carrousel> = {
  title: "Components/Carrousel",
  component: Carrousel,
};

export default meta;

type Story = StoryObj<typeof Carrousel>;

export const Default: Story = {
  render: () => (
    <div className="w-[360px] overflow-hidden"> 
      <Carrousel>
        <CardIngredients
          imageSrc={"https://via.placeholder.com/129x144"}
          variant="variant1"
          title="Sample Title"
          description="Sample Description"
        />
        <CardIngredients
          imageSrc={"https://via.placeholder.com/129x144"}
          variant="variant1"
          title="Sample Title"
          description="Sample Description"
        />
        <CardIngredients
          imageSrc={"https://via.placeholder.com/129x144"}
          variant="variant1"
          title="Sample Title"
          description="Sample Description"
        />
        <CardIngredients
          imageSrc={"https://via.placeholder.com/129x144"}
          variant="variant1"
          title="Sample Title"
          description="Sample Description"
        />
        <CardIngredients
          imageSrc={"https://via.placeholder.com/129x144"}
          variant="variant1"
          title="Sample Title"
          description="Sample Description"
        />
        <GenericRecipeCard
            imageSrc="https://via.placeholder.com/129x144"
            heartVariant="variant2"
            starVariants={["variant2", "variant2", "variant2", "variant2", "variant2"]}
            title="Pejerrey a la plancha"
            prepTime="25"
            difficultyLevel="Nivel de dificultad"
            actionTexts={["De mar", "Fácil"]}
        />
        <GenericRecipeCard
            imageSrc="https://via.placeholder.com/129x144"
            heartVariant="variant2"
            starVariants={["variant2", "variant2", "variant2", "variant2", "variant2"]}
            title="Pejerrey a la plancha"
            prepTime="25"
            difficultyLevel="Nivel de dificultad"
            actionTexts={["De mar", "Fácil"]}
        />

      </Carrousel>
    </div>
  ),
};
