import { Meta, StoryObj } from "@storybook/react";
import InfoCard from "@/components/InfoCard";

const meta: Meta<typeof InfoCard> = {
  title: "Components/InfoCard",
  component: InfoCard,
  argTypes: {
    labelTopLeft: {
      control: "text",
      defaultValue: "Texto superior izquierda",
    },
    labelBottomLeft: {
      control: "text",
      defaultValue: "Texto inferior izquierda",
    },
    labelTopRight: {
      control: "text",
      defaultValue: "Texto superior derecha",
    },
    labelBottomRight: {
      control: "text",
      defaultValue: "Texto inferior derecha",
    },
  },
};

export default meta;

type Story = StoryObj<typeof InfoCard>;

// Story para la Variante 1
export const Variant1: Story = {
  args: {
    variant: "variant1",
    labelTopLeft: "Método de Pago",
    labelBottomLeft: "Descuento",
    labelTopRight: "Total: $1500",
    labelBottomRight: "Descuento: $500",
  },
  render: (args) => <InfoCard {...args} />,
};

// Story para la Variante 2
export const Variant2: Story = {
  args: {
    variant: "variant2",
    labelTopLeft: "Ubicación",
    labelBottomLeft: "Tiempo de entrega",
    labelTopRight: "Cambiar",
    labelBottomRight: "30 - 45 min",
  },
  render: (args) => <InfoCard {...args} />,
};
