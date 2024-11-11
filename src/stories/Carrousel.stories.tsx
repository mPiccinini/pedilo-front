import { Meta, StoryObj } from "@storybook/react";
import Carrousel from "@/components/carrousel/Carrousel";
import CardIngCarrousel from "@/components/CardIngCarrousel";

const meta: Meta<typeof Carrousel> = {
  title: "Components/Carrousel",
  component: Carrousel,
};

export default meta;

type Story = StoryObj<typeof Carrousel>;

export const Default: Story = {
  render: () => (
    <div className="w-[300px] overflow-hidden"> {/* Contenedor que muestra solo 3 tarjetas */}
      <Carrousel>
        <CardIngCarrousel
          imageSrcs={[
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150"
          ]}
          variants={["variant1", "variant2", "variant1", "variant2", "variant1"]}
          titles={["Tomate", "Zanahorias", "Albahaca", "Cebolla", "Ajo"]}
          descriptions={["Redondo", "Corte fino", "Fresca", "Picante", "Intenso"]}
        />
      </Carrousel>
    </div>
  ),
};
