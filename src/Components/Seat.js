import React from 'react'
import styled from 'styled-components'

function Seat(props) {

  let [seatState, setSeatState] = React.useState('avaible')

  return (
    <ContainerSeat>
      <SeatStyle>
        {props.number}
      </SeatStyle>
        {props.subtitle}
    </ContainerSeat>
    
  )
}

export default Seat

const SeatStyle = styled.div`
  background-color: black;
  color: white;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 14px;
`

const ContainerSeat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`