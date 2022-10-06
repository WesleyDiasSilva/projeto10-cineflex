import React from 'react'
import styled from 'styled-components'
import Button from '../Components/Button'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import RowOfSeats from '../Components/RowOfSeats'
import Seat from '../Components/Seat'
import Title from '../Components/Title'

function SeatsPage() {
  return (
    <div>
      <Title text='Selecione o(s) assento(s)'/>
      <RowOfSeats row={1}/>
      <RowOfSeats row={2}/>
      <RowOfSeats row={3}/>
      <RowOfSeats row={4}/>
      <RowOfSeats row={5}/>
      <Subtitle>
        <Seat subtitle='Selected'/>
        <Seat subtitle='Avaible'/>
        <Seat subtitle='Unavailable'/>
      </Subtitle>
      <Form />
      <Footer MovieName='Zack Snyder Justice League' session='Quinta-feira - 15:00'/>
    </div>
  )
}

export default SeatsPage

const Subtitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  margin-bottom: 40px;
`