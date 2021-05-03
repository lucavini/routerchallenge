import React from "react";

const Item = ({ nome, foto }) => {
  return (
    <div className="produtoItem">
      <img src={foto} alt={"produto " + nome} />
      <p>{nome}</p>
    </div>
  );
};

export default Item;