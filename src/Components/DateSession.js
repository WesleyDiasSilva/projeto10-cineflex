import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Link } from 'react-router-dom'

function DateSession({weekday, date, showtimes, setOrder}) {

  return (
    <div>
      <DaySession>{weekday} - {date}</DaySession>
      <ContainerButtons>
        <Link to={`/assentos/${showtimes[0].id}`}>
          <Button  width='83' text={showtimes[0].name}/>
        </Link>
        <Link to={`/assentos/${showtimes[1].id}`}>
          <Button width='83' text={showtimes[1].name}/>
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