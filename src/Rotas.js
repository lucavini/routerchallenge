import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contatos from "./Contatos";
import Produto from "./Produto";

const Rotas = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produto/:id" element={<Produto />} />
        <Route path="contatos" element={<Contatos />} />
      </Routes>
    </React.Fragment>
  );
};

export default Rotas;
