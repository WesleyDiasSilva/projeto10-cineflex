import axios from 'axios'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import MoviePoster from '../Components/MoviePoster'
import Title from '../Components/Title'

function HomePage() {

  let [movies, setMovies] = React.useState([])

  useEffect(() => {
    axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies').then((res) => {
      setMovies(res.data)
    }).catch((error) => {
      console.log(error.response)
    })
  }, [])

  return (
    <ContainerHome>
        <Title text='Selecione o seu filme'/>
        <ContainerMovies>
          {movies.map((movie) => <MoviePoster key={movie.id} image={movie.posterURL} id={movie.id} size='1'/>)}
          
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

