import React from 'react'
import DateSession from '../Components/DateSession'
import Title from '../Components/Title'
import Footer from '../Components/Footer'
import styled from 'styled-components'

function SessionsPage() {

  let [sessionAvaible, setSessionAvaible] = React.useState(true)

  return (
    <ContainerSessionPage>
       <Title text='Selecione o horário'/>
       <DateSession />
       <DateSession />
       <Footer MovieName={'Zack Snyder Justice League'}/>
    </ContainerSessionPage>
  )
}

export default SessionsPage

const ContainerSessionPage = styled.div`
  height: 93vh;
  position: relative;
`