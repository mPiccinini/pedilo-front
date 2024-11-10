import React from "react";
import { Meta, Story } from "@storybook/react";
import CardIngredients from "@/components/CardIngredients";

const meta: Meta = {
  title: "Components/CardIngredients",
  component: CardIngredients,
  argTypes: {
    imageSrc: {
      control: { type: "text" },
      description: "URL de la imagen que se muestra en la tarjeta",
      defaultValue: "https://via.placeholder.com/150",
    },
    variant: {
      control: { type: "select", options: ['variant1', 'variant2'] },
      description: "Define el estilo del corazón",
      defaultValue: "variant1",
    },
    title: {
      control: { type: "text" },
      description: "Título del ingrediente",
      defaultValue: "Ingrediente de prueba",
    },
    description: {
      control: { type: "text" },
      description: "Descripción del ingrediente",
      defaultValue: "Descripción breve del ingrediente",
    },
  },
};

export default meta;

const Template: Story = (args) => <CardIngredients {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: "https://via.placeholder.com/150",
  variant: "variant1",
  title: "Ingrediente de prueba",
  description: "Descripción breve del ingrediente",
};
