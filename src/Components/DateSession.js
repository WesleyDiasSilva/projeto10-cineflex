import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Link } from 'react-router-dom'

function DateSession() {
  return (
    <div>
      <DaySession>Quinta-feira - 24/10/2021</DaySession>
      <ContainerButtons>
        <Link to='/assentos/:idSession'>
          <Button width='83' text='15:30'/>
        </Link>
        <Link to='/assentos/:idSession'>
          <Button width='83' text='19:00'/>
        </Link>
      </ContainerButtons>
    </div>
  )
}

export default DateSession

const DaySession = styled.h1`
  margin-left: 16px;
  margin-bottom: 22px;
  margin-top: 23px;
  font-family: Roboto;
  font-size: 20px;
`

const ContainerButtons = styled.div`
  
`