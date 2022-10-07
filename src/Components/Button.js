import React from 'react'
import styled from 'styled-components'

function Button(props) {

  return (
    <ButtonStyle onClick={props.onClick} color={props.color} width={props.width}>
      {props.text}
    </ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button`
  width: ${props => props.width}px;
  height: 43px;
  border-radius: 5px;
  background-color: ${props => props.color ? props.color : '#E8833A'} ;
  color: white;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  margin-left: 16px;
  border: none;
`