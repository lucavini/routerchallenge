import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <div className="navigation-button">
        <Link to="/">
          <button className="btn-nav">Produtos</button>
        </Link>
        <Link to="contatos">
          <button className="btn-nav">Contatos</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;
