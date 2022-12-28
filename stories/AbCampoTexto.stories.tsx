import React from "react";
import { AbCampoTexto, AbCampoTextoProps } from '../src/components/AbCampoTexto/AbCampoTexto'
import { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
  title: 'Componentes/AbCampoTexto',
  component: AbCampoTexto
} as ComponentMeta<typeof AbCampoTexto>

const Template: ComponentStory<typeof AbCampoTexto> = (args) => <AbCampoTexto {...args} />

export const AbCampoTextoComponent = Template.bind({})
AbCampoTextoComponent.args = {
  tituloLabel: 'E-mail',
  placeholder: 'seuemail@seuprovedor.com.br',
  type: 'email'
} as AbCampoTextoProps