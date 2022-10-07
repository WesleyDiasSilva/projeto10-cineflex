import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

function ConfirmationPage({ order, dateTime, ...props }) {

  console.log(order)
  console.log(order.tickets)
  return (
    <div>
      <Title color="success" text="Pedido feito com sucesso!" />
       {props.statusConfirmed ? <ContainerConfirmation>
        <ContainerDetails>
          <Section>
            <TitleSection>Filme e sessão</TitleSection>
            <MovieName>{order.movie}</MovieName>
            <MovieDate>{dateTime.date} {dateTime.time}</MovieDate>
          </Section>
          <Section>
            <TitleSection>Ingressos</TitleSection>
            
            {order.tickets[0].map((item) => <SeatNumber key={item}>Assento {item}</SeatNumber>)}
            
           
            
            
          </Section>
          <Section>
            <TitleSection>Comprador</TitleSection>
            <BuyerName>Nome: {order.buyer.name}</BuyerName>
            <BuyerCPF>CPF: {order.buyer.cpf}</BuyerCPF>
          </Section>
        </ContainerDetails>
        <Link to="/">
          <Button width="225" text="Voltar pra Home" />
        </Link>
      </ContainerConfirmation> : <div>Carregando...</div>}
      
    </div>
  );
}

export default ConfirmationPage;

const ContainerConfirmation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerDetails = styled.div`
  margin-bottom: 110px;
  width: 100%;
  padding: 20px;
  margin-left: 20px;
`;

const Section = styled.section`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

const TitleSection = styled.h1`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
`;

const MovieName = styled.div`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 300;
`;

const MovieDate = styled.span`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 300;
`;

const SeatNumber = styled.span`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 300;
`;

const BuyerName = styled.span`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 300;
`;

const BuyerCPF = styled.span`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 300;
`;
