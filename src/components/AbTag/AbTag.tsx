import React from "react";
import styled from "styled-components";

export interface AbTagProps {
  texto: string
}

const TagEstilizado = styled.div`
  background: #EB9B00;
  padding: 24px 32px;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  display: inline-block;
  
`

export const AbTag = ({ texto }: AbTagProps) => {
  return (
    <TagEstilizado>
      {texto}
    </TagEstilizado>
  )
}