import RecipeShowcase from "@/components/RecipeShowcase";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RecipeShowcase> = {
  title: "Components/RecipeShowcase",
  component: RecipeShowcase,
  argTypes: {
    image: {
      control: { type: "text" },
      description: "URL of the recipe image",
      defaultValue: "https://example.com/image.jpg",
    },
    name: {
      control: { type: "text" },
      description: "Name of the recipe",
      defaultValue: "Pato a la Naranja",
    },
    time: {
      control: { type: "text" },
      description: "Time it takes to make the recipe",
      defaultValue: "1hr 25m",
    },
    size: {
      control: { type: "select" },
      options: ["large", "medium", "small"],
      description: "Size of the recipe showcase card",
      defaultValue: "large",
    },
    favourite: {
      control: { type: "boolean" },
      description: "Indicates if the recipe is initially favourited",
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof RecipeShowcase>;

export const Default: Story = {
  args: {
    image: "https://via.placeholder.com/150",
    name: "Pato a la Naranja",
    time: "1hr 25m",
    size: "large",
    favourite: false,
  },
  render: (args) => <RecipeShowcase {...args} />,
};

export const MediumSize: Story = {
  args: {
    image: "https://via.placeholder.com/150",
    name: "Tacos al Pastor",
    time: "30m",
    size: "medium",
    favourite: true,
  },
  render: (args) => <RecipeShowcase {...args} />,
};

export const SmallSize: Story = {
  args: {
    image: "https://via.placeholder.com/150",
    name: "Buñuelos de Espinaca",
    time: "10m",
    size: "small",
    favourite: false,
  },
  render: (args) => <RecipeShowcase {...args} />,
};
