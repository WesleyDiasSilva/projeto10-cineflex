import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'

function ConfirmationPage() {
  return (
    <div>
      <Title color='success' text='Pedido feito com sucesso!'/>
      <ContainerConfirmation>
        <ContainerDetails>
          <Section>
            <TitleSection>Filme e sessão</TitleSection>
            <MovieName>Enola Holmes</MovieName>
            <MovieDate>24/06/2021 15:00</MovieDate>
          </Section>
          <Section>
            <TitleSection>Ingressos</TitleSection>
            <Seat>Assento 15</Seat>
            <Seat>Assento 16</Seat>
          </Section>
          <Section>
            <TitleSection>Comprador</TitleSection>
            <BuyerName>Nome: João da Silva Sauro</BuyerName>
            <BuyerCPF>CPF: 123.456.789-10</BuyerCPF>
          </Section>
        </ContainerDetails>
        <Link to='/'>
          <Button width='225' text='Voltar pra Home'/>
        </Link>
      </ContainerConfirmation>
    </div>
  )
}

export default ConfirmationPage

const ContainerConfirmation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const ContainerDetails = styled.div`
  margin-bottom: 110px;
  width: 100%;
  padding: 20px;
  margin-left: 20px;
`

const Section = styled.section`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`

const TitleSection = styled.h1`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
`

const MovieName = styled.div`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 300;
`

const MovieDate = styled.span`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 300;
`

const Seat = styled.span`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 300;
`

const BuyerName = styled.span`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 300;
`

const BuyerCPF = styled.span`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 300;
`