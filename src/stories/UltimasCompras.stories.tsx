import { Meta, Story } from "@storybook/react";
import UltimasCompras, { UltimasComprasProps } from "@/components/UltimasCompras";

export default {
  title: "Components/UltimasCompras",
  component: UltimasCompras,
  argTypes: {
    imageSrc: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
} as Meta;

const Template: Story<UltimasComprasProps> = (args) => <UltimasCompras {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: "https://via.placeholder.com/77x56.png", 
  title: "Producto de ejemplo", 
  description: "Descripción del producto", 
};
