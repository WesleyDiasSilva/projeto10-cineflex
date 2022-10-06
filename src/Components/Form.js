import React from 'react'
import styled from 'styled-components'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'

function Form() {
  return (
    <ContainerForm>
      <BoxInput>
        <Label>Nome do Comprador</Label>
        <Input />
      </BoxInput>
      <BoxInput>
        <Label>CPF do Comprador</Label>
        <Input />
      </BoxInput>
      <Link to='/sucesso'>
        <Button width='225' text='Reservar assento(s)'/>
      </Link>
    </ContainerForm>
  )
}

export default Form

const ContainerForm = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Label = styled.label`
  margin-bottom: 10px;
  font-family: Roboto;
  font-size: 18px;
`

const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  margin-bottom: 50px;
  width: 327px;
  height: 31px;
  border-radius: 5px;
  border: 1px solid #D4D4D4;
`