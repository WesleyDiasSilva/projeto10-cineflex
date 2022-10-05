import React from 'react'
import styled from 'styled-components'

function Title({text}) {
  return (
    <div>
      <ContainerText>
          <Text>{text}</Text>
        </ContainerText>
    </div>
  )
}

export default Title
const Text = styled.span`
  font-size: 20px;
  font-family: Roboto;
`

const ContainerText = styled.div`
  width: 100%;
  height: 83px;
  display: flex;
  justify-content: center;
  align-items: center;
`