import React from 'react'
import Seat from './Seat'
import styled from 'styled-components'
import ROWS from '../Rows'

function RowOfSeats(props) {

  const row = props.row



  return (
    <ContainerRowOfSeats>
      {ROWS[row-1].map((s, i) => <Seat key={i} number={s}/>)}
    </ContainerRowOfSeats>
  )
}

export default RowOfSeats

const ContainerRowOfSeats = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 15px 0 15px;
`