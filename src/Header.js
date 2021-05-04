import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  const [selected, setSelected] = React.useState("Produtos");

  function handelClick({ target }) {
    setSelected(target.innerText);
  }

  return (
    <React.Fragment>
      <div className="navigation-button">
        <Link to="/">
          <button onClick={handelClick} className={selected==='Produtos'? 'selected':''}  >
            Produtos
          </button>
        </Link>
        <Link to="contatos">
          <button onClick={handelClick} className={selected==='Contatos'? 'selected':''} >
            Contatos
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;
