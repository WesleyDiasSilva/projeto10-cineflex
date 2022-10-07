import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Form from "../Components/Form";
import Seat from "../Components/Seat";
import Title from "../Components/Title";

function SeatsPage(props) {
  const [seatsSelected, setSeatsSelected] = React.useState([]);
  const [seatsSelectedNumber, setSeatsSelectedNumber] = React.useState([])
  const [seats, setSeats] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [nameBuyer, setNameBuyer] = React.useState("");
  const [cpfBuyer, setCpfBuyer] = React.useState("");

  const { idSession } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`
      )
      .then((res) => {
        props.setDateTime({
          date: res.data.day.date,
          time: res.data.name
        })
        setSeats(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Title text="Selecione o(s) assento(s)" />
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <ContainerSeats>
          {seats.seats.map((i) => (
            <Seat
              seatsSelectedNumber={seatsSelectedNumber}
              setSeatsSelectedNumber={setSeatsSelectedNumber}
              key={i.id}
              name={i.name}
              seatsSelected={seatsSelected}
              setSeatsSelected={setSeatsSelected}
              id={i.id}
              available={i.isAvailable}
            />
          ))}
        </ContainerSeats>
      )}
      <Subtitle>
        <Seat special="#1AAE9E" subtitle="Selected" />
        <Seat special="#C3CFD9" subtitle="Avaible" />
        <Seat special="#FBE192" subtitle="Unavailable" />
      </Subtitle>
      <Form
        setStatusConfirmed={props.setStatusConfirmed}
        seatsSelectedNumber={seatsSelectedNumber}
        setOrder={props.setOrder}
        setCpfBuyer={setCpfBuyer}
        cpfBuyer={cpfBuyer}
        setNameBuyer={setNameBuyer}
        nameBuyer={nameBuyer}
        data={seats.movie}
      />
      <Footer
        image={seats.movie ? seats.movie.posterURL : ""}
        MovieName={seats.movie ? seats.movie.title : ""}
        session={`${seats.day ? seats.day.weekday : ""} - ${
          seats.name ? seats.name : ""
        }`}
      />
    </div>
  );
}

export default SeatsPage;

const Subtitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  margin-bottom: 40px;
`;

const ContainerSeats = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  gap: 3px;
  align-items: center;
  margin: 30px 15px 0 15px;
`;
