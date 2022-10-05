import React from 'react'
import styled from 'styled-components'
import MoviePoster from '../Components/MoviePoster'

function HomePage() {
  return (
    <ContainerHome>
        <ContainerText>
          <Text>Selecione o seu filme</Text>
        </ContainerText>
        <ContainerMovies>
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
      </ContainerMovies>
    </ContainerHome>
  )
}

export default HomePage

const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerMovies = styled.div`
  width: 304px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

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