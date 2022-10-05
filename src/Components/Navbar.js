import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <Header>
      <Titulo>CINEFLEX</Titulo>
    </Header>
  )
}

export default Navbar

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #C3CFD9;
  width: 100%;
  height: 67px;
`

const Titulo = styled.h1`
  font-family: Roboto;
  color: #E8833A;
  font-weight: 500;
  font-size: 36px;
`