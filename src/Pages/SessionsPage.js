import React from 'react'
import DateSession from '../Components/DateSession'
import Title from '../Components/Title'
import Footer from '../Components/Footer'
import styled from 'styled-components'

function SessionsPage() {
  return (
    <ContainerSessionPage>
       <Title text='Selecione o horário'/>
       <DateSession />
       <DateSession />
       <Footer />
    </ContainerSessionPage>
  )
}

export default SessionsPage

const ContainerSessionPage = styled.div`
  height: 93vh;
  position: relative;
`