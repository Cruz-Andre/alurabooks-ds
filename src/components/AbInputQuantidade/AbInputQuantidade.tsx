import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const DivEstilizado = styled.div`
  width: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LabelEstilizada = styled.label`
  color: #002F52;
  font-weight: 700;
  font-size: 16px;
  font-family: sans-serif;
  margin-bottom: 8px;
  
`

const QuantidadeContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`

const BotaoEstilizado = styled.button`
  width: 28px;
  height: 28px;
  background-color: #002F52;
  border-radius: 20px;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  color: #FFF;
  font-size: 24px;
  font-weight: 400;
`

const QuantidadeEstilizado = styled.span`
  font-size: 18px;
  font-weight: 400;
  font-family: sans-serif;
  background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

`

export interface AbInputQuantidadeProps {
  titulo: string
  botaoMenos: string
  botaoMais: string
  onChange?: (quantidade: number | string) => void
}

export const AbInputQuantidade = ({ titulo, botaoMais, botaoMenos, onChange}: AbInputQuantidadeProps) => {
  const [quantidade, setQuantidade] = useState(1)

  useEffect(() => {
    if (onChange) {
      onChange(Number(quantidade))
    }
  }, [quantidade])

  return (
    <DivEstilizado>
      <LabelEstilizada>{titulo}</LabelEstilizada>
      <QuantidadeContainer>
        <BotaoEstilizado onClick={() => setQuantidade(evento => evento - 1)}>{botaoMenos}</BotaoEstilizado>
        <QuantidadeEstilizado>{quantidade}</QuantidadeEstilizado>
        <BotaoEstilizado onClick={() => setQuantidade(evento => evento + 1)}>{botaoMais}</BotaoEstilizado>
      </QuantidadeContainer>
    </DivEstilizado>
  )
}

