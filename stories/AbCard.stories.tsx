import React from "react";
import { ComponentMeta } from '@storybook/react'
import { AbCard } from '../src/components/AbCard/AbCard'

export default {
  title: 'Componentes/AbCard',
  component: AbCard
} as ComponentMeta<typeof AbCard>

export const CardComponent = () => {
  return (
    <AbCard>
      <h1>Sobre o Livro</h1>
    </AbCard>
  )
}