import React from "react";
import Head from "./Head";
import useFetch from "./useFetch";
import Item from "./Item";

const Home = () => {
  const [resquest, setResquest] = useFetch();

  React.useEffect(() => {
    setResquest("https://ranekapi.origamid.dev/json/api/produto");
  }, [setResquest]);

  if (resquest != null)
    return (
      <React.Fragment>
        <Head title="Home" />
        {resquest.map((produto) => (
          <Item key={produto.id} nome={produto.nome} foto={produto.fotos[0].src} />
        ))}
      </React.Fragment>
    );

  return null;
};

export default Home;
