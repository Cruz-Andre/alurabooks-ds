import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbTag, AbTagProps } from '../src/components/AbTag/AbTag'

export default {
  title: 'Componentes/AbTag',
  component: AbTag
} as ComponentMeta<typeof AbTag>

// export const CardComponent = () => {
//   return (
//     <AbTag texto="android"/>
//   )
// }

const Template: ComponentStory<typeof AbTag> = (args) => <AbTag {...args} />

export const Primario = Template.bind({})
Primario.args = {
  texto: 'Tag'
} as AbTagProps