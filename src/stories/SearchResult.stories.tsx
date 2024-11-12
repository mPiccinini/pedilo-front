import { Meta, StoryFn } from "@storybook/react";
import SearchResult from "@/components/search-&-filter/SearchResult"; 

const meta: Meta<typeof SearchResult> = {
  title: "Components/SearchResult",
  component: SearchResult,
  argTypes: {
    title: {
      control: "text",
      defaultValue: "Pollo a la Naranja",
      description: "El título principal del resultado de búsqueda",
    },
    subtitle: {
      control: "text",
      defaultValue: "Receta",
      description: "El subtítulo o tipo del resultado de búsqueda",
    },
  },
};

export default meta;

const Template: StoryFn<typeof SearchResult> = (args) => <SearchResult {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Pollo a la Naranja",
  subtitle: "Receta",
};
