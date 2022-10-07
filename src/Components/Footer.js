import React from 'react'
import styled from 'styled-components'
import MoviePoster from './MoviePoster'

function Footer(props) {


  return (
    <ContainerFooter>
      <ContainerContent>
        <MoviePoster idImage={props.idImage} image={props.image} size={0.35}></MoviePoster>
        <div>
          <MovieName>{props.MovieName}</MovieName>
          <Session>{props.session}</Session>
        </div>
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
  bottom:-200px;
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

const MovieName = styled.h1`
  margin-left: 20px;
`

const Session = styled.h1`
  margin-left: 20px;
  margin-top: 10px;
`