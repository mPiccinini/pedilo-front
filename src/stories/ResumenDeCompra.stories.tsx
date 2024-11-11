import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ResumenDeCompra from '@/components/ResumenDeCompra';

// Configuración de Storybook para el componente
export default {
  title: 'Components/ResumenDeCompra',
  component: ResumenDeCompra,
  argTypes: {
    labelsLeft: { control: 'array' },
    labelsRight: { control: 'array' },
    footerTitles: { control: 'array' },
  },
} as ComponentMeta<typeof ResumenDeCompra>;

// Plantilla para crear historias
const Template: ComponentStory<typeof ResumenDeCompra> = (args) => <ResumenDeCompra {...args} />;

// Ejemplo de historia con datos de ejemplo
export const Default = Template.bind({});
Default.args = {
  labelsLeft: ['Label1', 'Label1', 'Label1', 'Label1'],
  labelsRight: ['Label1', 'Label1', 'Label1', 'Label1'],
  footerTitles: ['Title2', 'Title2'],
};
