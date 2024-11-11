import OrderSummary from "@/components/OrderSummary";
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

export const WithDiscount: Story = {
  args: {
    items: [
      { name: "Productos", price: 25000 },
      { name: "Costo de envío", price: 3000 },
      { name: "Descuentos", price: -500 },
    ],
  },
  render: (args) => <OrderSummary {...args} />,
};

export const NoDiscount: Story = {
  args: {
    items: [
      { name: "Productos", price: 40000 },
      { name: "Costo de envío", price: 7000 },
      { name: "Descuentos", price: 0 },
    ],
  },
  render: (args) => <OrderSummary {...args} />,
};
