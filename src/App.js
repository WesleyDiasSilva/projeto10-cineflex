import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ConfirmationPage from "./Pages/ConfirmationPage";
import HomePage from "./Pages/HomePage";
import SeatsPage from "./Pages/SeatsPage";
import SessionsPage from "./Pages/SessionsPage";
import GlobalStyle from "../src/styles/global";

function App() {
  const [order, setOrder] = React.useState({});
  const [statusConfirmed, setStatusConfirmed] = React.useState(false)
  const [dateTime, setDateTime] = React.useState({})

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/sessoes/:idMovie"
          element={<SessionsPage setOrder={setOrder} />}
        />
        <Route
          path="/assentos/:idSession"
          element={<SeatsPage setDateTime={setDateTime} setStatusConfirmed={setStatusConfirmed} setOrder={setOrder} />}
        />
        <Route path="/sucesso" element={<ConfirmationPage order={order} dateTime={dateTime} statusConfirmed={statusConfirmed} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
