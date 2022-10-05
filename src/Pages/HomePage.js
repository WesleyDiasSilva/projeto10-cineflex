import React from 'react'
import styled from 'styled-components'
import MoviePoster from '../Components/MoviePoster'
import Title from '../Components/Title'

function HomePage() {
  return (
    <ContainerHome>
        <Title text='Selecione o seu filme'/>
        <ContainerMovies>
          <MoviePoster size='1'/>
          <MoviePoster size='1'/>
          <MoviePoster size='1'/>
          <MoviePoster size='1'/>
          <MoviePoster size='1'/>
          <MoviePoster size='1'/>
          <MoviePoster size='1'/>
          <MoviePoster size='1'/>
          <MoviePoster size='1'/>
          <MoviePoster size='1'/>
          <MoviePoster size='1'/>
          <MoviePoster size='1'/>
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
  width: 334px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

