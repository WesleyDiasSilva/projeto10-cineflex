import React from 'react'
import styled from 'styled-components'

function Title({text, color}) {
  return (
    <div>
      <ContainerText>
          <Text color={color}>{text}</Text>
        </ContainerText>
    </div>
  )
}

export default Title
const Text = styled.span`
  font-size: 20px;
  font-family: Roboto;
  color: ${props => props.color === 'success' ? '#247A6B' : 'black'};
  font-weight: ${props => props.color === 'success' ? '500' : '300'};
`

const ContainerText = styled.div`
  width: 100%;
  height: 83px;
  display: flex;
  justify-content: center;
  align-items: center;
`