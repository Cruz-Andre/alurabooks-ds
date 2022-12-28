import React from "react";
import { AbInputQuantidade, AbInputQuantidadeProps } from '../src/components/AbInputQuantidade/AbInputQuantidade'
import { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
  title: 'Componentes/AbInputQuantidade',
  component: AbInputQuantidade
} as ComponentMeta<typeof AbInputQuantidade>

const Template: ComponentStory<typeof AbInputQuantidade> = (args) => <AbInputQuantidade {...args}/>

export const AbInputQuantidadeComponent = Template.bind({})
AbInputQuantidadeComponent.args = {
  titulo: 'Quantidade',
  botaoMenos: '-',
  botaoMais: '+'
} as AbInputQuantidadeProps