import React from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import axios from "axios";

function Form({
  setCpfBuyer,
  cpfBuyer,
  setNameBuyer,
  nameBuyer,
  seatsSelectedNumber,
  setOrder,
  data,
  setStatusConfirmed,
  date,
  time
}) {
  const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";

  const body = { ids: seatsSelectedNumber, name: nameBuyer, cpf: cpfBuyer };

  function sendRequest() {
    const promise = axios.post(URL, body);
    setOrder({
      date:date,
      time:time,
      movie: data.title,
      tickets: [seatsSelectedNumber],
      buyer: {
        name:nameBuyer,
        cpf: cpfBuyer
      }
    })
    promise.then((res) => {
      setStatusConfirmed(true)
    });

    promise.catch((error) => {
      console.log(error)
    })
  }

  return (
    <ContainerForm>
      <BoxInput>
        <Label>Nome do Comprador</Label>
        <Input
          value={nameBuyer}
          required
          onChange={(e) => setNameBuyer(e.target.value)}
        />
      </BoxInput>
      <BoxInput>
        <Label>CPF do Comprador</Label>
        <Input
          required
          value={cpfBuyer}
          onChange={(e) => setCpfBuyer(e.target.value)}
        />
      </BoxInput>
      <Link to="/sucesso">
        <Button onClick={sendRequest} width="225" text="Reservar assento(s)" />
      </Link>
    </ContainerForm>
  );
}

export default Form;

const ContainerForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-family: Roboto;
  font-size: 18px;
`;

const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 50px;
  width: 327px;
  height: 31px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
`;
