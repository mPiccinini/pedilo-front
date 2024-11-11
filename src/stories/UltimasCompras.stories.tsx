import { Meta, Story } from "@storybook/react";
import UltimasCompras, { UltimasComprasProps } from "@/components/UltimasCompras";

// Definir los metadatos de Storybook para este componente
export default {
  title: "Components/UltimasCompras",
  component: UltimasCompras,
  argTypes: {
    imageSrc: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
} as Meta;

// Crear el template para los diferentes casos
const Template: Story<UltimasComprasProps> = (args) => <UltimasCompras {...args} />;

// Definir el primer caso de historia
export const Default = Template.bind({});
Default.args = {
  imageSrc: "https://via.placeholder.com/77x56.png", // URL de imagen por defecto
  title: "Producto de ejemplo", // Título de ejemplo
  description: "Descripción del producto", // Descripción de ejemplo
};
