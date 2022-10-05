import React from 'react'
import styled from 'styled-components'
import MoviePoster from './MoviePoster'

function Footer() {
  return (
    <ContainerFooter>
      <ContainerContent>
        <MoviePoster size={0.35}></MoviePoster>
        <Text>Zack Snyder Justice League</Text>
      </ContainerContent>
    </ContainerFooter>
  )
}

export default Footer

const ContainerFooter = styled.div`
  background-color: #DFE6ED;
  width: 100%;
  height: 117px;
  position: absolute;
  bottom:0px;
  z-index: 1;
`

const ContainerContent = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  font-size: 22px;
  font-family: Roboto;
  font-weight: 500;
  width: 300px;
`

const Text = styled.h1`
  margin-left: 20px;
`