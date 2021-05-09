import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className="navigation-button">

        <NavLink activeClassName="active" to="/" end>
          <button>Produtos</button>
        </NavLink>

        <NavLink activeClassName="active" to="contatos">
          <button>Contatos</button>
        </NavLink>
        
      </div>
    </React.Fragment>
  );
};

export default Header;
