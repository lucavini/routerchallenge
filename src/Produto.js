import React from "react";
import { useParams } from "react-router";
import Head from "./Head";
import useFetch from "./useFetch";
import "./styles/Produto.css";

const Produto = () => {
  const [request, setResquest] = useFetch();
  const { id } = useParams();

  React.useEffect(() => {
    setResquest(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [setResquest, id]);

  if (request != null)
    return (
      <React.Fragment>
        <Head title={request.nome} />
        <div className="produto anime">
          <img src={request.fotos[0].src} alt="produto" />
          <div className="produto-info">
            <p>{request.nome}</p>
            <p>R$ {request.preco}</p>
          </div>
        </div>
      </React.Fragment>
    );
  return <p>Carregando...</p>;
};

export default Produto;
