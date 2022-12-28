import React from 'react';
import styled from 'styled-components';

const DivEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  
  label {
    font-size: 16px;
    font-weight: 700;
    color: #002f52;
    font-family: sans-serif;
    margin-left: 16px;
  }

  input {
    padding: 10px 24px;
    border: 1px solid #002F52;
    border-radius: 24px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    color: #002F52;
    color:placeholder #A4A4A4;
    
  }

`

export interface AbCampoTextoProps {
  tituloLabel: string
  placeholder: string
  value: string
  type?: 'text' | 'email' | 'password' | 'date'
  onChange: (value: string) => void
}

export const AbCampoTexto = ({ tituloLabel, placeholder, value, type, onChange  }: AbCampoTextoProps) => {

  return (
    <DivEstilizada>
      <label>{tituloLabel}</label>
      <input placeholder={placeholder} value={value} type={type} onChange={evento => onChange(evento.target.value)} />
    </DivEstilizada>
  )
}

