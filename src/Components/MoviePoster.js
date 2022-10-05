import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function MoviePoster(props) {
  console.log(193/129)
  return (
    <Link to='/sessoes/1'>
        <Imagem size={props.size} src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg' alt='Movie Cover'/>
    </Link>
  )
}

export default MoviePoster

const Imagem = styled.img`
  width: ${props => props.size * 129}px;
  height: ${props => props.size * 193}px;
  margin-top: 14px;
  margin-bottom: 13px;
`

