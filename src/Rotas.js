import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Contatos from "./Contatos";

const Rotas = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contatos" element={<Contatos />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Rotas;
