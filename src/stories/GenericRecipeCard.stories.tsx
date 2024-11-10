import { Meta, Story } from '@storybook/react';
import GenericRecipeCard from '@/components/GenericRecipeCard';

export default {
  title: 'Components/GenericRecipeCard',
  component: GenericRecipeCard,
} as Meta;

const Template: Story = (args) => <GenericRecipeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://via.placeholder.com/150',  
  heartVariant: 'variant1',  
  starVariants: ['variant1', 'variant2', 'variant1', 'variant2', 'variant1'],  
  title: 'Delicious Recipe',  
  prepTime: '20',  
  difficultyLevel: 'Medium', 
  actionTexts: ['Text 1', 'Text 2'],  
};
