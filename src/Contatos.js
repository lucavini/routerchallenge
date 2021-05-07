import React from "react";
import Head from "./Head";
import useFetch from "./useFetch";
import './styles/Contatos.css';

const Contatos = () => {
  const [request, setResquest] = useFetch();

  React.useEffect(() => {
    setResquest("https://ranekapi.origamid.dev/json/api/produto/smartphone");
  }, [setResquest]);

  if (request != null)
    return (
      <React.Fragment>
        <Head title="Contatos" />
        <div className="contatos anime">
          <img src={request.fotos[0].src} alt="contatos" />
          <div className="contato-info">
            <strong>
              <p>Entre em contato</p>
            </strong>
            <p>_andre@origamid.com</p>
            <p>_99999A9-9999</p>
            <p>_ Rua Ali Perto, 999</p>
          </div>
        </div>
      </React.Fragment>
    );
  return null;
};

export default Contatos;
