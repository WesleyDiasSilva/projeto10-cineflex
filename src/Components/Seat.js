import React from "react";
import styled from "styled-components";

function Seat({ setSeatsSelected, seatsSelected, setSeatsSelectedNumber,seatsSelectedNumber, ...props }) {
  let [color, setColor] = React.useState("#C3CFD9");

  const stateSeat = props.available;

  function chooseSeat(e) {
    console.log(seatsSelected)
    console.log(seatsSelectedNumber)
    if (stateSeat) {
      if (color === "#1AAE9E") {
        setColor("#C3CFD9");
        setSeatsSelectedNumber([seatsSelectedNumber.filter((item) => item !== e.target.innerText)][0])
        setSeatsSelected(
          [seatsSelected.filter((item) => item !== props.id)][0]
        );
        return;
      }
      setSeatsSelectedNumber([...seatsSelectedNumber, e.target.innerText])
      setSeatsSelected([...seatsSelected, props.id]);
      setColor("#1AAE9E");
    } else {
      return;
    }
  }

  function subtitleSeat() {
    if (props.special === "#1AAE9E") {
      return " #1AAE9E";
    }
    if (props.special === "#C3CFD9") {
      return "#C3CFD9";
    }
    if (props.special === "#FBE192") {
      return "#FBE192";
    }
  }

  return (
    <ContainerSeat>
      <SeatStyle
        color={
          subtitleSeat()
            ? subtitleSeat()
            : stateSeat === true
            ? color
            : "#FBE192"
        }
        onClick={(e) => chooseSeat(e)}
      >
        {props.name}
      </SeatStyle>
      <SeatSubtitle>{props.subtitle}</SeatSubtitle>
    </ContainerSeat>
  );
}

export default Seat;

const SeatStyle = styled.span`
  background-color: ${(props) => props.color};
  color: black;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 14px;
  margin: 0 4px 10px 4px;
`;

const SeatSubtitle = styled.span``;

const ContainerSeat = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
