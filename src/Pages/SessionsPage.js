import React from 'react'
import DateSession from '../Components/DateSession'
import Title from '../Components/Title'

function SessionsPage() {
  return (
    <div>
       <Title text='Selecione o horário'/>
       <DateSession />
       <DateSession />
    </div>
  )
}

export default SessionsPage
