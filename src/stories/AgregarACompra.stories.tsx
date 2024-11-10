import React from "react";
import { Meta, Story } from "@storybook/react";
import AgregarACompra from "@/components/AgregarACompra"; 

const meta: Meta = {
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

export default meta;

export const Default = {
  args: {
    imageSrc: "https://via.placeholder.com/150",
    title: "Tomate",
    description: "Fresco",
  },
};
