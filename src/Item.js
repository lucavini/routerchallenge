import React from "react";

const Item = ({ nome, foto }) => {
  return (
    <div>
      <img src={foto} alt={nome} />
      <p>{nome}</p>
    </div>
  );
};

export default Item;
