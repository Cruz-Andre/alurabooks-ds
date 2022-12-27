import React from "react";
import styled from "styled-components";

const BotaoEstilizado = styled.button`
  /* This renders the buttons above... Edit me! */
  background: #EB9B00;
  padding: 16px 32px;
  border: 2px solid #EB9B00;
  color: #fff;
  font-size: 20px;
  font-weight:700;
  cursor: pointer;

  &:hover {
    background: #b87900;
    border: 2px solid #b87900;
  }
`

export const AbBotao = () => {
  return (
    <BotaoEstilizado>Clique Aqui!</BotaoEstilizado>
  )
}