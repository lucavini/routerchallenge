import React from "react";
import Head from "./Head";
import useFetch from "./useFetch";
import Item from "./Item";
import "./styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [resquest, setResquest] = useFetch();

  React.useEffect(() => {
    setResquest("https://ranekapi.origamid.dev/json/api/produto");
  }, [setResquest]);

  if (resquest != null)
    return (
      <React.Fragment>
        <Head title="Home" />

        {resquest.map((produto) => 
          <Link
            to={`produto/${produto.id}`}
            key={produto.id}
            className="produtoItem anime"
          >
            <Item nome={produto.nome} foto={produto.fotos[0].src} />
          
          </Link>
        )}
      </React.Fragment>
    );

  return <div>Carregando...</div>;
};

export default Home;
