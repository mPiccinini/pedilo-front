import { Meta, StoryObj} from "@storybook/react";
import AgregarACompra from "@/components/recipe-ingredient-cards/AgregarACompra";
import {ComponentProps} from "react";

type StoryProps = ComponentProps<typeof AgregarACompra>;

const meta: Meta<StoryProps> = {
  title: "Components/AgregarACompra",
  component: AgregarACompra,
  argTypes: {
    imageSrc: {
      control: { type: "text" },
      description: "URL de la imagen del producto",
      defaultValue: "https://via.placeholder.com/150",
    },
    title: {
      control: { type: "text" },
      description: "Título de la tarjeta",
      defaultValue: "Bife de Chorizo",
    },
    description: {
      control: { type: "text" },
      description: "Descripción del producto",
      defaultValue: "Delicioso corte de carne",
    },
  },
};

type Story = StoryObj<StoryProps>;

export default meta;

export const Default: Story = {
  args: {
    imageSrc: "https://via.placeholder.com/150",
    title: "Tomate",
    description: "Fresco",
  },
};
