import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contatos from "./Contatos";

const Rotas = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contatos" element={<Contatos />} />
      </Routes>
    </React.Fragment>
  );
};

export default Rotas;
