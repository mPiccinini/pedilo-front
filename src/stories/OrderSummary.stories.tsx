import OrderSummary from "@/components/cart-related/OrderSummary";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof OrderSummary> = {
  title: "Components/OrderSummary",
  component: OrderSummary,
  argTypes: {
    items: {
      control: { type: "object" },
      description: "List of items with their names and prices",
      defaultValue: [
        { name: "Productos", price: 30900 },
        { name: "Costo de envío", price: 5000 },
        { name: "Descuentos", price: -1200 },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OrderSummary>;

export const Default: Story = {
  args: {
    items: [
      { name: "Productos", price: 30900 },
      { name: "Costo de envío", price: 5000 },
      { name: "Descuentos", price: -1200 },
    ],
  },
  render: (args) => <OrderSummary {...args} />,
};