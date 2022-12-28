import React from "react";
import { ComponentMeta } from '@storybook/react'
import { Card } from '../src/components/Card/Card'

export default {
  title: 'Componentes/Card',
  component: Card
} as ComponentMeta<typeof Card>

export const CardComponent = () => {
  return (
    <Card>
      <h1>Sobre o Livro</h1>
    </Card>
  )
}