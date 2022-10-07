import React, { useEffect } from 'react'
import DateSession from '../Components/DateSession'
import Title from '../Components/Title'
import Footer from '../Components/Footer'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function SessionsPage() {

  

  let [daysSession, setDaysSession ] = React.useState([])
  let [paramsFooter, setParamsFooter] = React.useState([])

  const {idMovie} = useParams()

  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`).then(({data}) => {
      setDaysSession(data.days)
      setParamsFooter(data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <ContainerSessionPage>
       <Title text='Selecione o horário'/>
       {daysSession.map((day) => 
        <DateSession 
        key={day.date}
        weekday={day.weekday}
        date={day.date}
        showtimes={day.showtimes}
        />
       )}
       <Footer image={paramsFooter.posterURL} MovieName={paramsFooter.title}/>
    </ContainerSessionPage>
  )
}

export default SessionsPage

const ContainerSessionPage = styled.div`
  height: 93vh;
  position: relative;
`