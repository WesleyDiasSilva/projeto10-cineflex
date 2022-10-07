import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function MoviePoster(props) {
  return (
    <Link to={`/sessoes/${props.id}`}>
        <Imagem size={props.size} src={props.image} alt='Movie Cover'/>
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

