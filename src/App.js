import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Rotas from "./Rotas";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="wrapper">
          <Rotas />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
