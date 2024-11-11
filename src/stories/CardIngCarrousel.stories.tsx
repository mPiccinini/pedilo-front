import { Meta, StoryObj } from "@storybook/react";
import CardIngCarrousel from "@/components/CardIngCarrousel";  

const meta: Meta<typeof CardIngCarrousel> = {
  title: "Components/CardIngCarrousel",
  component: CardIngCarrousel,
  argTypes: {
    imageSrcs: {
      control: { type: "object" },  
      description: "Array de URLs de imágenes para las tarjetas",
      defaultValue: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ],
    },
    variants: {
      control: { type: "object" },  
      description: "Array de variantes para los corazones de las tarjetas",
      defaultValue: ["variant1", "variant1", "variant2"],
    },
    titles: {
      control: { type: "object" },
      description: "Array de títulos para las tarjetas",
      defaultValue: ["Bife de Chorizo", "Asado", "Vacío"],
    },
    descriptions: {
      control: { type: "object" },  
      description: "Array de descripciones para las tarjetas",
      defaultValue: ["Delicioso corte de carne", "Ideal para parrilladas", "Corte suave y tierno"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardIngCarrousel>;

export const Default: Story = {
  args: {
    imageSrcs: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ],
    variants: ["variant1", "variant2", "variant1"],
    titles: ["Tomate", "Zanahorias", "Albahaca"],
    descriptions: ["Redondo", "Corte fino", "Fresca"],
  },
};
