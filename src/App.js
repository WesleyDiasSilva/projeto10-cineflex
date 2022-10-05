import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ConfirmationPage from "./Pages/ConfirmationPage";
import HomePage from "./Pages/HomePage";
import SeatsPage from "./Pages/SeatsPage";
import SessionsPage from "./Pages/SessionsPage";
import GlobalStyle from '../src/styles/global'

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/sessoes/:idMovie" element={<SessionsPage />} />
        <Route path="/assentos/:idSession" element={<SeatsPage />}/>
        <Route path="/sucesso" element={<ConfirmationPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
